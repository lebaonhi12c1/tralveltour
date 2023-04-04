import Background from '@/components/Background';
import { tours } from '@/fakedata';
import DefaultLayout from '@/layout/DefaultLayout';
import React, { useState } from 'react';
import tourdetaibackground from '@/public/images/background3.jpg'
import Hero from '@/components/Hero';
import {SlPlane} from 'react-icons/sl'
import { getBox, getReponsive } from '@/globalfuntions';
import {GiRank3} from 'react-icons/gi'
import {FiUsers} from 'react-icons/fi'
import {RiEmotionHappyLine} from 'react-icons/ri'
function TourDetail({tour}) {
    const [view,setView] = useState(1)
    console.log(tour)
    const reponsive = getReponsive()
    return (
        <div>
            <Background url={tourdetaibackground}/>
            <div className="center-element">
                <main>
                    <Hero heading={tour.title} subheading={'your unfogettable trip'} type={'tourDetails'}/>
                    <div className='bg-white py-[60px]'>
                        <div className='root-container flex flex-col gap-10'>
                            <div className='hidden lg:flex items-center justify-center gap-4'>
                                <div className={`${view===1 && 'font-bold'} cursor-pointer hover:text-secondary`} onClick={()=>setView(1)}>Details</div>
                                <div>|</div>
                                <div className={`${view===2 && 'font-bold'} cursor-pointer hover:text-secondary`} onClick={()=>setView(2)}>Photos</div>
                            </div>
                            <div className='flex flex-col gap-6 lg:flex-row-reverse lg:items-start'>
                                <div className='flex flex-col justify-center gap-4'>
                                    <div className='grid grid-cols-2 lg:flex-1 p-4 gap-4 rounded-md border border-[#666ec9] lg:h-fit lg:grow-0' style={
                                        getBox('#666ec9',7)
                                    }>
                                        <div className='rounded-md border-[2px] text-[18] border-black py-[28px]'>
                                            <div className='flex gap-1 items-center justify-center lg:h-[30px] lg:text-[12px] lg:px-2'>
                                                <SlPlane/>
                                                <div>{tour.title}</div>
                                            </div>
                                        </div>
                                        <div className='rounded-md border-[2px] text-[18] border-black py-[28px]'>
                                            <div className='flex gap-1 items-center justify-center lg:h-[30px] lg:text-[12px] lg:px-2'>
                                                <GiRank3/>
                                                <div>
                                                    Level:
                                                </div>
                                                <div>
                                                    {tour.rating}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='rounded-md border-[2px] text-[18] border-black py-[28px]'>
                                            <div className='flex gap-1 items-center justify-center lg:h-[30px] lg:text-[12px] lg:px-2'>
                                                    <FiUsers/>
                                                    <div>
                                                        Max People:
                                                    </div>
                                                    <div>
                                                        {tour.rating}
                                                    </div>
                                                </div>
                                            </div>
                                        <div className='rounded-md border-[2px] text-[18] border-black py-[28px]'>
                                            <div className='flex gap-1 items-center justify-center lg:h-[30px] lg:text-[12px] lg:px-2'>
                                                    <RiEmotionHappyLine/>
                                                    <div>
                                                        {tour.age}
                                                    </div>
                                                    <div>
                                                        + Age
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className=' lg:hidden flex gap-4 text-[20px] items-center'>
                                    <div className={` ${view === 1 && 'font-bold'}`} onClick={()=>setView(1)}>
                                        Details
                                    </div>
                                    <div>|</div>
                                    <div className={` ${view === 2 && 'font-bold'}`} onClick={()=>setView(2)}>Photos</div>
                                </div>
                                <div className='border border-black lg:hidden'></div>
                                {view===1 && (
                                    <div className='flex flex-col lg:lg-4 gap-2 lg:flex-[3] lg:p-6 lg:border lg:border-[#666ec9] rounded-sm' style={
                                        reponsive ?{boxShadow: ''}: getBox('#666ec9',7)
                                    }>
                                        <h4 title={tour.title} className='text-[20px] font-bold'>Details</h4>
                                        <p title='details tour' className="">
                                            {tour.desc}
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit nesciunt dignissimos dicta aspernatur quis magni omnis suscipit voluptas odio voluptatibus ullam, aperiam facere recusandae dolore labore. Provident, enim distinctio?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium, numquam, eius rerum ad quod placeat iste facilis obcaecati, et quisquam atque magnam nesciunt odio quae! Ducimus consequatur eligendi odio.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, tenetur corporis officiis veritatis quasi saepe temporibus. Reprehenderit numquam obcaecati amet repellendus minima voluptates optio, accusamus illo et, molestias repudiandae incidunt?
                                        </p>
                                    </div>
                                )}
                                {view === 2 && (
                                    <div className="flex-[3]">
                                        show image details
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
TourDetail.getLayout = DefaultLayout
export async function getStaticPaths() {
    const paths = tours.map(item=>{
        return {
            params: {
                id: item._id
            }
        }
    })
    return {
      paths, 
      fallback: false
    };
  }
  export async function getStaticProps({ params }) {
    const tour = tours.filter(item=>item._id === params.id)[0]
    return {
        props: {
            tour,
        }
    }
  }
export default TourDetail;