import { userRating } from "@/fakedata";
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import CardDestination from "./CardDestination";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";
import CardTour from "./CardTour";
import CardUserRating from "./CardUserRating";

function Slider({ type,value }) {
  const [active,setActive] = useState(false)
  useEffect(()=>{
    const activeTime = setTimeout(() => {
      setActive(false)
    }, 3000);
    return ()=>clearTimeout(activeTime)
  },[active])
  const getValue = () => {
    switch (type) {
      case "destination":
        return {
          data: value,
          Card: CardDestination,
        };

      case "tour":
        return {
          data: value,
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
          centeredSlides={data.length < 2 ?true :false}
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: type === 'rating'?2200:2000,
            disableOnInteraction: false,
          }}
          spaceBetween={32}
          slidesPerView={3}
          style={{
            padding: '16px 10px 16px 4px'
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
          modules={[Autoplay,Navigation]}
          autoplay={{
            delay: type === 'rating'?2200:2000,
            disableOnInteraction: false,
          }}
          spaceBetween={type==='tour'?48:16}
          navigation={active}
          slidesPerView={1}
          style={{
            padding: '12px'
          }}
          onTouchMove={()=>setActive(true)}
        >
          {data.map((item,index) => (
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
