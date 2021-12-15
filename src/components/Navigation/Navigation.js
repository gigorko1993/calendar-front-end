import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Navigation.module.css";
import authSelectors from "../../redux/auth/authSelectors";

export default function NavigationBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <ul className={s.NavList}>
      {isLoggedIn && (
        <li className={s.NavItem}>
          <NavLink
            className={s.NavLink}
            activeclassname={s.NavLinkActive}
            to="/calendar"
          >
            Calendar
          </NavLink>
        </li>
      )}
    </ul>
  );
}
