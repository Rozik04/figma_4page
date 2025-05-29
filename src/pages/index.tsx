import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));
const Register = lazy(() => import("./register/Register"));

const MainRouters = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ])}
    </>
  );
};

export default memo(MainRouters);
