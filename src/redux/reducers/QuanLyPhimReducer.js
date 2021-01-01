import {
  GET_DANH_SACH_PHIM,
  GET_PHIM_DANG_CHIEU,
  GET_PHIM_SAP_CHIEU,
} from "../actions/types/LayDanhSachPhimType";
import { GET_THONG_TIN_PHIM_THEO_RAP } from "../actions/types/LayDanhSachRapType";

const stateDefault = {
  arrMovie: [
    {
      maPhim: 5863,
      tenPhim: "Lật Mặt: 48h",
      biDanh: "lat-mat-48h",
      trailer: "https://youtu.be/UeyaR8jWl2c",
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/lat-mat-48h_gp00.jpg",
      moTa: "to be updated",
      maNhom: "GP00",
      ngayKhoiChieu: "2021-03-09T00:00:00",
      danhGia: 5,
      hot: null,
      dangChieu: null,
      sapChieu: null,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrMovieDefault: [],
  filmDetail: {}
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_DANH_SACH_PHIM: {
      state.arrMovie = action.arrMovie;
      state.arrMovieDefault = state.arrMovie;
      return { ...state };
    }

    case GET_PHIM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;
      state.arrMovie = state.arrMovieDefault.filter(
        (phim) => phim.dangChieu === state.dangChieu
      );
      return { ...state };
    }

    case GET_PHIM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;
      state.arrMovie = state.arrMovieDefault.filter(
        (phim) => phim.sapChieu === state.sapChieu
      );
      return { ...state };
    }

    case GET_THONG_TIN_PHIM_THEO_RAP: {
      state.filmDetail = action.filmDetail
      return { ...state }
    }

    default:
      return { ...state };
  }
};
