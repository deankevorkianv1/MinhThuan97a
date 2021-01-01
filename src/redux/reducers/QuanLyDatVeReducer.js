import { Ghe, ThongTinLichChieu } from "../../_core/models/ThongTinLichChieu";
import { DAT_VE, GET_CHI_TIET_PHONG_VE } from "../actions/types/QuanLyDatVeType";

const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: []
}

export const QuanLyDatVeReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case GET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        }

        case DAT_VE: {
            //cap nhat danh sach ghe dang dat
            let danhSachGheCapNhat = [...state.danhSachGheDangDat]

            let index = danhSachGheCapNhat.findIndex((gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe)
            if (index !== -1) {
                danhSachGheCapNhat.splice(index, 1)
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon)
            }
            console.log(action);
            return { ...state, danhSachGheDangDat: danhSachGheCapNhat }
        }

        default:
            return { ...state }
            break;
    }

}