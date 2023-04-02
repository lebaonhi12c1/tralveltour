import { destination } from '@/fakedata';
import React, { useEffect, useState } from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import CardDestination from './CardDestination';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';

function Slider({type}) {
    const [width,setWidth] = useState(null)
    const [reponsive,setReponsive] = useState(width<764?true:false)
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            setWidth(window.innerWidth)
        }
    },[])
    useEffect(()=>{
        const handdleResize = ()=>{
            window.innerWidth < 764 ? setReponsive(true): setReponsive(false)
            console.log(window.innerWidth)
        }
        window.addEventListener('resize',handdleResize)
        return ()=>window.removeEventListener('resize',handdleResize)
    },[])
    const getValue = ()=>{
        switch (type) {
            case 'destination':
                return {
                    data: destination,
                    Card: CardDestination,
                }
                
            case 'tour':
                return {
                    data: '',
                    Card: '',
                }
            case 'rating':
                return {
                    data: '',
                    Card: '',
                }
            default:
                break;
        }
    }
    const {data,Card} = getValue()
    return (
       <Swiper
        modules={[Navigation,Autoplay]}
        navigation
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        spaceBetween={16}
        slidesPerView={reponsive? 1:3}
       >
            {data.map(item=>(
                <SwiperSlide key={uuidv4()}>
                    <Card value={item}/>
                </SwiperSlide>
            ))}
       </Swiper>
    );
}

export default Slider;