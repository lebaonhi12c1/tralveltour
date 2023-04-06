import { getBox, getReponsive } from '@/globalfuntions';
import Link from 'next/link';
import React from 'react';

function CardBlog({value}) {
    const reponsive = getReponsive()
    return (
        <Link href={`/blogs/${value._id}`} className='flex flex-col lg:flex-row gap-4 border border-secondary lg:border-none rounded-lg items-center lg:items-start p-4'
         style={reponsive ? {boxShadow: ''} : getBox('#666ec9',7)}
        >
            <div className='rounded-lg overflow-hidden w-full h-[200px] lg:w-[350px] lg:h-[230px] flex-shrink-0'>
                <img src={value.image} alt={value.title}title={value.title} loading='eager' className='w-full h-full object-cover hover:scale-110 duration-200' />
            </div>
            <div className='flex flex-col gap-4'>
                <h5 className="text-[20px] text-secondary font-bold lg:text-[24px]">{value.title}</h5>
                <p className="italic underline">{value.date}</p>
                <p className=" line-clamp-6 lg:line-clamp-[8]">
                    {value.desc}
                </p>
            </div>
        </Link>
    );
}

export default CardBlog;