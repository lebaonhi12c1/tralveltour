import React from "react";
import Box from "./Box";
import { AiFillStar, AiOutlineUser } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { BsCalendarDate } from "react-icons/bs";
import { getBox } from "@/globalfuntions";
import Link from "next/link";
import Image from "next/image";

function CardTour({ value }) {
  const starts = []
  const getStarts = ()=>{
    for (let i = 0; i < value.rating; i++) {
      starts.push(i)
    }
  }
  getStarts()
  return (
    <Link href={`/tours/${value._id}`} className="">
      <div className="rounded-lg bg-white overflow-hidden p-4 pb-5 flex flex-col gap-4  active:scale-90 duration-200 border border-[#666ec9]  shadow-lg shadow-slate-400 h-[462px] w-[315px]">
        <div className="h-[200px] relative">
          <div className="w-full h-full overflow-hidden relative">
            <Image
              src={value.image}
              alt={value.title}
              title={value.title}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-110 duration-200"
              fill={true}
            />
          </div>
          <div className="absolute left-4 bottom-4">
            <div className="text-white italic">{value.title}</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {starts.map(item=>(
                  <AiFillStar className=" text-yellow-500" key={uuidv4()} />
                ))}
              </div>
              <div className=" italic text-slate-300">
                    {value.rating}/Rating
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex items-center justify-center p-2 border border-secondary gap-2 text-[12px] whitespace-nowrap">
              <BsCalendarDate />
              <span>{value.numberOfDay} Day</span>
            </div>
            <div className="flex items-center justify-center p-2 border border-secondary gap-1 text-[12px] whitespace-nowrap">
              {value.level}
            </div>
            <div className="flex items-center justify-center p-2 border border-secondary gap-2 text-[12px] whitespace-nowrap">
              <AiOutlineUser />
              <span>{value.age}</span>
            </div>
          </div>
        </div>
        <h5
          title={value.title}
          className="flex items-center justify-center gap-1 text-[19px] mt-[44px]"
        >
          <span className="text-red-500">${value.price}</span>
          <span className="text-secondary p-2">/</span>
          <span className="text-secondary">Person</span>
        </h5>
        <p className=" text-[14px]  line-clamp-5" title={value.title}>
          {value.description}
        </p>
      </div>
    </Link>
  );
}

export default CardTour;
