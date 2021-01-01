import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhongVeAction } from "../../redux/actions/QuanLyDatVeAction";
import style from "./Checkout.module.css";
import './Checkout.css'
import { DAT_VE } from "../../redux/actions/types/QuanLyDatVeType";
import _ from "lodash";

export default function Checkout(props) {
    const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

    const { chiTietPhongVe, danhSachGheDangDat } = useSelector((state) => state.QuanLyDatVeReducer);

    const dispatch = useDispatch();

    console.log("chiTietPhongVe", { chiTietPhongVe });

    useEffect(() => {
        dispatch(layChiTietPhongVeAction(props.match.params.id));
    }, []);

    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

    const renderGhe = () => {
        return danhSachGhe.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : ''
            let classGheDangDat = '';


            let indexgheDD = danhSachGheDangDat.findIndex((gheDD) => gheDD.maGhe === ghe.maGhe)
            if (indexgheDD !== -1) {
                classGheDangDat = 'gheDangDat'
            }


            return (
                <Fragment key={index}>
                    {" "}
                    <button onClick={() => {
                        dispatch({
                            type: DAT_VE,
                            gheDuocChon: ghe
                        })
                    }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDangDat} ${classGheDaDat} text-center`}>

                        {ghe.daDat ? 'X' : ghe.stt}

                    </button>
                    {(index + 1) % 16 === 0 ? <br /> : ''}
                </Fragment>
            );
        });
    };

    return (
        <div className=" min-h-full mt-4">
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <div></div>
                    <div className="flex flex-col items-center mt-8">
                        <div
                            className="bg-black"
                            style={{ width: "80%", height: "20px" }}
                        ></div>
                        <div className={`${style["trapezoid"]} text-center text-2xl`}>
                            <h3 className="mt-3">Màn hình</h3>
                        </div>
                        <div>{renderGhe()}</div>
                    </div>
                </div>
                <div className="col-span-3 mr-20 ">
                    <h3 className="text-center text-2xl text-green-600">
                        {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                            return tongTien += ghe.giaVe
                        }, 0)}Đ
                    </h3>
                    <hr />
                    <h4 className="text-bold text-4xl my-2 text-center">{thongTinPhim.tenPhim}</h4>
                    <p className="text-left text-2xl">{thongTinPhim.tenCumRap}</p>
                    <p className="text-left text-xl">
                        {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}-{" "}
                        {thongTinPhim.tenRap}
                    </p>
                    <hr />
                    {/* <div className="flex justify-between my-5"> */}
                    {/* <div>
                            <span className="text-red-600 font-bold text-lg">Ghe</span>
                        </div>
                        <div>
                            <span className="text-lg font-bold text-green-600">0d</span>
                        </div> */}
                    <table className="table w-full">
                        <thead>
                            <tr className="text-red-600 font-semibold text-lg">
                                <th >Ghế</th>
                                <th>Giá vé</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center font-semibold text-xl">
                                <td>
                                    {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                                        return <span key={index}>
                                            {gheDD.stt} <br />
                                        </span>
                                    })}
                                </td>
                                <td>
                                    {danhSachGheDangDat.map((gheDD, index) => {
                                        return <span key={index}>
                                            {gheDD.giaVe} <br />
                                        </span>
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <div className="flex justify-between my-5">
                        <p className="text-xl font-bold">Tổng tiền</p>
                        <span className="mr-16 text-red-500 text-xl font-bold ">
                            {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                return tongTien += ghe.giaVe
                            }, 0)}
                        </span>
                    </div>
                    {/* </div> */}
                    <hr />
                    <div className="my-2">
                        <i className="text-blue-500">Email:</i> <br />
                        <input className="text-base font-medium" value={userLogin.email} />
                    </div>
                    <hr />
                    <div className="mt-2">
                        <i className="text-blue-500">Số Điện Thoại:</i> <br />
                        <input className="text-base font-medium" value={userLogin.soDT} />
                    </div>

                    <div className="h-2/7 flex flex-col justify-end items-center">
                        <div className="bg-green-500 text-white w-full  text-center cursor-pointer py-2 text-lg">
                            ĐẶT VÉ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
