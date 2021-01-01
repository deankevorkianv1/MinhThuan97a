import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { getCarouselAction } from "./../../../../redux/actions/CarouselAction";
import "./HomeCarousel.css";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default function HomeCarousel(props) {
  const { arrMovieCarousel } = useSelector((state) => state.CarouselReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarouselAction);
  }, []);

  const renderImg = () => {
    return arrMovieCarousel.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              className="w-full opacity-0"
              alt={item.hinhAnh}
            />
          </div>
        </div>
      );
    });
  };

  return <Carousel autoplay>{renderImg()}</Carousel>;
}
