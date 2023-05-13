import React, { useContext, useEffect, useState } from 'react';
import { GiEarthAmerica } from 'react-icons/gi'
import { AiOutlineLogin, AiOutlineSearch, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { BsList } from 'react-icons/bs'
import { CiCircleRemove } from 'react-icons/ci'
import Link from 'next/link';
import { handleHover, useClickOutSide } from '@/globalfuntions';
import logo from '@/public/images/logo.jpg'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { tourNav } from '@/fakedata'
import { userContext } from '@/context/user';
import styled from  '@/styles/navbar/navbar.module.scss'
import classNames from 'classnames';
function Navbar({ destination }) {
    const { user, setUser } = useContext(userContext)
    const router = useRouter()
    const [activeActionUser, setActiveActionUser] = useState(false)
    const [destinations, setDestinations] = useState(null)
    const [tours, setTours] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)
    const [openTours, setOpenTours] = useState(false)
    const [openDestination, setOpenDestination] = useState(false)
    const [openToursDeskop, setOpenTourDesktop] = useState(false)
    const [openDestinationsDeskop, setOpenDestinationsDesktop] = useState(false)
    const [openSearchModal, setOpenSearchModal] = useState(false)
    const [openProfile,setOpenProfile] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const menuRef = useClickOutSide(() => setOpenMenu(false))
    // ${openMenu && 'bg-white'}
    const getDestinations = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/destination`)
            const destination = await res.json()
            setDestinations(destination)
        } catch (error) {
            throw error
        }
    }
    const getTours = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/tour`)
            const tour = await res.json()
            setTours(tour)
        } catch (error) {
            throw error
        }
    }
    useEffect(() => {
        getDestinations()
        getTours()
    }, [])
    const handleSetActive = value => {
        return router.pathname.includes(value)
    }
    const handleLogout = () => {
        localStorage.removeItem('user')
        setUser(null)
        router.reload()
    }
    return (
        <div className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm shadow-slate-400`}>
            <div className='max-w-[1536px] h-[80px] p-4 relative mx-auto flex items-center font-bold'>
                <div className='w-full h-full'>
                    <div className='flex items-center justify-between text-[20px] gap-4 h-full'>
                        <Link href={'/'} className='flex flex-1 items-center gap-1 h-full lg:flex-1' title='Website Enjoy Nepal'>
                            <div className='w-[80px] h-[80px] relative z-[100px]'>
                                <Image src={logo} alt='Enjoy Nepal' title='Enjoy Nepal' loading='eager' className=' object-cover' fill={true} />
                            </div>

                        </Link>
                        {/* nav in desktop */}
                        <ul className='hidden lg:flex items-center flex-[2] justify-center gap-12 text-secondary '>
                            <li title='Home'>
                                <Link className={`h-full hover:text-orange-600 lg:text-[16.75px] lg:tracking-[0.65px] py-2 duration-200 whitespace-nowrap ${router.pathname === '/' ? 'text-primary' : 'text-secondary'}`} href={'/'}>Home</Link>
                            </li>
                            <li title='Destinations' onMouseEnter={() => handleHover(setOpenDestinationsDesktop, openDestinationsDeskop)} onMouseLeave={() => handleHover(setOpenDestinationsDesktop, openDestinationsDeskop)} className={classNames(styled.destination_parent,'relative')}>
                                <div className='flex items-center gap-2 lg:hover:text-orange-600'>
                                    <Link className={`h-full hover:text-orange-600 lg:text-[16.75px] lg:tracking-[0.65px] py-2 duration-200 whitespace-nowrap ${handleSetActive('destinations') ? 'text-primary' : 'text-secondary'}`} href={'/destinations'}>Destinations</Link>
                                    {!openDestinationsDeskop ? <AiOutlineDown className="lg:ml-[-5px] lg:text-[14px] lg:mt-[1px] cursor-pointer hover:text-orange-600" /> : <AiOutlineUp className="lg:ml-[-5px] lg:text-[14px] lg:mt-[1px] cursor-pointer hover:text-orange-600" />}
                                </div>
                                {/* {openDestinationsDeskop && (
                                    <ul className='bg-white flex flex-col  shadow-md shadow-gray-300 absolute top-full w-[200px] rounded-md overflow-hidden destination_modal'>
                                        {destinations?.map(item => (
                                            <li key={item._id}>
                                                <Link href={`/destinations/${item._id}`} className='text-[16px] p-2 px-4 hover:bg-slate-300'>{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )} */}
                                 <ul className={classNames(styled.destination_modal,'bg-white hidden flex-col  shadow-md shadow-gray-500 absolute top-full w-[200px] rounded-md overflow-hidden destination_modal')}>
                                        {destinations?.map(item => (
                                            <li key={item._id}>
                                                <Link href={`/destinations/${item._id}`} className='text-[16px] p-2 px-4 hover:bg-slate-300'>{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                            </li>
                            <li title='Tours' className={classNames(styled.tour_parent,'relative')} onMouseEnter={() => handleHover(setOpenTourDesktop, openToursDeskop)} onMouseLeave={() => handleHover(setOpenTourDesktop, openToursDeskop)}>
                                <div className='flex items-center gap-2 lg:hover:text-orange-600'>
                                    <Link className={`h-full hover:text-orange-600 lg:text-[16.75px] lg:tracking-[0.65px] py-2 duration-200 whitespace-nowrap ${handleSetActive('tours') ? 'text-primary' : 'text-secondary'}`} href={'/tours'}>
                                        Tours
                                    </Link>
                                    {!openToursDeskop ? <AiOutlineDown className="lg:ml-[-5px] lg:text-[14px] lg:mt-[1px] cursor-pointer hover:text-orange-600" /> : <AiOutlineUp className="lg:ml-[-5px] lg:text-[14px] lg:mt-[1px] cursor-pointer hover:text-orange-600" />}
                                </div>
                                {/* {openToursDeskop && (
                                    <ul className='bg-white grid grid-cols-4 gap-4 shadow-md shadow-slate-500 absolute top-full w-[630px] p-4 rounded-md overflow-hidden left-1/2 -translate-x-1/2'>
                                        {destinations?.map((item, index) => (
                                            <div key={index} className='flex flex-col gap-2'>
                                                <div className="font-bold text-[16px]">{item.name}</div>
                                                <ul className='flex flex-col gap-2'>
                                                    {item.tours.map((item, index) => (
                                                        <Link href={`/tours/${item._id}`} className="font-medium text-[14px] hover:text-primary" key={index}>{item.title}</Link>
                               
                                                        ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </ul>
                                )} */}
                                <ul className={classNames(styled.tour_modal,'bg-white hidden  gap-4 shadow-md shadow-slate-500 absolute top-full p-4 rounded-md overflow-hidden left-1/2 -translate-x-1/2 w-[600px] grid-cols-3')}>
                                        {destinations?.map((item, index) => (
                                            <div key={index} className='flex flex-col gap-2'>
                                                <div className="font-bold text-[16px] whitespace-nowrap  clamp_1 max-w-[150px]">{item.name}</div>
                                                <ul className='flex flex-col gap-2'>
                                                    {item.tours.map((item, index) => (
                                                        <Link href={`/tours/${item._id}`} className="font-medium text-[14px] hover:text-primary clamp_1 max-w-[150px]" key={index}>{item.title}</Link>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </ul>
                            </li>
                            <li title='about Enjoy Nepal'><Link className={`h-full hover:text-orange-600 lg:text-[16.75px] lg:tracking-[0.65px] py-2 duration-200 whitespace-nowrap ${handleSetActive('about') ? 'text-primary' : 'text-secondary'}`} href={'/about'}>About us</Link></li>
                            <li title='Blogs'><Link className={`h-full hover:text-orange-600 lg:text-[16.75px] lg:tracking-[0.65px] py-2 duration-200 whitespace-nowrap ${handleSetActive('blogs') ? 'text-primary' : 'text-secondary'}`} href={'/blogs'}>Blogs</Link></li>
                            <li title='Contact'><Link className={`h-full hover:text-orange-600 lg:text-[16.75px] lg:tracking-[0.65px] py-2 duration-200 whitespace-nowrap ${handleSetActive('contact') ? 'text-primary' : 'text-secondary'}`} href={'/contact'}>Contact</Link></li>
                            <AiOutlineSearch className='text-[30px] hover:text-orange-600 active:scale-95 cursor-pointer' onClick={() => setOpenSearchModal(true)} />
                        </ul>
                        {user ? (
                            <div className='lg:flex hidden items-center gap-4 relative cursor-pointer flex-1 justify-end' onClick={() => setActiveActionUser(!activeActionUser)}>
                                <div className='w-[50px] h-[50px] rounded-full overflow-hidden relative' >
                                    <img
                                        src={user?.avatar}
                                        className='object-cover w-full h-full'
                                        alt='user_image'
                                    />
                                </div>
                                <div className='text-[18px] text-secondary select-none'>{user?.name}</div>
                                {
                                    activeActionUser &&
                                    <div className='absolute top-full right-0 flex flex-col gap-2 bg-white shadow-md shadow-slate-400 w-[200px] rounded-md text-[16px] text-secondary'>
                                        <div className='p-2 hover:text-primary duration-150' onClick={handleLogout}>
                                            Logout
                                        </div>
                                    </div>
                                }
                            </div>
                        ) : (
                            <div className='hidden lg:flex items-center gap-2 flex-1 justify-end'>


                                <Link href={'/login'} className='lg:text-[18px] lg:tracking-[0.5px] lg:px-1 hover:text-orange-600 hover:scale-105 active:scale-95 duration-100 text-secondary'>Login</Link>

                                <div className='text-secondary'>/</div>
                                <Link href={'/register'} className='text-primary lg:text-[18px] lg:tracking-[0.5px] lg:px-1 hover:text-orange-600 hover:scale-105 active:scale-95 duration-100'>Register</Link>

                            </div>
                        )}

                        {/* end nav in desktop */}
                        {/* nav in mobile */}
                        <div className=' lg:hidden flex items-center gap-4'>
                            {!user && <Link href={'/login'}> <AiOutlineLogin title='Login' className='text-[28px]' /></Link>}
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
                        <ul className='flex flex-col gap-2 shadow-md shadow-gray-300 absolute w-full top-full left-0 right-0 p-4 bg-white max-h-[400px] overflow-y-auto' ref={menuRef}>
                            <li><Link href={'/'} className={`${router.pathname === '/' ? 'text-primary' : 'text-secondary'}`}>Home</Link></li>
                            <li>
                                <div className='flex items-center justify-between' onClick={() => setOpenDestination(!openDestination)}>
                                    <Link href={'/destinations'} className={`${handleSetActive('destinations') ? 'text-primary' : 'text-secondary'}`}>
                                        Destinatons
                                    </Link>
                                    {openDestination ? <AiOutlineUp /> : <AiOutlineDown />}
                                </div>
                                {openDestination && (
                                    <ul className=" flex flex-col gap-1 p-4 max-h-[200px] overflow-y-auto">
                                        {destinations?.map(item => (
                                            <Link href={`/destinations/${item._id}`} key={item._id}>{item.name}</Link>
                                        ))}
                                    </ul>
                                )}
                            </li>
                           
                            <li>
                                <div className='flex items-center justify-between' onClick={() => setOpenTours(!openTours)}>
                                    <Link href={'/tours'} className={`${handleSetActive('tours') ? 'text-primary' : 'text-secondary'}`} >
                                        Tours
                                    </Link>
                                    {openTours ? <AiOutlineUp /> : <AiOutlineDown />}
                                </div>
                                {openTours && (
                                    <ul className=" flex flex-col gap-1 p-4 max-h-[200px] overflow-y-auto">
                                        {tours?.map(item => (
                                            <Link href={`/tours/${item._id}`} key={item._id}>{item.title}</Link>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li><Link href={'/about'} className={`${handleSetActive('about') ? 'text-primary' : 'text-secondary'}`}  >About us</Link></li>
                            <li><Link href={'/blogs'} className={`${handleSetActive('blogs') ? 'text-primary' : 'text-secondary'}`} >Blogs</Link></li>
                            <li><Link href={'/contact'} className={`${handleSetActive('contact') ? 'text-primary' : 'text-secondary'}`} >Contact</Link></li>
                            {user && (

                                <li className=''>
                                    <div className='flex items-center justify-between' onClick={() => setOpenProfile(!openProfile)}>
                                        <div className={`text-secondary`}>
                                            Profile
                                        </div>
                                        {openProfile ? <AiOutlineUp /> : <AiOutlineDown />}
                                    </div>
                                    {openProfile && (
                                        <div className="p-4" onClick={handleLogout}>Logout</div>
                                    )}
                                </li>
                            )}
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