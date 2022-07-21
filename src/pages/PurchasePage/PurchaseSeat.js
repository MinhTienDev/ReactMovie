import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSelectSeat,
  setSelectSeat,
} from "../../redux/actions/userAction";

export default function PurchaseSeat({ dataSeat }) {
  const [seats, setSeats] = useState([]);
  const dispatch = useDispatch();

  let selectSeat = useSelector((state) => state.userReducer.selectSeat);

  useEffect(() => {
    let chunkedList = _.chunk(dataSeat, 16);
    setSeats(chunkedList);
  }, [selectSeat]);

  return (
    <>
      {seats?.map((row, iRow) => {
        return (
          <div
            key={iRow}
            className="flex items-center text-center sm:space-x-1 md:space-x-2 mb-2 w-full sm:text-xs "
          >
            {row.map((seat) => {
              if (seat.loaiGhe == "Vip" && seat.daDat === false) {
                if (seat.reserved === true) {
                  return (
                    <div
                      className="  w-12 h-12  bg-green-500  px-3 py-3  rounded cursor-pointer"
                      onClick={() => {
                        dispatch(handleSelectSeat(seat));
                      }}
                    >
                      {seat.tenGhe}
                    </div>
                  );
                } else {
                  return (
                    <div
                      className=" w-12 h-12  px-3 py-3  bg-orange-500 rounded cursor-pointer"
                      onClick={() => {
                        dispatch(handleSelectSeat(seat));
                      }}
                    >
                      {seat.tenGhe}
                    </div>
                  );
                }
              }
              if (seat.loaiGhe == "Thuong" && seat.daDat === false) {
                if (seat.reserved === true) {
                  return (
                    <div
                      className=" w-12 h-12  bg-green-500 px-3 py-3   rounded cursor-pointer"
                      onClick={() => {
                        dispatch(handleSelectSeat(seat));
                      }}
                    >
                      {seat.tenGhe}
                    </div>
                  );
                } else {
                  return (
                    <div
                      className=" px-3 py-3 w-12 h-12 bg-gray-100 rounded cursor-pointer"
                      onClick={() => {
                        dispatch(handleSelectSeat(seat));
                      }}
                    >
                      {seat.tenGhe}
                    </div>
                  );
                }
              }
              if (seat.loaiGhe == "Thuong" && seat.daDat === true) {
                return (
                  <div className=" px-3 py-3 w-12 h-12  bg-gray-500 rounded cursor-not-allowed">
                    X
                  </div>
                );
              }
            })}
          </div>
        );
      })}

      <div className="flex justify-center mt-9">
        <div className=" mx-5">
          <div className="px-3 py-3 w-12 h-12  bg-gray-500 rounded text-center ">
            X
          </div>
          <p className="mt-3">Đã đặt</p>
        </div>
        <div className=" mx-5">
          <div className="   w-12 h-12 bg-orange-500 rounded text-center  text-white cursor-pointer"></div>
          <p className="mt-3">Ghế VIP</p>
        </div>
        <div className=" mx-5">
          <div className="   w-12 h-12 bg-gray-100 rounded text-center  cursor-pointer"></div>
          <p className="mt-3">Ghế thường</p>
        </div>
        <div className=" mx-5">
          <div className="   w-12 h-12 bg-green-500 rounded text-center  text-white cursor-pointer"></div>
          <p className="mt-3">Ghế đã chọn</p>
        </div>
      </div>
    </>
  );
}
