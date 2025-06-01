import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));
const OTP = lazy(() => import("./otp/OTP"));
const Register = lazy(() => import("./register/Register"));
const Login = lazy(() => import("./login/Login"));

const MainRouters = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/otp",
          element: <OTP />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ])}
    </>
  );
};

export default memo(MainRouters);
