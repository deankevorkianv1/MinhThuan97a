import { quanLyRapService } from "../../services/QuanLyRapServices";
import { GET_HE_THONG_RAP_CHIEU, GET_THONG_TIN_PHIM_THEO_RAP } from "./types/LayDanhSachRapType";

export const LayDanhSachCumRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();
      console.log("result", result);

      if (result.status === 200) {
        dispatch({
          type: GET_HE_THONG_RAP_CHIEU,
          heThongRapChieu: result.data.content,
        });
      }
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const LayThongTinPhimTheoRap = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinLichChieuPhim(id);
      console.log('result', result);

      dispatch({
        type: GET_THONG_TIN_PHIM_THEO_RAP,
        filmDetail: result.data.content
      })

    }
    catch (errors) {
      console.log('errorrs', errors);
    }
  }
}
