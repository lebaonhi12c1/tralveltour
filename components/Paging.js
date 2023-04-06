import React, { useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
function Paging({ size, lenght }) {
  const [number, setNumber] = useState(1);
  const handleSetPage = (type) => {
    switch (type) {
      case "increas":
        number < Math.ceil(lenght/size) && setNumber(number+1)
        break;
      case "decreas":
        number>1 && setNumber(number - 1)
        break;
      case "first":
        setNumber(1)
        break;
      case "last":
        setNumber(Math.ceil(lenght/size))
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex items-center justify-center gap-4 lg:text-[18px]">
      <button onClick={()=>handleSetPage('first')} >
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button onClick={()=>handleSetPage('decreas')}  >
        <MdKeyboardArrowLeft />
      </button>
      <div className="flex items-center justify-center gap-2">
        <span className="text-primary">{number}</span>
        <div>/</div>
        <span>{Math.ceil(lenght / size)}</span>
      </div>
      <button  onClick={()=>handleSetPage('increas')}>
        <MdKeyboardArrowRight  />
      </button>
      <button onClick={()=>handleSetPage('last')}>
        <MdKeyboardDoubleArrowRight  />
      </button>
    </div>
  );
}

export default Paging;
