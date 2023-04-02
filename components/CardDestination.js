import React from 'react';
import { Image } from 'next/image';
import Link from 'next/link';

function CardDestination({value}) {
    return (
        <Link  href={`/destinations/id`} className='flex flex-col items-center justify-center gap-2 bg-white'>
            <div className='h-[190px] w-full'> 
                <img src={value.image} alt={value.title} title={value.title} loading='eager' className='w-full h-full object-cover'/>
            </div>
            <div className='w-[20px] border-2 border-black'></div>
            <h5 title={value.title} className='text-[22px] italic'>{value.title}</h5>
        </Link>
    );
}

export default CardDestination;