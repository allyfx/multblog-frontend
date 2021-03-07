import { useEffect } from "react";
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
}

export const ApplicationContext = createContext({} as IApplicationContext);

export function ApplicationProvider({ children }: IApplicationProviderProps) {
	const [user, setUser] = useState<IUser>({});
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
		}}>
			{children}
		</ApplicationContext.Provider>
	);
}
