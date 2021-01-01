import { SET_CAROUSEL } from "../actions/types/CarouselType";

const stateDefault = {
  // arrMovieCarousel: [
  //   {
  //     maBanner: 1,
  //     maHinhAnh: 2,
  //     hinhAnh:
  //       "https://bloganchoi.com/wp-content/uploads/2020/05/review-money-heist.jpg",
  //   },
  //   {
  //     maBanner: 1,
  //     maHinhAnh: 2,
  //     hinhAnh:
  //       "https://ss-images.saostar.vn/wp700/2019/07/31/5739679/doctor-strange-2-movie-multiverse-of-madness-banner.jpg",
  //   },
  //   {
  //     maBanner: 1,
  //     maHinhAnh: 2,
  //     hinhAnh: "https://i.ytimg.com/vi/kTc48S-GdfQ/maxresdefault.jpg",
  //   },
  // ],

  arrMovieCarousel: [
    {
      // maBanner: 1,
      // maPhim: 1282,
      // hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
    },
    ,
  ],
};

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      state.arrMovieCarousel = action.arrMovieCarousel;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
