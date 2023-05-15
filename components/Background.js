import React from 'react';
import Image from 'next/image';
function Background({url}) {
    return (
        <div className='fixed -z-20 inset-0 brightness-75  '>
            <Image src={url} alt="Background Top Nepal" title='Background Top Nepal' loading='eager' fill={true}  className=' object-cover object-top'/>
        </div>
    );
}

export default Background;