import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./redux/auth/authOperations";
import authSelectors from "./redux/auth/authSelectors";
import PrivateRoute from "./components/Routes/PrivateRoutes";
import PublicRoute from "./components/Routes/PublicRoutes";
import "react-toastify/dist/ReactToastify.css";
// import AuthBar from "./components/AuthBar";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastContainer } from "react-toastify";

const RegisterView = lazy(() =>
  import(
    "./views/RegisterView/RegisterView" /* webpackChunkName: "register-view" */
  )
);
const LoginView = lazy(() =>
  import("./views/LoginView/LoginView" /* webpackChunkName: "login-view" */)
);
const CalendarView = lazy(() =>
  import(
    "./views/CalendarView/CalendarView" /* webpackChunkName: "contacts-view" */
  )
);

const loader = (
  <Loader
    type="Circles"
    color="rgba(70, 70, 241, 0.5)"
    height={66}
    width={66}
  />
);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <>
        <Suspense fallback={loader}>
          <PublicRoute path="/register" redirectTo="/contacts" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <CalendarView />
          </PrivateRoute>
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    )
  );
};

export default App;
//   return (
//     <Container>
//       <Routes>
//         {loading ? (
//           <Route path="*" element={<Loader />} />
//         ) : (
//           <Route path="/" element={<PrivateOutlet />}>
//             <Route element={<DashboardPage />}>
//               <Route index element={<Navigate to="/home" />} />
//               <Route path="home" element={<HomeTab />} />
//               <Route path="diagram" element={<DiagramTab />} />
//               <Route
//                 path="currency"
//                 element={
//                   <Media query={{ maxWidth: 767 }}>
//                     {(matches) =>
//                       matches ? <Currency /> : <Navigate to="/home" />
//                     }
//                   </Media>
//                 }
//               />
//             </Route>
//           </Route>
//         )}

//         <Route path="login" element={<PublicOutlet restricted />}>
//           <Route index element={<LoginPage />} />
//         </Route>
//         <Route path="register" element={<PublicOutlet restricted />}>
//           <Route index element={<RegistrationPage />} />
//         </Route>
//         <Route path="*" element={<LoginPage />} />
//       </Routes>
//       <ToastContainer autoClose={2000} />
//     </Container>
//   );
// }

// export default App;
