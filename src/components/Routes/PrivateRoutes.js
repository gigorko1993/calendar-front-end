import { Navigate, Outlet } from "react-router-dom";
import authSelectors from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
