import { destination, tours, userRating } from "@/fakedata";
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import CardDestination from "./CardDestination";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";
import CardTour from "./CardTour";
import CardUserRating from "./CardUserRating";

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
          data: tours,
          Card: CardTour,
        };
      case "rating":
        return {
          data:  userRating,
          Card: CardUserRating,
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
            delay: type === 'rating'?2200:2000,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView={3}
          style={{
            padding: '16px 0'
          }}
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
          spaceBetween={type==='tour'?48:16}
          slidesPerView={1}
          style={{
            padding: '12px'
          }}
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
