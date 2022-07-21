import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function DetailTabItem({ movie }) {
  return (
    <NavLink to={"/purchase/" + movie.maLichChieu}>
      <div
        className=" inline-block m-3 ml-0 border rounded-lg p-3 hover:font-bold w-44 hover:cursor-pointer "
        style={{ transition: "0.1s" }}
      >
        <span className="text-green-500 ">
          {moment(movie.ngayChieuGioChieu).format("DD-MM-YYYY")}
        </span>
        <span>~</span>
        <span className="text-red-500">
          {moment(movie.ngayChieuGioChieu).format("HH:MM")}
        </span>
      </div>
    </NavLink>
  );
}
