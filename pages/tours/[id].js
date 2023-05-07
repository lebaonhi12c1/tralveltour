import Background from "@/components/Background";
import { tours, userComments } from "@/fakedata";
import DefaultLayout from "@/layout/DefaultLayout";
import React, { useState } from "react";
import tourdetaibackground from "@/public/images/background3.jpg";
import Hero from "@/components/Hero";
import { SlPlane } from "react-icons/sl";
import { getBox, getReponsive } from "@/globalfuntions";
import { GiRank3 } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { AiFillStar, AiOutlineStar,AiFillLinkedin } from "react-icons/ai";
import {BsPen} from "react-icons/bs"
import CardUserComent from "@/components/CardUserComent";
import {FaFacebookF,FaInstagram} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import ContactFrom from "@/components/ContactFrom";
import Image from "next/image";
function TourDetail({ tour }) {
  const [view, setView] = useState(1);
  const [countStar, setcountStar] = useState(-1);
  const [openComent, setopenComent] = useState(false);
  const reponsive = getReponsive(); 
  const getEvalue = () => {
    switch (countStar) {
      case 4:
        return "Very good";
      case 3:
        return "Good";

      case 2:
        return "Medium";
      default:
        return "Bad";
    }
  };
  return (
    <div>
      <Background url={tourdetaibackground} />
      <div className="center-element">
        <main>
          <Hero
            heading={tour.title}
            subheading={"your unfogettable trip"}
            type={"tourDetails"}
          />
          <div className="bg-white">
            <div className="root-container flex flex-col py-[60px] gap-[60px]">
              <div className="hidden lg:flex items-center justify-center gap-4">
                <div
                  className={`${
                    view === 1 && "font-bold"
                  } cursor-pointer hover:text-secondary`}
                  onClick={() => setView(1)}
                >
                  Details
                </div>
                <div>|</div>
                <div
                  className={`${
                    view === 2 && "font-bold"
                  } cursor-pointer hover:text-secondary`}
                  onClick={() => setView(2)}
                >
                  Photos
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row-reverse lg:items-start">
                <div className="flex flex-col justify-center gap-4">
                  {/* border border-[#666ec9] */}
                  <div
                    className="grid grid-cols-2 lg:flex-1 p-4 gap-4 rounded-md  lg:h-fit lg:grow-0 shadow-lg shadow-slate-300"
                  >
                    <div className="rounded-md border-[2px] border-black lg:py-[28px]">
                      <div className="flex flex-col lg:flex-row lg:gap-1 items-center justify-center lg:h-[30px] lg:text-[12px] lg:px-2 h-[100px] ">
                        <SlPlane />
                        <div className=" text-secondary whitespace-nowrap">
                          {tour.title}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md border-[2px] border-black lg:py-[28px]">
                      <div className="flex flex-col lg:flex-row lg:gap-1 items-center justify-center lg:h-[30px] lg:text-[12px] lg:px-2 h-[100px] ">
                        <GiRank3 />
                        <div className=" text-secondary whitespace-nowrap">
                          Level:
                        </div>
                        <div>{tour.level}</div>
                      </div>
                    </div>
                    <div className="rounded-md border-[2px] border-black lg:py-[28px]">
                      <div className="flex flex-col lg:flex-row lg:gap-1 items-center justify-center lg:h-[30px] lg:text-[12px] lg:px-2 h-[100px] ">
                        <FiUsers />
                        <div className=" text-secondary whitespace-nowrap">
                          Max People:
                        </div>
                        <div>{tour.rating}</div>
                      </div>
                    </div>
                    <div className="rounded-md border-[2px] border-black lg:py-[28px]">
                      <div className="flex flex-col lg:flex-row lg:gap-1 items-center justify-center lg:h-[30px] lg:text-[12px] lg:px-2 h-[100px] ">
                        <RiEmotionHappyLine />
                        <div className="text-secondary whitespace-nowrap">Age:</div>
                        <div className=" whitespace-nowrap">
                          {tour.age}+
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" lg:hidden flex gap-4 text-[20px] items-center">
                  <div
                    className={` ${view === 1 && "font-bold"}`}
                    onClick={() => setView(1)}
                  >
                    Details
                  </div>
                  <div>|</div>
                  <div
                    className={` ${view === 2 && "font-bold"}`}
                    onClick={() => setView(2)}
                  >
                    Photos
                  </div>
                </div>
                <div className="border border-black lg:hidden"></div>
                {view === 1 && (
                  <div
                    className="flex flex-col lg:lg-4 gap-2 lg:flex-[3] lg:p-6 rounded-sm lg:shadow-lg lg:shadow-slate-300"
                  >
                    {/* <h4 title={tour.title} className="text-[20px] font-bold">
                      Details
                    </h4> */}
                    <div title="details tour" className="">
                      {tour.description}
                      <br />
                      <div dangerouslySetInnerHTML={{ __html: tour.content }}></div>
                    </div>
                  </div>
                )}
                {view === 2 && (
                  <div className="lg:flex-[3] flex flex-col gap-4 p-4 shadow-lg shadow-slate-300">
                    <div className="relative h-[200px] lg:h-[400px]">
                      <Image src={tour.image} alt={tour.title} title={tour.title} className="object-cover" fill={true} loading="eager"/>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                      {tour.images.map((item,index)=>(
                        <div className="relative h-[200px]" key={index}>
                          <Image src={item} alt={tour.title} className="object-cover" fill={true} loading="eager"/>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`${
                reponsive && "root-container"
              } flex items-center justify-center flex-col gap-4 p-4 border-t-2 border-b border-t-secondary border-b-slate-400 py-[60px]`}
            >
              <div className="text-[24px] font-bold"> {getEvalue()}</div>
              <div className="flex items-center gap-2 text-[24px] cursor-pointer">
                {Array(5)
                  .fill()
                  .map((item, index) => (
                    <div
                      className=" text-yellow-500"
                      onClick={() => setcountStar(index)}
                      key={index}
                    >
                      {index <= countStar ? <AiFillStar className="hover:scale-110 active:scale-95 duration-100"/> : <AiOutlineStar className="hover:scale-105 hover:text-orange-500 active:scale-95 duration-100"/>}
                    </div>
                  ))}
              </div>
              <button className="flex border border-primary text-primary bg-transparent rounded-full p-2 text-center select-none active:scale-95" onClick={()=>setopenComent(!openComent)}>
                   <span> Write your comment...</span>
                    <BsPen/>
              </button>
             {openComent && (
                <div className=" flex flex-col gap-4 items-center">
                 <input
                   type="text"
                   placeholder="Enter your comment..."
                   className="w-[300px] border border-slate-200 rounded-lg py-3 px-6 outline-none  bg-transparent"
                 />
                 <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[40px]">
                    Apply
                </button>
                </div>
             )}
              <select name="comment" id="comment" className='w-[280px] p-2 rounded-sm shadow select-none hover:cursor-pointer shadow-slate-400'>
                <option value=""  className="hover:cursor-pointer"selected>Filter comments</option>
                <option value="" className="hover:cursor-pointer">value</option>
                <option value="" className="hover:cursor-pointer">value</option>
                <option value="" className="hover:cursor-pointer">value</option>
                <option value="" className="hover:cursor-pointer">value</option>
              </select>
            </div>
            <div className="root-container">
               <div className="flex flex-col gap-10 py-[60px]">
                    {userComments.map((item,index)=>(
                        <CardUserComent value={item} key={index} />
                    ))}
               </div>
            </div>
            <div className="bg-black">
              <div className="root-container">
                <div className="flex flex-col items-start lg:justify-center gap-4 font-bold text-white lg:py-[60px] lg:items-center">
                  <div className='text-[24px]'>Get in Touch</div>
                  <div>Văn phòng hạng A nằm tại số 29 đường Lê Duẩn, Quận 1, TP.HCM</div>
                  <div>096 651 27 40</div>
                  <div className="w-[90%]">trekking.himalayanofficial@gmail.com</div>
                  <div className="flex items-center gap-2 text-[24px]">
                      <FaFacebookF/>
                      <BsTwitter/>
                      <AiFillLinkedin/>
                      <FaInstagram/>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="root-container">
              <ContactFrom/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
TourDetail.getLayout = DefaultLayout;
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/tour`)
  const tours = await res.json()
  
  const paths = tours.map(item=>({params:{id: item._id}}))
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/tour/${params.id}`)
  const tour = await res.json()
  return {
    props: {
      tour,
    },
  };
}
export default TourDetail;
