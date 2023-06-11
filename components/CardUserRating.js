import React from "react";
import { AiFillStar } from "react-icons/ai";
import {v4 as uuidv4} from "uuid"
import userfeedback from '@/public/images/user_feedback.jpg'
import Image from "next/image";
function CardUserRating({ value }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3 justify-center items-center rounded-full  w-[300px] h-[300px]" title={value.comment}>
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative">
          <Image
            src={userfeedback}
            alt={value.name}
            title={value.name}
            loading="eager"
            className="w-full h-full object-cover"
            fill
          />
        </div>
        <h4 title={value.name} className="text-red-500 italic text-[24px]">
          {value.customer.name}
        </h4>
        <div className="flex items-center gap-2 italic">
          {Array(Math.ceil(value.rating))
            .fill()
            .map((item) => (
              <AiFillStar className=" skew-x-[-20deg] text-yellow-500" key={uuidv4()} />
            ))}
        </div>
        <p className=" line-clamp-4 text-[12px] text-center max-w-[150px]">{value.comment}</p>
      </div>
    </div>
  );
}

export default CardUserRating;
