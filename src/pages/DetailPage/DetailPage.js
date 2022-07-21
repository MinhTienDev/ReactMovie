import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";
import moment from "moment";
import DetailTabs from "./DetailTabs";
export default function DetailPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    movieService
      .getDetailMovie(id)
      .then((res) => {
        setMovie(res.data.content);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="  container mx-auto py-10 space-y-10">
      <div className="flex items-center space-x-20">
        <div className="w-1/2">
          <img src={movie.hinhAnh} className="w-96 rounded" alt="" />
        </div>
        <div className="w-1/2 ">
          <p className="font-bold  text-5xl  my-5 ">{movie.tenPhim}</p>
          <p className="my-5 text-2xl">Mô tả phim:{movie.moTa}</p>
          <p className="my-5 text-2xl">
            Ngày khởi chiếu: {moment(movie.ngayKhoiChieu).format("DD/MM/YYYY")}
          </p>

          <Progress
            type="circle"
            percent={movie.danhGia * 10}
            width={200}
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            strokeWidth={10}
            format={(number) => {
              return <span className="text-blue-700">{number / 10} diem</span>;
            }}
          />
        </div>
      </div>

      <DetailTabs movie={movie} />
    </div>
  );
}

// boilerplate
