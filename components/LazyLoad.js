import React from 'react';

function LazyLoad({isOpen}) {

    return (
        isOpen && 
        <div className='fixed items-center flex justify-center inset-0'>
            <div className='text-white bg-black/40 w-[300px] h-[200px] flex items-center justify-center rounded-sm'>
                <div className='animate-spin w-[40px] h-[40px] border-4 border-white rounded-full  border-r-transparent'></div>
            </div>
        </div>
    );
}

export default LazyLoad;