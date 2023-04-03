import React from 'react';
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import Link from 'next/link';
function ContactFrom(props) {
    return (
        <div className='flex flex-col lg:flex-row gap-4'>
            <div className='flex flex-col  items-center justify-center gap-2 lg:flex-1 lg:justify-start lg:mt-10 lg:items-start'>
                <h5 title='Contact L.T Travel' className="text-[32px] text-secondary tracking-[12px] uppercase font-bold">Contact</h5>
                <h6 title='Contact L.T Travel' className='italic text-[20px] text-secondary'>L.T Travel</h6>
                <div className='border-[2px] w-[20px] border-secondary'></div>
                <Link href={'https://facebook.com'} className='flex items-center gap-4'>
                    <FaFacebookF/>
                    <h6 className='italic text-secondary text-[20px]'>L.T Travel</h6>
                </Link>
                <Link href={'https://instagram.com'} className='flex items-center gap-4'>
                    <BsInstagram/>
                    <h6 className='italic text-secondary text-[20px]'>L.T Travel</h6>
                </Link>
            </div>
            <div className='flex flex-col gap-[14px] justify-center lg:flex-1 lg:p-4 lg:shadow-lg lg:shadow-slate-300 lg:rounded-lg'>
                <div className=' flex flex-col gap-2'>
                    <label className=' font-bold text-[12px]' htmlFor="firstname">Firstname *</label>
                    <input className='p-2 border border-slate-400 rounded-md focus-within:border-primary' type="text" name='firstname'  placeholder='Type your firstname...' spellCheck={false} />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label className=' font-bold text-[12px]' htmlFor="lastname">Lastname *</label>
                    <input className='p-2 border border-slate-400 rounded-md focus-within:border-primary' type="text" name='lastname'  placeholder='Type your lastname...' spellCheck={false} />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label className=' font-bold text-[12px]' htmlFor="email">Email *</label>
                    <input className='p-2 border border-slate-400 rounded-md focus-within:border-primary' type="email" name='email' placeholder='Type your email...' spellCheck={false} />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label className=' font-bold text-[12px]' htmlFor="subject">Subject *</label>
                    <input className='p-2 border border-slate-400 rounded-md focus-within:border-primary' type="text" name='subject' placeholder='Type your subject...' spellCheck={false} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className=' font-bold text-[12px]' htmlFor="message">Message *</label>
                    <textarea name="message" id="message" cols="30" rows="5" placeholder='Type your message...' className='p-2 border border-slate-400 rounded-md outline-primary focus-within:border-primary' spellCheck={false}></textarea>
                </div>
                <button className='p-2 w-fit rounded-sm border border-secondary text-secondary text-center self-center hover:scale-105 active:scale-90 duration-200'>Submit</button>
                <span className='text-secondary ml-auto font-bold'>Thanks for your submit!</span>
            </div>
        </div>
    );
}

export default ContactFrom;