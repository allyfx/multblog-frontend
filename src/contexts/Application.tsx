import { Dispatch, SetStateAction, useEffect } from "react";
import { createContext, ReactNode, useState } from "react";

interface IUser {
	id?: string;
	name?: string;
	email?: string;
	token?: string;
}

interface IApplicationProviderProps {
	children: ReactNode;
}

interface IApplicationContext {
	user: IUser;
  authenticateUser: (user: IUser) => void;
}

export const ApplicationContext = createContext({} as IApplicationContext);

export function ApplicationProvider({ children }: IApplicationProviderProps) {
	const [user, setUser] = useState<IUser>({});
  const authenticateUser = (user: IUser) => {
    setUser(user);
    localStorage.setItem('multblog:login', JSON.stringify(user));
  };
	const getData = () => {
		const local = localStorage.getItem('multblog:login');
		if (!local) return;
		setUser(JSON.parse(local));
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<ApplicationContext.Provider value={{
			user,
      authenticateUser,
		}}>
			{children}
		</ApplicationContext.Provider>
	);
}
