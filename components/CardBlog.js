import { getBox, getReponsive } from '@/globalfuntions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function CardBlog({value}) {
    const reponsive = getReponsive()
    return (
        <Link href={`/blogs/${value._id}`} className='grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4 rounded-lg items-center lg:items-start p-4 shadow-lg shadow-slate-300'
        >
            <div className='rounded-lg overflow-hidden w-full h-[200px] lg:h-[250px] flex-shrink-0 relative'>
                <Image src={value.image} alt={value.title}title={value.title} loading='eager' className='w-full h-full object-cover hover:scale-110 duration-200' fill={true} />
            </div>
            <div className='flex flex-col gap-4 col-span-2'>
                <h5 className="text-[20px] leading-[30px] text-secondary font-bold lg:text-[24px]">{value.title}</h5>
                <p className="italic underline">{value.date}</p>
                <p className=" line-clamp-6 lg:line-clamp-[8]">
                    {value.description}
                </p>
            </div>
        </Link>
    );
}

export default CardBlog;