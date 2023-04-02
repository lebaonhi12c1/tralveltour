import { destination } from "@/fakedata";
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import CardDestination from "./CardDestination";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";

function Slider({ type }) {
  const getValue = () => {
    switch (type) {
      case "destination":
        return {
          data: destination,
          Card: CardDestination,
        };

      case "tour":
        return {
          data: "",
          Card: "",
        };
      case "rating":
        return {
          data: "",
          Card: "",
        };
      default:
        break;
    }
  };
  const { data, Card } = getValue();
  return (
    <div>
      <div className="hidden lg:block">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView={3}
        >
          {data.map((item) => (
            <SwiperSlide key={uuidv4()}>
              <Card value={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView={1}
        >
          {data.map((item) => (
            <SwiperSlide key={uuidv4()}>
              <Card value={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
