import React from "react";
import "./Film_Flip.css";
import { PlayCircleOutlined } from "@ant-design/icons";
import { history } from '../../App'

export default function Film_Flip(props) {
  const { item } = props;

  return (
    <div className="flip-card mt-2 cursor-pointer" onClick={() => {
      history.push(`./detail/${item.maPhim}`)
    }} >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div
            style={{
              background: `url(${item.hinhAnh}) no-repeat`,
              backgroundPosition: "center",
              backgroundSize: "100%",
            }}
          >
            <img
              src={item.hinhAnh}
              alt={item.tenPhim}
              style={{ width: 300, height: 300 }}
              className="opacity-0"
            />
          </div>
        </div>
        <div
          className="flip-card-back"
          style={{ position: "relative", backgroundColor: "rgba(0,0,0,.9)" }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <img
              src={item.hinhAnh}
              alt={item.tenPhim}
              style={{ width: 300, height: 300 }}
            />
          </div>
          <div
            className="w-full h-full"
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div className="rounded-full cursor-pointer">
                <PlayCircleOutlined style={{ fontSize: "50px" }} />{" "}
              </div>
              <div className="text-2xl mt-2 font-bold">{item.tenPhim}</div>
            </div>
            {/* <button>ĐẶT VÉ</button> */}
          </div>
        </div>
      </div>

      <div className="bg-orange-300 text-center py-2 cursor-pointer bg-indigo-400 text-success-50 font-bold">
        ĐẶT VÉ
      </div>
    </div>
  );
}
