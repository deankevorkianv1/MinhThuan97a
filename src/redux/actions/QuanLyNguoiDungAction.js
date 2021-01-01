import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { GET_THONG_TIN_DANG_NHAP } from "./types/QuanLyNguoiDungType";
import { history } from '../../App'

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.danhNhap(thongTinDangNhap)
            console.log('result', result);

            if (result.data.statusCode === 200) {
                dispatch({
                    type: GET_THONG_TIN_DANG_NHAP,
                    thongTinDangNhap: result.data.content
                })
                //Directive ve trang truoc
                history.goBack()
            }




        }
        catch (error) {
            console.log('errors', error.response.data);
        }
    }
}