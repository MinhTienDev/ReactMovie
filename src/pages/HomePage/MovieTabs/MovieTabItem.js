import React from "react";
import moment from "moment";

import { NavLink } from "react-router-dom";
export default function MovieTabItem({ movie }) {
  return (
    <div className="flex border-b-2 py-5">
      <img src={movie.hinhAnh} alt="" className="w-60 h-60 mr-6" />
      <div>
        <div className=" items-center ">
          <h2 className=" text-5xl font-normal">{movie.tenPhim}</h2>
        </div>
        <div className="">
          {movie.lstLichChieuTheoPhim.map((item, index) => {
            if (index < 8)
              return (
                <NavLink to={`/purchase/${item.maLichChieu}`}>
                  <div className=" inline-block hover:cursor-pointer hover:bg-red-300 hover:font-bold hover:transition m-3 border-2 border-red-400 rounded-2xl p-3  ">
                    <span className="text-green-600  ">
                      {moment(item.ngayChieuGioChieu).format("DD-MM-YYYY")}
                    </span>
                    <span>~</span>
                    <span className="text-red-500">
                      {moment(item.ngayChieuGioChieu).format("HH:MM")}
                    </span>
                  </div>
                </NavLink>
              );
          })}
        </div>
      </div>
    </div>
  );
}
