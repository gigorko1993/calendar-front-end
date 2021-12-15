import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./redux/auth/authOperations";
import authSelectors from "./redux/auth/authSelectors";
import RegisterView from "./views/RegisterView/RegisterView";
import LoginView from "./views/LoginView/LoginView";
import PrivateRoute from "./components/Routes/PrivateRoutes";
import CalendarView from "./views/CalendarView/CalendarView";
import PublicRoute from "./components/Routes/PublicRoutes";
import AuthBar from "./components/AuthBar";
import Loader from "./components/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route element={<AuthBar />} />
        {isLoading ? (
          <Route path="*" element={<Loader />} />
        ) : (
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/calendar" element={<CalendarView />} />
          </Route>
        )}

        <Route path="/login" element={<PublicRoute restricted />}>
          <Route index element={<LoginView />} />
        </Route>
        <Route path="/register" element={<PublicRoute restricted />}>
          <Route index element={<RegisterView />} />
        </Route>
        <Route path="*" element={<LoginView />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default App;
