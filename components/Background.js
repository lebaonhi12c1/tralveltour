import React from 'react';
import Image from 'next/image';
function Background({url}) {
    return (
        <div className='fixed -z-10 inset-0 '>
            <Image src={url} alt="Background Enjoy Nepal" title='Background Enjoy Nepal' loading='eager' fill={true}  className=' object-cover object-top'/>
        </div>
    );
}

export default Background;