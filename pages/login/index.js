import Background from '@/components/Background';
import React, { useContext, useState } from 'react';
import backgournd from '@/public/images/background2.jpg'
import Link from 'next/link';
import facebookicon from '@/public/images/facebook.png'
import googleicon from '@/public/images/google.png'
import Image from 'next/image';
import logo from '@/public/images/logo.jpg'
import Loading from '@/components/Loading';
import { useRouter } from 'next/router';
import { userContext } from '@/context/user';
import LazyLoad from '@/components/LazyLoad';
function Login(props) {
    const [loading,setLoading] = useState(false)
    const router = useRouter()
    const {setUser} = useContext(userContext)
    const [info,setInfo] = useState(null)
    const [validate,setValidate] = useState(null)
    const handleLogin = async()=>{
        if(!validate){
            setValidate({
                email: true,
                password: true
            })
        }
        if(validate?.email || validate?.password){
            return
        }
        try {
            setLoading(true)
            const res= await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/auth/login`,{
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            })
            const data = await res.json()
            if(data.success){
               setLoading(false)
                alert(data.message)
                localStorage.setItem('user',JSON.stringify(data))
                setUser(data)
                router.push('/')
            }
            else{
                setLoading(false)
                alert(data.message)
            }
           
        } catch (error) {
            setLoading(false)
            throw error
        }
    }
    const handleLoginKeyDown = e=>{
        if(e.key==='Enter'){
            handleLogin()
        }
    }
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
                            <input type="email" name="email" id="email" className={`border rounded-sm py-1 px-2 ${validate?.email ? 'border-red-500': 'border-slate-500'}`} placeholder='Enter your email...' onBlur={e=>e.target.value === '' && setValidate({...validate,email:true})} onKeyDown={()=>setValidate({...validate,email:false})} onChange={e=>setInfo({...info,email:e.target.value})} />
                            {validate?.email && <span className='text-red-500'>Your must type email!</span>}
                            
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password" className='font-bold'>Password:</label>
                            <input type="password" name="password" id="password" className={`border rounded-sm py-1 px-2 ${validate?.password ? 'border-red-500': 'border-slate-500'}`} placeholder='Enter your password...' onBlur={e=>e.target.value === '' && setValidate({...validate,password:true})} onKeyDown={()=>setValidate({...validate,password:false})} onChange={e=>setInfo({...info,password:e.target.value})} onKeyUp={handleLoginKeyDown} />
                            {validate?.password && <span className='text-red-500'>Your must type password!</span>}
                        </div>
                    </div>
                    <Link href={'#'} className='font-bold text-[12px] text-secondary'>Forgot your password?</Link>
                    <button className='py-2 hover:scale-105 active:scale-90 text-white bg-secondary rounded-sm text-center w-full duration-150' onClick={handleLogin}>Login</button>
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
            <Loading/>
            <LazyLoad isOpen={loading}/>
        </div>
    );
}

export default Login;