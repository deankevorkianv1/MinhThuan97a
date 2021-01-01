import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { GET_DANH_SACH_PHIM } from "./types/LayDanhSachPhimType";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim();

      dispatch({
        type: GET_DANH_SACH_PHIM,
        arrMovie: result.data.content,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};
