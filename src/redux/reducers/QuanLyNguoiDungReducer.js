import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { GET_THONG_TIN_DANG_NHAP } from "../actions/types/QuanLyNguoiDungType";


let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
    userLogin: user
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case GET_THONG_TIN_DANG_NHAP: {
            const { thongTinDangNhap } = action
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken)
            return { ...state, userLogin: thongTinDangNhap }
        }

        default:
            return { ...state }
            break;
    }
}