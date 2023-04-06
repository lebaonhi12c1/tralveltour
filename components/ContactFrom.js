import React from 'react';
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import Link from 'next/link';
function ContactFrom(props) {
    return (
        <div className='flex flex-col lg:flex-row gap-4'>
            <div className='flex flex-col  items-center justify-center gap-2 lg:flex-1 lg:justify-start lg:mt-11 lg:items-start '>
                <h5 title='Contact Enjoy Nepal' className="text-[32px] text-secondary tracking-[12px] uppercase font-bold lg:font-[700]">Contact</h5>
                <h6 title='Contact Enjoy Nepal' className='italic text-[20px] text-secondary lg:font-[600]'>Enjoy Nepal</h6>
                <div className='border-[2px] w-[20px] border-secondary lg:my-[2.75px]'></div>
                <Link href={'https://www.facebook.com/enjoynepaltrekking'} className='flex items-center gap-4 lg:my-[1.5px]'>
                    <FaFacebookF className='lg:text-[20px]'/>
                    <h6 className='italic text-secondary text-[20px] lg:font-[600]'>Enjoy Nepal</h6>
                </Link>
                <Link href={'https://instagram.com'} className='flex items-center gap-4 lg:my-[1.5px]'>
                    <BsInstagram className='lg:text-[20px]'/>
                    <h6 className='italic text-secondary text-[20px] lg:font-[600]'>Enjoy Nepal</h6>
                </Link>
            </div>
            <div className='flex flex-col gap-[14px] justify-center lg:flex-1 lg:p-4 lg:rounded-lg'>
                <div className=' flex flex-col gap-2'>
                    <label className=' font-bold text-[12px] lg:tracking-[0.75px] lg:text-gray-800 lg:text-[16px]' htmlFor="firstname">Firstname *</label>
                    <input className='py-2 px-4 border text-[14px] border-slate-400 rounded-sm lg:text-gray-400 lg:tracking-[0.5px] lg:text-[14.5px] lg:py-[10px] lg:px-[14.75px] focus-within:border-primary' type="text" name='firstname'  placeholder='Type your firstname...' spellCheck={false} />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label className=' font-bold text-[12px] lg:tracking-[0.75px] lg:text-gray-800 lg:text-[16px]' htmlFor="lastname">Lastname *</label>
                    <input className='py-2 px-4 border text-[14px] border-slate-400 rounded-sm lg:text-gray-400 lg:tracking-[0.5px] lg:text-[14.5px] lg:py-[10px] lg:px-[14.75px] focus-within:border-primary' type="text" name='lastname'  placeholder='Type your lastname...' spellCheck={false} />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label className=' font-bold text-[12px] lg:tracking-[0.75px] lg:text-gray-800 lg:text-[16px]' htmlFor="email">Email *</label>
                    <input className='py-2 px-4 border text-[14px] border-slate-400 rounded-sm lg:text-gray-400 lg:tracking-[0.5px] lg:text-[14.5px] lg:py-[10px] lg:px-[14.75px] focus-within:border-primary' type="email" name='email' placeholder='Type your email...' spellCheck={false} />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label className=' font-bold text-[12px] lg:tracking-[0.75px] lg:text-gray-800 lg:text-[16px]' htmlFor="subject">Subject *</label>
                    <input className='py-2 px-4 border text-[14px] border-slate-400 rounded-sm lg:text-gray-400 lg:tracking-[0.5px] lg:text-[14.5px] lg:py-[10px] lg:px-[14.75px] focus-within:border-primary' type="text" name='subject' placeholder='Type your subject...' spellCheck={false} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className=' font-bold text-[12px] lg:tracking-[0.75px] lg:text-gray-800 lg:text-[16px]' htmlFor="message">Message *</label>
                    <textarea name="message" id="message" cols="30" rows="5" placeholder='Type your message...' className='py-2 px-4 border text-[14px] border-slate-400 rounded-sm  lg:text-gray-500 lg:text-[15px] lg:py-[10px] lg:px-[14.75px] outline-primary focus-within:border-primary' spellCheck={false}></textarea>
                </div>
                <button className='p-2 w-fit rounded-sm border border-secondary text-secondary text-center self-center hover:scale-105 active:scale-90 duration-200 lg:bg-secondary lg:text-white lg:px-7 lg:py-[9.25px] lg:mt-3 lg:rounded-md lg:font-[600] lg:tracking-[1.6px]'>Submit</button>
                <span className='text-secondary ml-auto font-bold lg:mt-[10px] lg:font-[700] lg:tracking-[0.5px]'>Thanks for your submit!</span>
            </div>
        </div>
    );
}

export default ContactFrom;