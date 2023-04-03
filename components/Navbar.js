import React, { useState } from 'react';
import { GiEarthAmerica } from 'react-icons/gi'
import { AiOutlineLogin, AiOutlineSearch, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { BsList } from 'react-icons/bs'
import { CiCircleRemove } from 'react-icons/ci'
import Link from 'next/link';
import { handleHover, useClickOutSide } from '@/globalfuntions';
function Navbar(props) {
    const [openMenu, setOpenMenu] = useState(false)
    const [openTours, setOpenTours] = useState(false)
    const [openDestination, setOpenDestination] = useState(false)
    const [openToursDeskop, setOpenTourDesktop] = useState(false)
    const [openDestinationsDeskop, setOpenDestinationsDesktop] = useState(false)
    const [openSearchModal, setOpenSearchModal] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const menuRef = useClickOutSide(() => setOpenMenu(false))
    return (
        <div className={`fixed top-0 left-0 right-0 z-50 ${openMenu && 'bg-white'}`}>
            <div className='max-w-[1536px] h-[80px] p-4 relative mx-auto flex items-center font-bold'>
                <div className='w-full'>
                    <div className='flex items-center justify-between text-[20px] gap-4'>
                        <Link href={'/'} className='flex items-center gap-2 lg:flex-1' title='Website L.T Travel'>
                            <GiEarthAmerica title='Logo' className='text-[28px]' />
                            <span className=' whitespace-nowrap'>L.T Travel</span>
                        </Link>
                        {/* nav in desktop */}
                        <ul className='hidden lg:flex items-center flex-[2] justify-center gap-10'>
                            <li title='Home'>
                                <Link className='h-full hover:text-orange-600 duration-200' href={'/'}>Home</Link>
                            </li>
                            <li title='Destinations' onMouseEnter={() => handleHover(setOpenDestinationsDesktop, openDestinationsDeskop)} onMouseLeave={() => handleHover(setOpenDestinationsDesktop, openDestinationsDeskop)} className='relative'>
                                <div className='flex items-center gap-2'>
                                    <Link className='h-full hover:text-orange-600 duration-200' href={'/destinations'}>Destinations</Link>
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
                                    <Link className='h-full hover:text-orange-600 duration-200' href={'/tours'}>
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
                            <li title='Introduce'><Link className='h-full hover:text-orange-600 duration-200' href={'/introduce'}>Introduce</Link></li>
                            <li title='Blogs'><Link className='h-full hover:text-orange-600 duration-200' href={'/blogs'}>Blogs</Link></li>
                            <li title='Contact'><Link className='h-full hover:text-orange-600 duration-200' href={'/contact'}>Contact</Link></li>
                            <AiOutlineSearch className='text-[28px] cursor-pointer' onClick={() => setOpenSearchModal(true)} />
                        </ul>
                        <div className='hidden lg:flex items-center gap-2 flex-1 justify-end'>
                            <button>Login</button>
                            <div>/</div>
                            <button>Register</button>
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
                            <li><Link href={'/'}>Home</Link></li>
                            <li>
                                <div className='flex items-center justify-between' onClick={() => setOpenDestination(!openDestination)}>
                                    <Link href={'/destinations'}>
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
                            <li><Link href={'/introduce'}>Introduce</Link></li>
                            <li>
                                <div className='flex items-center justify-between' onClick={() => setOpenTours(!openTours)}>
                                    <Link href={'/tours'}>
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
                            <li><Link href={'/blogs'}>Blogs</Link></li>
                            <li><Link href={'/contact'}>Contact</Link></li>
                        </ul>
                    )}
                    {openSearchModal && (
                        <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
                            <div className='bg-white flex items-center rounded-md overflow-hidden focus-within:border-[2px] focus-within:border-blue-500'>
                                <input type="search" value={searchValue} onChange={e => setSearchValue(e.target.value)} className='p-2 lg:p-4 lg:w-[400px]' spellCheck={false} />
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