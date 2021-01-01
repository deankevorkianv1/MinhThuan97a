import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
    constructor() {
        super();
    }

    danhNhap = (thongTinDangNhap) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap
        `, thongTinDangNhap);
    };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
