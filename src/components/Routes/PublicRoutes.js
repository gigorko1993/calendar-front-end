import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";

const PublicRoute = ({ restricted = false }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/calendar" /> : <Outlet />;
};

export default PublicRoute;
