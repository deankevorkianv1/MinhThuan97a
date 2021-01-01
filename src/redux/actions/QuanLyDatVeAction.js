import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { GET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";


export const layChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu)

            if (result.data.statusCode === 200) {
                dispatch({
                    type: GET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
                console.log('result', result);
            }

        }

        catch (error) {
            console.log('error', error.response.data);
        }
    }
}