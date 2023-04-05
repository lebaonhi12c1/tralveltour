import React from 'react';
import { AiFillStar } from 'react-icons/ai';

function CardUserComent({value}) {
    return (
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
            <div className='rounded-full w-[80px] h-[80px] overflow-hidden flex-shrink-0'>
                <img src={value.image} alt={value.name} title={value.name} loading='eager' className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col gap-2 lg:gap-4'>
                <div  className='italic font-bold text-[20px]'>{value.name}</div>
                <div className='flex flex-col lg:flex-row gap-2'>
                    <div className='flex items-center gap-1 skew-x-[-20deg] text-yellow-500 text-[24px]'>
                        {Array(value.evaluteStar).fill().map((item,index)=>(
                            <AiFillStar key={index}/>
                        ))}
                    </div>
                    <div className='italic underline text-secondary text-[18px]'>{value.evaluteTime}</div>
                </div>
                <p className=" text-[18px]">
                    {value.comment}
                </p>
            </div>
        </div>
    );
}

export default CardUserComent;