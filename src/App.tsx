import { memo } from "react";
import Header from "./components/header/Header";
import MainRouters from "./pages/index";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <Header />
      <MainRouters />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default memo(App);
