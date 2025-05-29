import { memo } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 bg-text-primary py-5 shadow fixed w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <NavLink to={"/"}>
            <span className="text-[20px] font-medium font-[Inter]">Logo</span>
          </NavLink>
        </div>
        <ul className="flex items-center gap-10 text-[20px] font-medium font-[Inter]">
          <li>
            <NavLink to={"/"}>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/register"} className={"px-10 py-3 border border-[#3dc2cf] rounded-full"}>
              <span className="text-[18px] text-[#3dc2cf]">Register</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
