import { memo } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div>
          <NavLink to={"/"}>
            <span className="text-white text-[22px] font-semibold font-[Inter] hover:opacity-90 transition">
              MyBrand
            </span>
          </NavLink>
        </div>
        <ul className="flex items-center gap-8 text-white text-[18px] font-medium font-[Inter]">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-gray-200 transition"
              }>
              Home
            </NavLink>
          </li>
          <li className="flex flex-row items-center gap-3">
            <NavLink
              to={"/otp"}
              className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-full border border-white hover:bg-indigo-100 transition">
              Register
            </NavLink>
            <NavLink
              to={"/login"}
              className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-full border border-white hover:bg-indigo-100 transition">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
