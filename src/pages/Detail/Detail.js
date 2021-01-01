import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/style/styles.css";
import { Tabs, Radio, Space, Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { GET_THONG_TIN_PHIM_THEO_RAP } from "../../redux/actions/types/LayDanhSachRapType";
import { LayThongTinPhimTheoRap } from "../../redux/actions/LayDanhSachCumRap";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

export default function Detail(props) {
    const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
    console.log({ filmDetail });

    const dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params;

        dispatch(LayThongTinPhimTheoRap(id));
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${filmDetail.hinhAnh})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}
        >
            <CustomCard
                effectColor="#fff" // required
                color="#fff" // default color is white
                blur={5} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
                style={{ paddingTop: 150, minHeight: "100vh" }}
            >
                <div className="grid grid-cols-12">
                    <div className="col-span-5 col-start-3">
                        <div className="grid grid-cols-3">
                            <img
                                className="col-span-1"
                                src={filmDetail.hinhAnh}
                                style={{ width: "100%", height: 300 }}
                                alt="123"
                            />
                            <div
                                className="col-span-2 text-left text-white ml-5"
                                style={{ marginTop: "15%" }}
                            >
                                <p>
                                    {" "}
                                    <span className="text-red-600"></span>{" "}
                                    {moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}
                                </p>
                                <p className="font-semibold text-xl">
                                    <span className="text-red-600"></span>{" "}
                                    {filmDetail.tenPhim}
                                </p>
                                <p className="text-left">{filmDetail.moTa}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 ml-10">
                        <h1
                            style={{
                                marginRight: "45%",
                                color: "yellow",
                                fontWeight: "revert",
                                fontSize: "20px",
                            }}
                        >
                            Đánh giá
                        </h1>
                        <h1 style={{ marginRight: "42%" }}>
                            <Rate allowHalf value={filmDetail.danhGia / 2} />
                        </h1>
                        <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                            <span>{filmDetail.danhGia * 10}%</span>
                            <div className="slice">
                                <div className="bar" />
                                <div className="fill" />
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <Tabs defaultActiveKey="1" centered className="bg-white">
                        <TabPane tab={<div style={{ fontSize: 20, fontWeight: 500 }}>Lịch Chiếu</div>} key="1">
                            <div className="mt-10 container ml-16 ">
                                <Tabs tabPosition={"left"} >
                                    {filmDetail.heThongRapChieu?.map((htr, index) => {
                                        return (
                                            <TabPane
                                                key={index}
                                                tab={
                                                    <div className="text-xl">
                                                        {" "}
                                                        <img className="rounded-full"
                                                            style={{ width: 50, height: 50 }}
                                                            src={htr.logo}
                                                        />{" "}
                                                        {htr.tenHeThongRap}{" "}
                                                    </div>
                                                }
                                            >
                                                <div key={index}>
                                                    {htr.cumRapChieu?.map((tenRap, index) => {
                                                        return <div className="text-left mt-5">
                                                            <div className="flex flex-row">
                                                                <img style={{ width: 70, height: 70 }} src={'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png'} />
                                                                <div className="ml-2">
                                                                    <p style={{ fontSize: 20, fontWeight: 'bold', lineHeight: '1' }}> {tenRap.tenCumRap} </p>
                                                                    <p className="text-gray-400" style={{ marginTop: -20 }}> {tenRap.diaChi} </p>
                                                                </div>
                                                            </div>
                                                            <div name="thong-tin-lich-chieu" className="grid grid-cols-4">
                                                                {tenRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                                    return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="col-span-1 text-blue-700" style={{ fontWeight: 500 }} key={index}>
                                                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                    </NavLink>
                                                                })}
                                                            </div>
                                                        </div>
                                                    })}
                                                </div>
                                            </TabPane>
                                        );
                                    })}
                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane tab={<div style={{ fontSize: 20, fontWeight: 500 }}>Thông Tin</div>} key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab={<div style={{ fontSize: 20, fontWeight: 500 }}>Đánh giá</div>} key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>
            </CustomCard>
        </div>
    );
}
