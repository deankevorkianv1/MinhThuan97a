import React, { Component } from "react";
import Slider from "react-slick";
import Film_Flip from "../Film/Film_Flip";
import styleSlick from "./MultipleRowSlick.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_PHIM_DANG_CHIEU,
  GET_PHIM_SAP_CHIEU,
} from "././../../redux/actions/types/LayDanhSachPhimType";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}

const MultipleRows = (props) => {
  const dispatch = useDispatch();

  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const renderFilm = () => {
    return props.arrMovie.slice(0, 20).map((item, index) => {
      return (
        <div className="mt-2" key={index}>
          <Film_Flip item={item} />
        </div>
      );
    });
  };

  let activeDangChieu = dangChieu ? ".active_Film" : "none_active_Film";
  let activeSapChieu = sapChieu ? ".active_Film" : "none_active_Film";

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1.7,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div>
        <button
          type="button"
          className={` ${styleSlick[activeDangChieu]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`}
          onClick={() => {
            const action = { type: GET_PHIM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          type="button"
          className={` ${styleSlick[activeSapChieu]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`}
          onClick={() => {
            const action = { type: GET_PHIM_SAP_CHIEU };
            dispatch(action);
          }}
        >
          PHIM SẮP CHIẾU
        </button>
      </div>

      <Slider {...settings}>{renderFilm()}</Slider>
    </div>
  );
};

export default MultipleRows;
