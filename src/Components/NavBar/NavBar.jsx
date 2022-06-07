import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../Hooks/useAuthentication";

import { useAuthValue } from "../../Context/AuthContext";

//Styles
import styles from "./navBar.module.css";
import {
  NavBarStyle,
  Brand,
  Span,
  Links_list_ul,
  Links_list_li,
} from "./NavBarStyle";

export const NavBar = () => {
  const { user } = useAuthValue();

  const { logout } = useAuthentication();

  return (
    <NavBarStyle>
      <NavLink to="/">
        <Brand>
          Mini <Span>Blog</Span>
        </Brand>
      </NavLink>
      <Links_list_ul>
        <Links_list_li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </Links_list_li>
        {!user && (
          <>
            <Links_list_li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Login
              </NavLink>
            </Links_list_li>
            <Links_list_li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar-se
              </NavLink>
            </Links_list_li>
          </>
        )}
        {user && (
          <>
            <Links_list_li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </Links_list_li>
            <Links_list_li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                DashBoard
              </NavLink>
            </Links_list_li>
          </>
        )}
        <Links_list_li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </Links_list_li>
        {user && (
          <Links_list_li>
            <button onClick={logout}>Sair</button>
          </Links_list_li>
        )}
      </Links_list_ul>
    </NavBarStyle>
  );
};
