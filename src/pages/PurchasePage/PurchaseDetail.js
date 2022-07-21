import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import { userService } from "../../services/userService";

export default function PurchaseDetail({ thongTinPhim }) {
  const selected = useSelector((state) => state.userReducer.selectSeat);
  const user = useSelector((state) => state.userReducer.userInfor);
  const history = useHistory();
  const seats = () => {
    let names = "";
    let total = 0;
    if (selected.length) {
      selected.forEach((e) => {
        names += `Ghế ${e.tenGhe},`;
        total += e.giaVe;
      });
    }
    return { names, total };
  };

  const booking = () => {
    if (!selected.length) message.error("Bạn chưa chọn ghế");
    else if (!user) message.error("Bạn chưa đăng nhập");
    else {
      let body = {
        maLichChieu: thongTinPhim?.maLichChieu,
        danhSachVe: selected,
      };
      userService
        .postDatVe(body)
        .then((res) => {
          message.info(res.data.content);
          setTimeout(() => {
            history.push("/");
          }, 2000);
        })
        .catch((err) => {});
    }
  };
  return (
    <div className="w-full h-full">
      <div className=" bg-slate-100 col-span-1">
        <div className="flex justify-center px-4 py-8 border-b border-slate-300 text-2xl">
          <span className="text-slate-600 text-3xl">{seats().total} vnđ</span>
        </div>
        <div className="flex justify-between px-4 py-8 border-b border-slate-300 text-xl font-bold">
          <span className="text-slate-600">Cụm rạp:</span>
          <span className="text-green-600">{thongTinPhim?.tenCumRap}</span>
        </div>
        <div className="flex justify-between px-4 py-8 border-b border-slate-300 text-xl font-bold">
          <span className="text-slate-600">Địa chỉ:</span>
          <span className="text-green-600 text-right">
            {thongTinPhim?.diaChi}
          </span>
        </div>
        <div className="flex justify-between px-4 py-8 border-b border-slate-300 text-xl font-bold">
          <span className="text-slate-600">Rạp:</span>
          <span className="text-green-600">{thongTinPhim?.tenRap}</span>
        </div>
        <div className="flex justify-between px-4 py-8 border-b border-slate-300 text-xl font-bold">
          <span className="text-slate-600">Ngày giờ chiếu:</span>
          <span className="text-green-600">
            {thongTinPhim?.ngayChieu + " ~ " + thongTinPhim?.gioChieu}
          </span>
        </div>
        <div className="flex justify-between px-4 py-8 border-b border-slate-300 text-xl font-bold">
          <span className="text-slate-600">Tên phim:</span>
          <span className="text-green-600">{thongTinPhim?.tenPhim}</span>
        </div>
        <div className="flex justify-between px-4 py-8 border-b border-slate-300 text-xl font-bold">
          <span className="text-slate-600">Ghế chọn:</span>
          <span className="text-green-600 text-right">{seats().names}</span>
        </div>
        <button
          className="block w-full h-10 bg-red-500 hover:bg-red-400 text-white rounded-b-lg"
          style={{ transition: "0.3s" }}
          onClick={booking}
        >
          Đặt vé
        </button>
      </div>
    </div>
  );
}
