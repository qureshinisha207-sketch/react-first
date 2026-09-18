import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper/modules";

import banner1 from "../assets/Banner1.png";
import banner2 from "../assets/Banner2.png";
import banner3 from "../assets/Banner3.png";

export default function Banner() {
  return (
    <div className="banner-section">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="Tech banner 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner2} alt="Tech banner 2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner3} alt="Tech banner 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}