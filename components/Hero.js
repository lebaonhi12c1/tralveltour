import React, { useEffect, useState } from 'react';
import Box from './Box';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import nepalbackground from '@/public/images/nepalbackground.jpg'
import subbackground from '@/public/images/subhero.jpg'
import Image from 'next/image';
function Hero({type,heading,subheading}) {
    const getHero = ()=>{
        switch (type) {
            case 'home': 
                return (
                    <div className='h-[280px] lg:h-[650px] flex items-center flex-col justify-center gap-4 lg:gap-10 mb-[40px] lg:my-0 lg:-translate-y-[55px] text-white relative'>
                        <h5 className='text-[15px] lg:text-[46px]'>{subheading}</h5>
                        <h1 title='T.L Travel' className=' max-w-[800px] text-[27px] text-center font-bold leading-[50px] lg:leading-[80px] lg:text-[55px]'>
                        {heading}
                        </h1>
                        <Link href={'/tours'} className={`text-[27px] bg-primary p-2 py-1 rounded-lg uppercase italic duration-75 active:translate-x-1 active:translate-y-1 shadow-md shadow-slate-800`}>let&apos;s go</Link>
                            <Image src={nepalbackground} fill={true} className='object-cover -z-10 brightness-75' alt="topnepalbackground" />
                    </div>
                )
            case 'tour':
                return (
                    <div className='h-[200px] lg:h-[500px] flex items-center flex-col justify-center gap-4 lg:gap-10 lg:my-0 relative'>
                        <h5 className='text-[17px] lg:text-[20px] italic text-white '>{subheading}</h5>
                        <h1 title='T.L Travel' className=' max-w-[800px] text-[32px] text-center leading-[50px] lg:leading-[80px] lg:text-[60px] font-bold text-white'>
                        {heading}
                        </h1>
                        <Image src={subbackground} fill={true} className=' -z-10 brightness-75' alt="topnepalbackground" />
                        {/* <div className='flex items-center rounded-full overflow-hidden bg-[rgba(255,255,255,0.6)] px-2 py-1 w-[285px] lg:w-[400px] lg:h-[45px]'>
                            <input type="search" name="search" id="search" placeholder='Search tour...' spellCheck={false} className=' bg-transparent flex-1 placeholder:text-black' />
                            <button className=''>
                                <AiOutlineSearch className='text-[24px]'/>
                            </button>
                        </div> */}
                    </div>
                )
            case 'tourDetails':
                return (
                    <div className='h-[200px] lg:h-[500px] flex items-center flex-col justify-center gap-4 lg:gap-10 lg:my-0 relative'>
                        <h5 className='text-[17px] lg:text-[20px] italic text-white'>{subheading}</h5>
                        <h1 title='T.L Travel' className=' max-w-[800px] text-[32px] text-center leading-[50px] lg:leading-[80px] lg:text-[60px] font-bold text-white'>
                        {heading}
                        </h1>
                        <Image src={subbackground} fill={true} className=' -z-10 brightness-75' alt="topnepalbackground" />
                    </div>
                )
            case 'blog':
                return (
                    <div className='h-[200px] lg:h-[650px] flex items-center flex-col justify-center gap-4 lg:gap-10 lg:my-0 text-white'>
                        <h5 className='text-[17px] lg:text-[20px] italic '>{subheading}</h5>
                        <h1 title='T.L Travel' className=' max-w-[800px] text-[32px] text-center leading-[50px] lg:leading-[80px] lg:text-[60px] font-bold text-white'>
                        {heading}
                        </h1>
                        <Image src={subbackground} fill={true} className=' -z-10 brightness-75' alt="topnepalbackground" />
                    </div>
                )
            case 'destination': 
                return (
                    <div className='h-[200px] lg:h-[650px] flex items-center flex-col justify-center gap-4 lg:gap-10 lg:my-0 text-white'>
                        <h1 title='T.L Travel' className=' max-w-[800px] text-[32px] text-center leading-[50px] lg:leading-[80px] lg:text-[60px] font-bold italic text-white'>
                        {heading}
                        </h1>
                        <Image src={subbackground} fill={true} className=' -z-10 brightness-75' alt="topnepalbackground" />
                    </div>
                )
            default:
                break;
        }
    }
    return (
        <div className="">
            {getHero()}
        </div>
    )
}

export default Hero;