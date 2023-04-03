import React from "react";
import Box from "./Box";
import { AiFillStar } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
function CardTour({ value }) {
  return (
    <div>
      <Box>
        <div className="rounded-lg bg-white border overflow-hidden border-black">
          <div>
            <img
              src={value.image}
              alt={value.title}
              title={value.title}
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div>
              <div>{value.title}</div>
              <div>
                <div>
                  {Array(Math.ceil(value.rating / 2)).fill().map((item) => (
                    <AiFillStar className=" text-yellow-500" key={uuidv4()} />
                  ))}
                </div>
                <div>({value.rating.toFixed(1)} / Rating)</div>
              </div>
            </div>
            <div className="grid grid-cols-3">
                <div></div>
                <div></div>
                <div></div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default CardTour;
