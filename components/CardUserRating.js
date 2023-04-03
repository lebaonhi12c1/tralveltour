import React from "react";
import { AiFillStar } from "react-icons/ai";
import {v4 as uuidv4} from "uuid"
function CardUserRating({ value }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3 justify-center items-center rounded-full  w-[300px] h-[300px]  shadow-lg shadow-gray-400">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <img
            src={value.avatar}
            alt={value.name}
            title={value.name}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
        <h4 title={value.name} className="text-red-500 italic text-[24px]">
          {value.name}
        </h4>
        <div className="flex items-center gap-2 italic">
          {Array(Math.ceil(value.rating / 2))
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
