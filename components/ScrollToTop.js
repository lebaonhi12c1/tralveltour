import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

function ScrollToTop(props) {
    const [toTop, settoTop] = useState(false)
    useEffect(()=>{
        const handleSetScroll = ()=>{
            window.scrollY > 200 ?settoTop(true):settoTop(false)
        }
        window.addEventListener('scroll',handleSetScroll)
        return ()=>window.removeEventListener('scroll',handleSetScroll)
    },[])
    const handleToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
       toTop && (
        <div className='fixed bottom-[40px] right-[40px] bg-secondary text-white w-[40px] h-[40px] rounded-full lg:w-[50px] lg:h-[50px] flex items-center justify-center cursor-pointer animate-bounce shadow-lg shadow-slate-500 z-40  text-[20px]'>
            <AiOutlineArrowUp onClick={handleToTop}/>
        </div>
       )
    );
}

export default ScrollToTop;