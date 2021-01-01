import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";

import { useSelector, useDispatch } from "react-redux";
import MultipleRows from "../../component/RSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../redux/actions/LayDanhSachPhimAction";
import { LayDanhSachCumRapAction } from "../../redux/actions/LayDanhSachCumRap";
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'


export default function Home(props) {
  const { arrMovie } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const dispatch = useDispatch();

  // const renderFilm = () => {
  //   return arrMovie?.map((phim, index) => {
  //     return <Film key={index} />;
  //   });
  // };

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);

    dispatch(LayDanhSachCumRapAction());
  }, []);

  return (

    <div>

      <HomeCarousel />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRows arrMovie={arrMovie} />
          {/* <div className="flex flex-wrap -m-4">{renderFilm()}</div> */}
        </div>
      </section>
      <div className="mx-32">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </div>
  );
}
