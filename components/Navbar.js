import React, { useState } from 'react';
import { GiEarthAmerica } from 'react-icons/gi'
import { AiOutlineLogin, AiOutlineSearch, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { BsList } from 'react-icons/bs'
import { CiCircleRemove } from 'react-icons/ci'
import Link from 'next/link';
import { handleHover, useClickOutSide } from '@/globalfuntions';
import logo from '@/public/images/logo.jpg'
import Image from 'next/image';
import { useRouter } from 'next/router';
import {tourNav} from '@/fakedata'
function Navbar(props) {
    const router = useRouter()
    const [openMenu, setOpenMenu] = useState(false)
    const [openTours, setOpenTours] = useState(false)
    const [openDestination, setOpenDestination] = useState(false)
    const [openToursDeskop, setOpenTourDesktop] = useState(false)
    const [openDestinationsDeskop, setOpenDestinationsDesktop] = useState(false)
    const [openSearchModal, setOpenSearchModal] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const menuRef = useClickOutSide(() => setOpenMenu(false))
    // ${openMenu && 'bg-white'}
    const handleSetActive = value =>{
        return router.pathname.includes(value)
    }
    return (
        <div className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm shadow-slate-400`}>
            <div className='max-w-[1536px] h-[80px] p-4 relative mx-auto flex items-center font-bold'>
                <div className='w-full h-full'>
                    <div className='flex items-center justify-between text-[20px] gap-4 h-full'>
                        <Link href={'/'} className='flex items-center gap-1 h-full lg:flex-1' title='Website Enjoy Nepal'>
                            <div className='w-[80px] h-[80px] relative z-[100px]'>
                                <Image src={logo} alt='Enjoy Nepal' title='Enjoy Nepal' loading='eager' className=' object-cover' fill={true}/>
                            </div>
                            <span className='lg:text-[20.75px]  text-gray-900 whitespace-nowrap'>Enjoy Nepal</span>
                        </Link>
                        {/* nav in desktop */}
                        <ul className='hidden lg:flex items-center flex-[2] justify-center gap-12'>
                            <li title='Home'>
                                <Link className={`h-full hover:text-orange-600 lg:text-[16.75px] lg:tracking-[0.65px] py-2 duration-200 whitespace-nowrap ${router.pathname === '/' && 'text-primary'}`}  href={'/'}>Home</Link>
                            </li>
                            <li title='Destinations' onMouseEnter={() => handleHover(setOpenDestinationsDesktop, openDestinationsDeskop)} onMouseLeave={() => handleHover(setOpenDestinationsDesktop, openDestinationsDeskop)} className='relative'>
                                <div className='flex items-center gap-2 lg:hover:text-orange-600'>
                                    <Link className={`h-full hover:text-orange-600 lg:text-[16.75px] lg:tracking-[0.65px] py-2 duration-200 whitespace-nowrap ${handleSetActive('destinations') && 'text-primary'}`}  href={'/destinations'}>Destinations</Link>
                                    {!openDestinationsDeskop ? <AiOutlineDown className="lg:ml-[-5px] lg:text-[14px] lg:mt-[1px] cursor-pointer hover:text-orange-600" /> : <AiOutlineUp className="lg:ml-[-5px] lg:text-[14px] lg:mt-[1px] cursor-pointer hover:text-orange-600" />}
                                </div>
                                {openDestinationsDeskop && (
                                    <ul className='bg-white flex flex-col  shadow-md shadow-gray-300 absolute top-full w-[200px] rounded-md overflow-hidden'>
                                        <li>
                                            <Link href={'/desinations/item'} className='text-[16px] p-2 hover:bg-slate-300'>Desinations item</Link>
                                        </li>
                                        <li>
                                            <Link href={'/desinations/item'} className='text-[16px] p-2 hover:bg-slate-300'>Desinations item</Link>
                                        </li>
                                        <li>
                                            <Link href={'/desinations/item'} className='text-[16px] p-2 hover:bg-slate-300'>Desinations item</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li title='Tours' className='relative' onMouseEnter={() => handleHover(setOpenTourDesktop, openToursDeskop)} onMouseLeave={() => handleHover(setOpenTourDesktop, openToursDeskop)}>
                                <div className='flex items-center gap-2 lg:hover:text-orange-600'>
                                    <Link className={`h-full hover:text-orange-600 lg:text-[16.75px] lg:tracking-[0.65px] py-2 duration-200 whitespace-nowrap ${handleSetActive('tours') && 'text-primary'}`}  href={'/tours'}>
                                        Tours
                                    </Link>
                                    {!openToursDeskop ? <AiOutlineDown className="lg:ml-[-5px] lg:text-[14px] lg:mt-[1px] cursor-pointer hover:text-orange-600" /> : <AiOutlineUp className="lg:ml-[-5px] lg:text-[14px] lg:mt-[1px] cursor-pointer hover:text-orange-600" />}
                                </div>
                                {openToursDeskop && (
                                    <ul className='bg-white grid grid-cols-4 gap-4 shadow-md shadow-gray-300 absolute top-full w-[630px] p-4 rounded-md overflow-hidden left-1/2 -translate-x-1/2'>
                                        {tourNav.map((item,index)=>(
                                            <div key={index} className='flex flex-col gap-2'>
                                                <div className="font-bold text-[16px]">{item.title}</div>
                                                <ul className='flex flex-col gap-2'>
                                                    {item.tours.map((item,index)=>(
                                                        <li className="font-medium text-[14px] hover:text-primary" key={index}>{item.tourTitle}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </ul>
                                )}

                            </li>
                            <li title='about Enjoy Nepal'><Link className={`h-full hover:text-orange-600 lg:text-[16.75px] lg:tracking-[0.65px] py-2 duration-200 whitespace-nowrap ${handleSetActive('about') && 'text-primary'}`}  href={'/about'}>About us</Link></li>
                            <li title='Blogs'><Link className={`h-full hover:text-orange-600 lg:text-[16.75px] lg:tracking-[0.65px] py-2 duration-200 whitespace-nowrap ${handleSetActive('blogs') && 'text-primary'}`}  href={'/blogs'}>Blogs</Link></li>
                            <li title='Contact'><Link className={`h-full hover:text-orange-600 lg:text-[16.75px] lg:tracking-[0.65px] py-2 duration-200 whitespace-nowrap ${handleSetActive('contact') && 'text-primary'}`}  href={'/contact'}>Contact</Link></li>
                            <AiOutlineSearch className='text-[30px] hover:text-orange-600 active:scale-95 cursor-pointer' onClick={() => setOpenSearchModal(true)} />
                        </ul>
                        <div className='hidden lg:flex items-center gap-2 flex-1 justify-end'>
                            <button className='lg:text-[18px] lg:tracking-[0.5px] lg:px-1 hover:text-orange-600 hover:scale-105 active:scale-95 duration-100'>Login</button>
                            <div>/</div>
                            <button className='text-primary lg:text-[18px] lg:tracking-[0.5px] lg:px-1 hover:text-orange-600 hover:scale-105 active:scale-95 duration-100'>Register</button>

                        </div>
                        {/* end nav in desktop */}
                        {/* nav in mobile */}
                        <div className=' lg:hidden flex items-center gap-4'>
                            <AiOutlineLogin title='Login' className='text-[28px]' />
                            <AiOutlineSearch title='Search' className='text-[28px]' onClick={() => setOpenSearchModal(true)} />
                            {!openMenu ? (
                                <BsList title='List' className='text-[28px]' onClick={() => setOpenMenu(true)} />
                            ) : (
                                <CiCircleRemove onClick={() => setOpenMenu(false)} className='text-[28px]' />
                            )}
                        </div>
                        {/* end nav in mobile */}
                    </div>
                    {openMenu && (
                        <ul className='flex flex-col gap-2 h-fit shadow-md shadow-gray-300 absolute w-full top-full left-0 right-0 p-4 bg-white' ref={menuRef}>
                            <li><Link href={'/'}  className={`${router.pathname === '/' && 'text-primary'}`}>Home</Link></li>
                            <li>
                                <div className='flex items-center justify-between' onClick={() => setOpenDestination(!openDestination)}>
                                    <Link href={'/destinations'}  className={`${handleSetActive('destinations') && 'text-primary'}`}>
                                        Destinatons
                                    </Link>
                                    {openDestination ? <AiOutlineUp /> : <AiOutlineDown />}
                                </div>
                                {openDestination && (
                                    <ul className=" flex flex-col gap-1 p-4">
                                        <li>item</li>
                                        <li>item</li>
                                        <li>item</li>
                                    </ul>
                                )}
                            </li>
                            <li><Link href={'/about'} className={`${handleSetActive('about') && 'text-primary'}`}  >About us</Link></li>
                            <li>
                                <div className='flex items-center justify-between' onClick={() => setOpenTours(!openTours)}>
                                    <Link href={'/tours'} className={`${handleSetActive('tours') && 'text-primary'}`} >
                                        Tours
                                    </Link>
                                    {openTours ? <AiOutlineUp /> : <AiOutlineDown />}
                                </div>
                                {openTours && (
                                    <ul className=" flex flex-col gap-1 p-4">
                                        <li>item</li>
                                        <li>item</li>
                                        <li>item</li>
                                    </ul>
                                )}
                            </li>
                            <li><Link href={'/blogs'} className={`${handleSetActive('blogs') && 'text-primary'}`} >Blogs</Link></li>
                            <li><Link href={'/contact'} className={`${handleSetActive('contact') && 'text-primary'}`} >Contact</Link></li>
                        </ul>
                    )}
                    {openSearchModal && (
                        <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
                            <div className='bg-white flex items-center rounded-md overflow-hidden focus-within:border-[2px] focus-within:border-blue-500'>
                                <input type="search" value={searchValue} onChange={e => setSearchValue(e.target.value)} className='p-2 lg:p-4 lg:w-[400px]' spellCheck={false} placeholder='Search now...' />
                                <button className="h-full p-2 lg:p-4 bg-blue-500">
                                    <AiOutlineSearch className='text-[28px] text-white' />
                                </button>
                            </div>
                            <button className='absolute right-4 top-4 bg-white rounded-full' onClick={() => setOpenSearchModal(false)}>
                                <CiCircleRemove className='text-[40px]' />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;