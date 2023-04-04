import React, { useState } from 'react';
import {MdKeyboardArrowLeft,MdKeyboardArrowRight,MdKeyboardDoubleArrowLeft,MdKeyboardDoubleArrowRight} from 'react-icons/md'
function Paging({size,lenght}) {
    const [number,setNumber] = useState(1)
    return (
        <div className='flex items-center justify-center gap-4 lg:text-[18px]'>
            <button>
                <MdKeyboardDoubleArrowLeft/>
            </button>
            <button>
                <MdKeyboardArrowLeft/>
            </button>
            <div className='flex items-center justify-center gap-2'>
                <span className='text-primary'>{number}</span>
                <div>/</div>
                <span>{Math.ceil(lenght/size)}</span>
            </div>
             <button>
                <MdKeyboardDoubleArrowRight/>
            </button>
            <button>
                <MdKeyboardArrowRight/>
            </button>
        </div>
    );
}

export default Paging;