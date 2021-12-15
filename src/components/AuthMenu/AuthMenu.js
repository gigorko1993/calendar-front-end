import { NavLink } from "react-router-dom";
import s from "./AuthMenu.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeclassname={s.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeclassname={s.activeLink}
      >
        login
      </NavLink>
    </div>
  );
}
