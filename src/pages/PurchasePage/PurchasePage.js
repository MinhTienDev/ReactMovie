import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";
import PurchaseDetail from "./PurchaseDetail";
import PurchaseSeat from "./PurchaseSeat";

export default function PurchasePage() {
  let { lichChieu } = useParams();
  const [dataLichChieu, setDataLichChieu] = useState({});

  useEffect(() => {
    movieService
      .getListTheater(lichChieu)
      .then((res) => {
        console.log("res: ", res);
        setDataLichChieu(res.data.content);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="container mx-auto  w-full">
      <div className="lg:grid lg:grid-cols-3  gap-5 mt-10 mb-10 w-full">
        {dataLichChieu.hasOwnProperty("danhSachGhe") && (
          <div className="w-full lg:col-span-2">
            <PurchaseSeat dataSeat={dataLichChieu.danhSachGhe} />
          </div>
        )}
        {dataLichChieu.hasOwnProperty("thongTinPhim") && (
          <PurchaseDetail thongTinPhim={dataLichChieu.thongTinPhim} />
        )}
      </div>
    </div>
  );
}
