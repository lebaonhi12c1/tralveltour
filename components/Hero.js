import { handleHover } from '@/globalfuntions';
import React, { useState } from 'react';
import Box from './Box';

function Hero({heading,home}) {
    return (
        <div className='h-[280px] lg:h-[650px] flex items-center flex-col justify-center gap-4 lg:gap-10 mb-[40px] lg:my-0 lg:-translate-y-[55px]'>
            {home && <h5 className='text-[15px] lg:text-[17px]'>Happy Travel</h5>}
            <h1 title='T.L Travel' className=' max-w-[800px] text-[27px] text-center leading-[50px] lg:leading-[80px] lg:text-[55px]'>
              {heading}
            </h1>
            {home && <Box>
                <button className={`text-[27px] bg-[#B6F3E8] p-2 py-1 rounded-lg uppercase italic duration-75 active:translate-x-1 active:translate-y-1`}>les&apos;t go</button>
            </Box>}
            
        </div>
    );
}

export default Hero;