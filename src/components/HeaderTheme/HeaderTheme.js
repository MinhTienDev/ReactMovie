import React from "react";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

export default function HeaderTheme() {
  return (
    <div className="h-20 w-full flex items-center justify-between shadow-lg px-20">
      <NavLink to="/">
        <img
          className=" w-52"
          src="http://demo1.cybersoft.edu.vn/logo.png"
          alt=""
        />
      </NavLink>

      <div className="space-x-5 text-lg font-medium text-gray-600">
        <span>Tin tức</span>
        <span>Cụm rạp</span>
        <span>Lịch chiếu</span>
      </div>

      <UserNav />
    </div>
  );
}
