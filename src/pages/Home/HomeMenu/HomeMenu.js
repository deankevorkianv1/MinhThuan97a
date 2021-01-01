import React, { Fragment } from "react";
import { Tabs, Radio, Space } from "antd";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;

export default class HomeMenu extends React.PureComponent {
  state = {
    tabPosition: "left",
  };

  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };

  renderHeThongRap() {
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      let { tabPosition } = this.state;
      return (
        <TabPane
          tab={
            <img src={heThongRap.logo} className="rounded-full" width="50" />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="flex">
                      <img src={heThongRap.logo} className="rounded-full" width="50" />
                      <div className="ml-3">
                        {cumRap.tenCumRap}
                        <p className="text-red-300 text-left">Chi Tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim?.slice(0, 4).map((phim, index) => {
                    return <Fragment key={index}>
                      <div className="my-3" style={{ display: 'flex' }}>;
                        <div style={{ display: "flex" }}>
                          <img style={{ width: 70, height: 70 }} src={phim.hinhAnh} alt={phim.tenPhim} />
                          <div className="ml-4">
                            <h3 className="text-2xl text-blue-600">{phim.tenPhim}</h3>
                            <p>{cumRap.diaChi}</p>
                            <div className="grid grid-cols-6 gap-7">
                              {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                return <NavLink className="text-red-900 font-semibold" to="/" key={index} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/536/354" }}>
                                  {moment(lichChieu.ngayChieuGioChieu).format('hh.mm A')}
                                </NavLink>
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-3" />
                    </Fragment>
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  }

  render() {
    console.log("props123", this.props);
    const { tabPosition } = this.state;
    return (
      <>
        <Tabs tabPosition={tabPosition}>{this.renderHeThongRap()}</Tabs>
      </>
    );
  }
}
