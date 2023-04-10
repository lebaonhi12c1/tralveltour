import { getBox, getReponsive } from '@/globalfuntions';
import Link from 'next/link';
import React from 'react';

function CardBlog({value}) {
    const reponsive = getReponsive()
    return (
        <Link href={`/blogs/${value._id}`} className='grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4 border border-secondary  rounded-lg items-center lg:items-start p-4'
         style={reponsive ? {boxShadow: ''} : getBox('#666ec9',7)}
        >
            <div className='rounded-lg overflow-hidden w-full h-[200px] lg:h-full flex-shrink-0'>
                <img src={value.image} alt={value.title}title={value.title} loading='eager' className='w-full h-full object-cover hover:scale-110 duration-200' />
            </div>
            <div className='flex flex-col gap-4 col-span-2'>
                <h5 className="text-[20px] leading-[20px] text-secondary font-bold lg:text-[24px]">{value.title}</h5>
                <p className="italic underline">{value.date}</p>
                <p className=" line-clamp-6 lg:line-clamp-[8]">
                    {value.desc}
                </p>
            </div>
        </Link>
    );
}

export default CardBlog;