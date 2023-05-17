import React from 'react';
import  Image  from 'next/image';
import Link from 'next/link';

function CardDestination({value}) {
    return (
        <Link  href={`/destinations/${value._id}`} className='flex w-[315px] flex-col items-center justify-center gap-2 bg-white'>
            <div className='h-[220px] w-full relative'> 
                <Image src={value.image} alt={value.name} name={value.name} loading='eager' className='w-full h-full object-cover' fill = {true}/>
            </div>
            <div className='w-[20px] border-2 border-black'></div>
            <h5 title={value.name} className='text-[22px] italic'>{value.name}</h5>
        </Link>
    );
}

export default CardDestination;