import React from "react";
import Box from "./Box";
import { AiFillStar,AiOutlineUser } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import {BsCalendarDate} from 'react-icons/bs'

function CardTour({ value }) {
  return (
    <div className="">
        <div className="rounded-lg bg-white overflow-hidden p-4 pb-5 flex flex-col gap-4 active:scale-90 duration-200 shadow-lg shadow-slate-400">
          <div className="h-[200px] relative">
            <img
              src={value.image}
              alt={value.title}
              title={value.title}
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-4 bottom-4">
              <div className="text-white italic">{value.title}</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {Array(Math.ceil(value.rating / 2)).fill().map((item) => (
                    <AiFillStar className=" text-yellow-500" key={uuidv4()} />
                  ))}
                </div>
                <div className=" italic text-slate-300">({value.rating.toFixed(1)} / Rating)</div>
              </div>
            </div>
            <div className="grid grid-cols-3">
                <div className="flex items-center justify-center p-2 border border-gray-400 gap-2">
                  <BsCalendarDate/>
                  <span>{value.numberOfDay} Day</span>
                </div>
                <div className="flex items-center justify-center p-2 border border-gray-400 gap-1">
                  {value.type}
                </div>
                <div className="flex items-center justify-center p-2 border border-gray-400 gap-2">
                  <AiOutlineUser/>
                  <span>{value.age}</span>
                </div>
            </div>
          </div>
           <h5 title={value.title} className="flex items-center justify-center gap-1 text-[19px] mt-[44px]">
              <span className="text-red-500">{value.price}$</span>
              <span className="text-secondary p-2">/</span>
              <span className="text-secondary">Person</span>
           </h5>
           <p className=" text-[14px]  line-clamp-5" title={value.desc}>
             {value.desc}
           </p>
        </div>
    </div>
  );
}

export default CardTour;
