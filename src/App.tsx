import { memo } from "react";
import Header from "./components/header/Header";
import MainRouters from "./pages/index";

const App = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <Header />
      <MainRouters />
    </div>
  );
};

export default memo(App);
