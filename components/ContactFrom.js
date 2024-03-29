import React, { useState } from 'react';
import { FaFacebookF,FaPhoneVolume } from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link';
import LazyLoad from './LazyLoad';
function ContactFrom(props) {
    const [contact, setContact] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    const handleSumit = async () => {
        if(
            contact.fullname === ''||
            contact.email === ''||
            contact.subject === ''||
            contact.message === ''
        ){
            alert('you must enter all fields!')
            return
        }
        try {
            setLoading(true)
            const res = await  fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/contact/`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...contact,
                    name: contact.fullname
                })
            })
            const data = await res.json()
            setLoading(false)
        } catch (error) {
            setLoading(false)
            alert('fail!')
            throw error
        }
    }
    return (
        <div className='flex flex-col lg:flex-row gap-4'>
            <div className='flex flex-col  items-center justify-center gap-2 lg:flex-1 lg:justify-start lg:mt-11 lg:items-start '>
                <h5 title='Contact Top Nepal' className="text-[32px] text-secondary tracking-[12px] uppercase font-bold lg:font-[700]">Contact</h5>
                <h6 title='Contact Top Nepal' className='italic text-[20px] text-secondary lg:font-[600] whitespace-nowrap'>Top Nepal</h6>
                <div className='border-[2px] w-[20px] border-secondary lg:my-[2.75px]'></div>
                <Link href={'https://www.facebook.com/topnepaltrek'} className='flex items-center gap-4 lg:my-[1.5px] hover:underline text-secondary' target='_blank'>
                    <FaFacebookF className='lg:text-[20px]' />
                    <h6 className='italic text-secondary text-[20px] lg:font-[600]'>Top Nepal</h6>
                </Link>
                <Link href={'https://www.instagram.com/_trekking.himalayan_/'} className='flex items-center gap-4 lg:my-[1.5px] hover:underline text-secondary' target='_blank'>
                    <BsInstagram className='lg:text-[20px]' />
                    <h6 className='italic text-secondary text-[20px] lg:font-[600]'>Top Nepal</h6>
                </Link>
                <div className='flex items-center gap-4 lg:my-[1.5px] text-secondary'>
                    <FaPhoneVolume className='lg:text-[20px]' />
                    <h6 className='italic text-secondary lg:text-[20px] text-[14px] w-full lg:font-[600]'>(+84) 966 512 740 - (+977) 984 344 7027 </h6>
                </div>
                <div className='flex items-center gap-4 lg:my-[1.5px] text-secondary'>
                    <AiOutlineMail className='lg:text-[20px]' />
                    <a href='mailto:trekking.himalayanofficial@gmail.com' className='hover:underline'>
                        <h6 className='italic text-secondary lg:text-[20px] text-[14px] w-full lg:font-[600] '>topnepaltrek@gmail.com</h6>
                    </a>
                </div>
            </div>
            <div className='flex flex-col gap-[14px] justify-center lg:flex-1 lg:p-4 lg:rounded-lg'>
                <div className=' flex flex-col gap-2'>
                    <label className=' font-bold text-[12px] lg:tracking-[0.75px] lg:text-gray-800 lg:text-[16px]' htmlFor="fullname">Fullname *</label>
                    <input className='py-2 px-4 border text-[14px] border-slate-400 rounded-sm lg:text-gray-400 lg:tracking-[0.5px] lg:text-[14.5px] lg:py-[10px] lg:px-[14.75px] focus-within:border-primary' type="text" name='fullname' placeholder='Type your fullname...' spellCheck={false} onChange={e => setContact({ ...contact, fullname: e.target.value })} />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label className=' font-bold text-[12px] lg:tracking-[0.75px] lg:text-gray-800 lg:text-[16px]' htmlFor="email">Email *</label>
                    <input className='py-2 px-4 border text-[14px] border-slate-400 rounded-sm lg:text-gray-400 lg:tracking-[0.5px] lg:text-[14.5px] lg:py-[10px] lg:px-[14.75px] focus-within:border-primary' type="email" name='email' placeholder='Type your email...' spellCheck={false} onChange={e => setContact({ ...contact, email: e.target.value })} />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label className=' font-bold text-[12px] lg:tracking-[0.75px] lg:text-gray-800 lg:text-[16px]' htmlFor="subject">Subject *</label>
                    <input className='py-2 px-4 border text-[14px] border-slate-400 rounded-sm lg:text-gray-400 lg:tracking-[0.5px] lg:text-[14.5px] lg:py-[10px] lg:px-[14.75px] focus-within:border-primary' type="text" name='subject' placeholder='Type your subject...' spellCheck={false} onChange={e => setContact({ ...contact, subject: e.target.value })} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className=' font-bold text-[12px] lg:tracking-[0.75px] lg:text-gray-800 lg:text-[16px]' htmlFor="message">Message *</label>
                    <textarea name="message" id="message" cols="30" rows="5" placeholder='Type your message...' className='py-2 px-4 border text-[14px] border-slate-400 rounded-sm  lg:text-gray-500 lg:text-[15px] lg:py-[10px] lg:px-[14.75px] outline-primary focus-within:border-primary' spellCheck={false} onChange={e => setContact({ ...contact, message: e.target.value })}></textarea>
                </div>
                <button className='p-2 w-fit rounded-sm border border-secondary text-secondary text-center self-center hover:scale-105 active:scale-90 duration-200 lg:bg-secondary lg:text-white lg:px-7 lg:py-[9.25px] lg:mt-3 lg:rounded-md lg:font-[600] lg:tracking-[1.6px]' onClick={handleSumit}>Submit</button>
                <span className='text-secondary ml-auto font-bold lg:mt-[10px] lg:font-[700] lg:tracking-[0.5px]'>Thanks for your submission!</span>
            </div>
            <LazyLoad isOpen={loading}/>
        </div>
    );
}

export default ContactFrom;