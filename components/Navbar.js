import React, { useState } from 'react';
import { GiEarthAmerica } from 'react-icons/gi'
import { AiOutlineLogin, AiOutlineSearch, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { BsList } from 'react-icons/bs'
import { CiCircleRemove } from 'react-icons/ci'
import Link from 'next/link';
import { handleHover, useClickOutSide } from '@/globalfuntions';
import logo from '@/public/images/logo.jpg'
import Image from 'next/image';
function Navbar(props) {
    const [openMenu, setOpenMenu] = useState(false)
    const [openTours, setOpenTours] = useState(false)
    const [openDestination, setOpenDestination] = useState(false)
    const [openToursDeskop, setOpenTourDesktop] = useState(false)
    const [openDestinationsDeskop, setOpenDestinationsDesktop] = useState(false)
    const [openSearchModal, setOpenSearchModal] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [active,setActive] = useState('Home')
    const menuRef = useClickOutSide(() => setOpenMenu(false))
    // ${openMenu && 'bg-white'}
    const handleSetActive = value =>{
        setActive(value)
    }
    return (
        <div className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm shadow-slate-400`}>
            <div className='max-w-[1536px] h-[80px] p-4 relative mx-auto flex items-center font-bold'>
                <div className='w-full h-full'>
                    <div className='flex items-center justify-between text-[20px] gap-4 h-full'>
                        <Link href={'/'} className='flex items-center gap-2 h-full lg:flex-1' title='Website Enjoy Nepal'>
                            <div className='w-[80px] h-[80px] relative z-[100px]'>
                                <Image src={logo} alt='Enjoy Nepal' title='Enjoy Nepal' loading='eager' className=' object-cover' fill={true}/>
                            </div>
                            <span className=' whitespace-nowrap'>Enjoy Nepal</span>
                        </Link>
                        {/* nav in desktop */}
                        <ul className='hidden lg:flex items-center flex-[2] justify-center gap-10'>
                            <li title='Home'>
                                <Link className={`h-full hover:text-orange-600  py-2 duration-200 whitespace-nowrap ${active === 'Home' && 'text-primary'}`} onClick={e=>handleSetActive(e.target.innerText)} href={'/'}>Home</Link>
                            </li>
                            <li title='Destinations' onMouseEnter={() => handleHover(setOpenDestinationsDesktop, openDestinationsDeskop)} onMouseLeave={() => handleHover(setOpenDestinationsDesktop, openDestinationsDeskop)} className='relative'>
                                <div className='flex items-center gap-2'>
                                    <Link className={`h-full hover:text-orange-600  py-2 duration-200 whitespace-nowrap ${active === 'Destinations' && 'text-primary'}`} onClick={e=>handleSetActive(e.target.innerText)} href={'/destinations'}>Destinations</Link>
                                    {!openDestinationsDeskop ? <AiOutlineDown /> : <AiOutlineUp />}
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
                                <div className='flex items-center gap-2'>
                                    <Link className={`h-full hover:text-orange-600  py-2 duration-200 whitespace-nowrap ${active === 'Tours' && 'text-primary'}`} onClick={e=>handleSetActive(e.target.innerText)} href={'/tours'}>
                                        Tours
                                    </Link>
                                    {!openToursDeskop ? <AiOutlineDown /> : <AiOutlineUp />}
                                </div>
                                {openToursDeskop && (
                                    <ul className='bg-white flex flex-col shadow-md shadow-gray-300 absolute top-full w-[200px] rounded-md overflow-hidden'>
                                        <li>
                                            <Link href={'/tours/item'} className='text-[16px] p-2 hover:bg-slate-300'>Tours item</Link>
                                        </li>
                                        <li>
                                            <Link href={'/tours/item'} className='text-[16px] p-2 hover:bg-slate-300'>Tours item</Link>
                                        </li>
                                        <li>
                                            <Link href={'/tours/item'} className='text-[16px] p-2 hover:bg-slate-300'>Tours item</Link>
                                        </li>
                                    </ul>
                                )}

                            </li>
                            <li title='about Enjoy Nepal'><Link className={`h-full hover:text-orange-600  py-2 duration-200 whitespace-nowrap ${active === 'About' && 'text-primary'}`} onClick={e=>handleSetActive(e.target.innerText)} href={'/about'}>About us</Link></li>
                            <li title='Blogs'><Link className={`h-full hover:text-orange-600  py-2 duration-200 whitespace-nowrap ${active === 'Blogs' && 'text-primary'}`} onClick={e=>handleSetActive(e.target.innerText)} href={'/blogs'}>Blogs</Link></li>
                            <li title='Contact'><Link className={`h-full hover:text-orange-600  py-2 duration-200 whitespace-nowrap ${active === 'Contact' && 'text-primary'}`} onClick={e=>handleSetActive(e.target.innerText)} href={'/contact'}>Contact</Link></li>
                            <AiOutlineSearch className='text-[28px] cursor-pointer' onClick={() => setOpenSearchModal(true)} />
                        </ul>
                        <div className='hidden lg:flex items-center gap-2 flex-1 justify-end'>
                            <button className='text-primary'>Register</button>
                            <div>/</div>
                            <button>Login</button>
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
                            <li><Link href={'/'} onClick={e=>handleSetActive(e.target.innerText)} className={`${active === 'Home' && 'text-primary'}`}>Home</Link></li>
                            <li>
                                <div className='flex items-center justify-between' onClick={() => setOpenDestination(!openDestination)}>
                                    <Link href={'/destinations'} onClick={e=>handleSetActive(e.target.innerText)} className={`${active === 'Destination' && 'text-primary'}`}>
                                        Destinatons
                                    </Link>
                                    {openDestination ? <AiOutlineUp /> : <AiOutlineDown />}
                                </div>
                                {openDestination && (
                                    <ul className=" flex flex-col gap-1">
                                        <li>item</li>
                                        <li>item</li>
                                        <li>item</li>
                                    </ul>
                                )}
                            </li>
                            <li><Link href={'/about'} className={`${active === 'About us' && 'text-primary'}`} onClick={e=>handleSetActive(e.target.innerText)} >About us</Link></li>
                            <li>
                                <div className='flex items-center justify-between' onClick={() => setOpenTours(!openTours)}>
                                    <Link href={'/tours'} className={`${active === 'Tours' && 'text-primary'}`} onClick={e=>handleSetActive(e.target.innerText)}>
                                        Tours
                                    </Link>
                                    {openTours ? <AiOutlineUp /> : <AiOutlineDown />}
                                </div>
                                {openTours && (
                                    <ul className=" flex flex-col gap-1">
                                        <li>item</li>
                                        <li>item</li>
                                        <li>item</li>
                                    </ul>
                                )}
                            </li>
                            <li><Link href={'/blogs'} className={`${active === 'Blogs' && 'text-primary'}`} onClick={e=>handleSetActive(e.target.innerText)}>Blogs</Link></li>
                            <li><Link href={'/contact'} className={`${active === 'Contact' && 'text-primary'}`} onClick={e=>handleSetActive(e.target.innerText)}>Contact</Link></li>
                        </ul>
                    )}
                    {openSearchModal && (
                        <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
                            <div className='bg-white flex items-center rounded-md overflow-hidden focus-within:border-[2px] focus-within:border-blue-500'>
                                <input type="search" value={searchValue} onChange={e => setSearchValue(e.target.innerText)} className='p-2 lg:p-4 lg:w-[400px]' spellCheck={false} />
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