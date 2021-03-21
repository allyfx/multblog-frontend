import { useContext } from "react";
import { useRouter } from "next/router";
import { ApplicationContext } from "contexts/Application";
import {
  HeaderContainer,
  HeaderContent,
  UserAvatar,
} from "styles/components/Header";

export default function Header() {
  const router = useRouter();
  const { user } = useContext(ApplicationContext);
  if (!router.pathname.includes("session")) {
    return (
      <HeaderContainer>
        <HeaderContent>
          <img
            src="../assets/logo.png"
            alt="MultBlog"
            onClick={() => router.push("/")}
          />
          <div>
            <span>Todos os posts</span>
            <div className="separator" />
            {user.id !== undefined ? (
              <>
                <label>{user.name}</label>
                <UserAvatar>
                  <img src="../assets/user.png" alt={user.name} />
                </UserAvatar>
              </>
            ) : (
              <>
                <button
                  onClick={() => router.push("/session/login")}
                  className="login_button"
                >
                  LogIn
                </button>
                <span onClick={() => router.push("/session/signin")}>
                  SignIn
                </span>
              </>
            )}
          </div>
        </HeaderContent>
      </HeaderContainer>
    );
  }
  return null;
};