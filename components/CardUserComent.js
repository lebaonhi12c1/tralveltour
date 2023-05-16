import { userContext } from '@/context/user';
import React, { useContext, useState } from 'react';
import { AiFillStar, } from 'react-icons/ai';
import {CiCircleRemove} from 'react-icons/ci'
function CardUserComent({value,handleRemove}) {
    const [deleteDialog,setDeleteDialog] = useState(false)
    const {user} = useContext(userContext)
    const getIsRemoveButton = ()=>{
        return value.customer._id === user?._id
    }
    const handleRemoveReview = (value)=>{
        setDeleteDialog(false)
        handleRemove(value)
    }
    return (
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-4 '>
            <div className='rounded-full w-[80px] h-[80px] overflow-hidden flex-shrink-0'>
                <img src={value.customer.avatar} alt={value.customer.name} title={value.customer.name} loading='eager' className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col gap-2 lg:gap-4'>
                <div  className='italic font-bold text-[20px]'>{value.customer.name}</div>
                <div className='flex flex-col lg:flex-row gap-2'>
                    <div className='flex items-center gap-1 skew-x-[-20deg] text-yellow-500 text-[24px]'>
                        {Array(value.rating).fill().map((item,index)=>(
                            <AiFillStar key={index}/>
                        ))}
                    </div>
                    {/* <div className='italic underline text-secondary text-[18px]'>{value.evaluteTime}</div> */}
                </div>
                <p className=" text-[18px]">
                    {value.comment}
                </p>
                {getIsRemoveButton()&&<button className='lg:hidden font-bold text-white p-2 rounded-md shadow-md cursor-pointer hover:scale-105 active:scale-90 duration-150 shadow-red-500/70 bg-red-500' onClick={()=>setDeleteDialog(true)}>Remove</button>}
                <div className='border border-slate-400 lg:w-1/2 my-4'></div>
            </div>
            {getIsRemoveButton()&&<CiCircleRemove className='lg:block hidden text-[24px] font-bold text-white rounded-full shadow-md cursor-pointer hover:scale-105 active:scale-90 duration-150 shadow-red-500/70 bg-red-500' onClick={()=>setDeleteDialog(true)}/>}
            {deleteDialog && (
                <div className="fixed inset-0 flex items-center justify-center z-80 bg-black/20">
                  <div className='flex flex-col gap-4 bg-white p-4 rounded-md'>
                       <div> Are your sure to remove?</div>
                        <div className='flex items-center gap-4'>
                            <button className='py-2 px-4 rounded-md shadow-md shadow-slate-300 hover:scale-105 active:scale-90 duration-150' onClick={()=>{setDeleteDialog(false)}}>Cancel</button>
                            <button className='py-2 px-4 rounded-md shadow-md shadow-red-900/70 bg-red-500 text-white hover:scale-105 active:scale-90 duration-150' onClick={()=>handleRemoveReview(value)}>Remove</button>
                        </div>
                  </div>
                </div>
            )}
        </div>
    );
}

export default CardUserComent;