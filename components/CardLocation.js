import Link from 'next/link';
import React from 'react';
import { AiOutlineAccountBook, AiOutlineArrowRight } from 'react-icons/ai';
import {HiLocationMarker}from 'react-icons/hi'
function CardLocation({value}) {
    return (
        <div className='flex flex-col gap-4'>
            <div className='items-center hidden lg:flex justify-between'>
                <div className='flex gap-2'>
                    <div className='text-secondary underline'>0{value.index}</div>
                    <div className='flex gap-2'>
                        <HiLocationMarker className='text-secondary text-[24px] items-start'/>
                        <div className='flex flex-col gap-4'>
                            <h5 className='text-secondary text-[24px] font-bold leading-[24px]'>{value.name}</h5>
                            <span className='italic'>{value.tours.length} Tour</span>
                        </div>
                    </div>
                </div>
                <Link href={`/destinations/${value._id}`} className='p-2 w-fit bg-primary text-white rounded-full italic uppercase flex items-center justify-center gap-4 shadow-md shadow-slate-500 hover:bg-secondary active:scale-90 duration-150'>
                    <span>let&apos;s go</span>
                    <AiOutlineArrowRight/>
                </Link>
            </div>
            <Link href={`/destinations/${value._id}`} className='relative h-[240px] lg:h-[420px] rounded-md overflow-hidden'>
                <img src={value.image} alt={value.name} title={value.name} loading='eager' className='w-full h-full object-cover hover:scale-110 duration-200' />
                <div className='flex gap-4 absolute lg:hidden left-4 bottom-4 items-start'>
                    <AiOutlineAccountBook className='text-slate-200 text-[24px]'/>
                    <div className="flex flex-col gap-2 text-slate-200">
                        <h5 title={value.name} className="font-bold">{value.name}</h5>
                        <span className='underline'>{value.tours.length} tour</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CardLocation;