import Link from 'next/link';
import React from 'react';
import {AiOutlineCopyright } from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
function Footer(props) {
    return (
        <div className='bg-secondary text-white py-2 lg:py-8'>
            <div className='root-container'>
                <div className='flex flex-col lg:flex-row gap-4 justify-center lg:justify-between'>
                    <div className='flex items-center gap-2 text-[24px]'>
                        <AiOutlineCopyright/><span>2035 by Top Nepal</span>
                    </div>
                    <div className='flex gap-4'>
                        <Link href={'https://facebook.com'} className='text-white text-[32px]'>
                            <FaFacebookF/>
                        </Link>
                        <Link href={'https://instagram.com'} className='text-white text-[32px]'>
                            <BsInstagram/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;