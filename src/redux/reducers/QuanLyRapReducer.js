import { GET_HE_THONG_RAP_CHIEU, GET_THONG_TIN_PHIM_THEO_RAP } from "../actions/types/LayDanhSachRapType";

const stateDefault = {
  heThongRapChieu: [],
};

export const QuanLyRapReducer = (state = stateDefault, action) => {
  switch (action.type) {


    case GET_HE_THONG_RAP_CHIEU:
      {
        state.heThongRapChieu = action.heThongRapChieu;
        return { ...state };
      }

    default:
      return { ...state };
      break;
  }
};
