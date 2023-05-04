import React from "react";
import Box from "./Box";

function Letter(props) {
  return (
    <div className="bg-primary py-[40px]">
      <div className="root-container">
        <div className="flex flex-col gap-6">
          <div className="italic text-secondary text-[20px] ">
            They were more than just guides
          </div>
          <div className="italic text-[24px] font-bold">
            Subscribe for travel tips
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <input
              type="email"
              name="email"
              placeholder="Your email..."
              className="w-[80%] rounded-lg shadow-md shadow-slate-600 px-4 py-2 placeholder:text-center lg:py-3"
            />
            <button className="uppercase italic rounded-lg bg-[#C8EEF5] py-1 px-2 lg:text-[20px] lg:px-4 lg:py-2 active:translate-x-1 active:translate-y-1 duration-200 select-none shadow-md shadow-slate-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letter;
