import Background from '@/components/Background';
import React from 'react';
import backgournd from '@/public/images/background2.jpg'
import Link from 'next/link';
import facebookicon from '@/public/images/facebook.png'
import googleicon from '@/public/images/google.png'
import Image from 'next/image';
import logo from '@/public/images/logo.jpg'
function Login(props) {
    return (
        <div>
            <Background url={backgournd} />
            <div className='flex items-center justify-center h-screen'>
                <div className='bg-white p-4 w-[90%] lg:p-10 lg:w-[500px] rounded-md flex flex-col items-center gap-4'>
                    <div className='text-[32px] font-bold'>Login</div>
                    <span className='text-center'>You just visited the website for the first time?</span>
                    <Link href={'/register'} className='text-center underline'>Register</Link>
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className='font-bold'>Email:</label>
                            <input type="email" name="email" id="email" className='border border-slate-400 rounded-sm py-1 px-2' placeholder='Enter your email...' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password" className='font-bold'>Password:</label>
                            <input type="password" name="password" id="password" className='border border-slate-400 rounded-sm py-1 px-2' placeholder='Enter your password...' />
                        </div>
                    </div>
                    <Link href={'#'} className='font-bold text-[12px] text-secondary'>Forgot your password?</Link>
                    <button className='py-2 hover:scale-105 active:scale-90 text-white bg-secondary rounded-sm text-center w-full duration-150'>Login</button>
                    <div className='flex flex-col items-center gap-4'>
                        <div>Enjoy Nepal</div>
                        <Link href={'/'} className='relative w-[100px] h-[100px]'>
                            <Image
                                src={logo}
                                className='object-cover'
                                fill={true}
                                alt='logo'
                                title='enjoy nepal'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;