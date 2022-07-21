import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configURL";

export const movieService = {
  getMovieList: () => {
    return axios.get(`${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02`, {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getMovieByTheater: () => {
    return axios.get(
      `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },

  getDetailMovie: (maPhim) => {
    return axios.get(
      `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },
  getBannerMovie: () => {
    return axios.get(`${BASE_URL}/api/QuanLyPhim/LayDanhSachBanner`, {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getListTheater: (maLichChieu) => {
    return axios.get(
      `${BASE_URL}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },
};
