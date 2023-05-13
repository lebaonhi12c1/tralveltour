import Background from '@/components/Background';
import React, { useEffect, useState } from 'react';
import backgournd from '@/public/images/background2.jpg'
import Link from 'next/link';
import facebookicon from '@/public/images/facebook.png'
import googleicon from '@/public/images/google.png'
import Image from 'next/image';
import logo from '@/public/images/logo.jpg'
import Loading from '@/components/Loading';
import LazyLoad from '@/components/LazyLoad';
import { useRouter } from 'next/router';
// {
//     fullname: '',
//     phone: '',
//     email: '',
//     password: '',
// }
function Register(props) {
    const router = useRouter()
    const [loading,setLoading] = useState(false)
    const [info, setInfo] = useState(null)
    const [validate, setValidate] = useState(null)
    const [emailValidate,setEmailValidate] = useState(false)
    const [phoneVailidate,setPhoneValidate] = useState(false)
    const checkEmail = value => {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(value)) {
           setEmailValidate(true)
           value === '' && setEmailValidate(false)
        }
        else {
            setInfo({ ...info, email: value })
            setEmailValidate(false)
        }
    }
    const checkPhone = value=>{
        // if(sdtValue!==""){

            
        //     if (vnf_regex.test(sdtValue) === true) {
        //         if(sdtValue===""||dcValue===""){
        //             setMessage("Ô tô đỏ là không được bỏ trống.")
        
        //         }
                
        //         setStatusSDT(true)}
        //     else if(vnf_regex.test(sdtValue) === false) {

        //         if(sdtValue===""||dcValue===""){
        //             setMessage("Ô tô đỏ là không được bỏ trống.")
        
        //         }
        //         setMessage("Số điện thoại không đúng định dạng")

        //         setStatusSDT(false)

        //     }
        // }
        const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (!vnf_regex.test(value)) {
            setPhoneValidate(true)
            value === '' && setPhoneValidate(false)
         }
         else {
             setInfo({ ...info, phone: value })
             setPhoneValidate(false)
         }
    }
    const handleSetValidate = value => {
        switch (value) {
            case 'fullname':
                return validate?.fullname === '' && setValidate({ ...validate, fullname: false })
            case 'phone':
                return validate?.phone === '' && setValidate({ ...validate, phone: false })
            case 'email':
                return validate?.email === '' && setValidate({ ...validate, email: false })
            case 'password':
                return validate?.password === '' && setValidate({ ...validate, password: false })
            case 'username':
                return validate?.password === '' && setValidate({ ...validate, password: false })
            default:
                break;
        }
    }
    const handleRegister = async () => {
        !validate && setValidate({
            fullname: true,
            phone: true,
            email: true,
            password: true,
        })
        if (validate?.fullname || validate?.email || validate?.phone || validate?.password) return;
        try {
            setLoading(true)
            const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/auth/register`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...info,name: info?.fullname})
            })
            const data = await res.json()
            setLoading(false)
            alert(data.message)
            router.push('/login')
        } catch (error) {
            setLoading(false)
            throw error
        }
    }
    return (
        <div>
            <Background url={backgournd} />
            <div className='flex items-center justify-center my-10'>
                <div className='bg-white p-4 w-[90%] lg:p-10 lg:w-[500px] rounded-md flex flex-col items-center gap-4'>
                    <div className='text-[32px] font-bold'>Register</div>
                    <span className='text-center'>Are you a member?</span>
                    <Link href={'/login'} className='text-center underline'>Login now</Link>
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="fullname" className='font-bold'>Fullname:</label>
                            <input type="text" name="fullname" id="fullname" className={`border border-slate-400 rounded-sm py-1 px-2 ${validate?.fullname && ' border-red-500'}`} placeholder='Enter your fullname...' onChange={e => setInfo({ ...info, fullname: e.target.value })} onBlur={e => e.target.value === '' && setValidate({ ...validate, fullname: true })} onKeyUp={() => setValidate({ ...validate, fullname: false })} />
                            {validate?.fullname && <span className='text-red-500'>You must be type fullname!</span>}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="phone" className='font-bold'>Phone:</label>
                            <input type="text" name="phone" id="phone" className={`border border-slate-400 rounded-sm py-1 px-2 ${validate?.phone && ' border-red-500'}`} placeholder='Enter your phone...' onChange={e => checkPhone(e.target.value)} onBlur={e => e.target.value === '' && setValidate({ ...validate, phone: true })} onKeyUp={() => setValidate({ ...validate, phone: false })} />
                            {validate?.phone && <span className='text-red-500'>You must be type phone!</span>}
                            {phoneVailidate && <span className='text-red-500'>Invalid phone!</span>}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className='font-bold'>Email:</label>
                            <input type="text" name="email" id="email" className={`border border-slate-400 rounded-sm py-1 px-2 ${validate?.email && ' border-red-500'}`} placeholder='Enter your email...' onChange={e=>checkEmail(e.target.value)} onBlur={e => e.target.value === '' && setValidate({ ...validate, email: true })} onKeyUp={() => setValidate({ ...validate, email: false })} />
                            {validate?.email && <span className='text-red-500'>You must be type email!</span>}
                            {emailValidate && <span className='text-red-500'>Invalid email</span>}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password" className='font-bold'>Password:</label>
                            <input type="password" name="password" id="password" className={`border border-slate-400 rounded-sm py-1 px-2 ${validate?.password && ' border-red-500'}`} placeholder='Enter your password...' onChange={e => setInfo({ ...info, password: e.target.value })} onBlur={e => e.target.value === '' && setValidate({ ...validate, password: true })} onKeyUp={() => setValidate({ ...validate, password: false })} />
                            {validate?.password && <span className='text-red-500'>You must be type password!</span>}
                        </div>
                    </div>
                    <button className='py-2 hover:scale-105 active:scale-90 text-white bg-secondary rounded-sm text-center w-full duration-150' onClick={handleRegister}>Register</button>
                    <div className='flex flex-col items-center gap-4'>
                        <div>Top Nepal</div>
                        <Link href={'/'} className='relative w-[100px] h-[100px]'>
                            <Image
                                src={logo}
                                className='object-cover'
                                fill={true}
                                alt='logo'
                                title='Top Nepal'
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <LazyLoad isOpen ={loading} />
            <Loading/>
        </div>
    );
}

export default Register;