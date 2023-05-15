import Background from "@/components/Background";
import { tours, userComments } from "@/fakedata";
import DefaultLayout from "@/layout/DefaultLayout";
import React, { useContext, useState } from "react";
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
import { userContext } from "@/context/user";
import LazyLoad from "@/components/LazyLoad";
function TourDetail({ tour,reviews }) {
  const {user} = useContext(userContext)
  const [evalute,setEvalute] = useState({
    comment: '',
    countStar: 0,
  })
  const [reviewlist,setReviewlist]= useState(reviews.data)
  const [feedback,setFeeback] = useState({
    loading: false,
    notification: false,
    success: false,
    message: ''
  })
  const [view, setView] = useState(1);
  const [openComent, setopenComent] = useState(false);
  const reponsive = getReponsive(); 
  const getReview = async()=>{
    try {
      const resview = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/review/getreviewoftour/${tour._id}`)
      const reviews = await resview.json()
      setReviewlist(reviews.data)
    } catch (error) {
      throw error
    }
  }
  const getEvalue = () => {
    switch (evalute.countStar) {
      case 5:
        return "Very good";
      case 4:
        return "Good";
        case 1:
          return "Very bad";
      case 2:
        return "Bad";
        case 3:
        return "Medium";
      default:
        return "Bad";
    }
  };
  const handleApplyComemt = async ()=>{
    setFeeback({...feedback,loading: true})
    if(user?.access_token_client){
      if(evalute.countStar > -1 && evalute.comment !== ''){
        try {
          const res= await fetch (`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/review`,{
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            }
            ,
            body: JSON.stringify({
              tourId: tour._id,
              customerId: user._id,
              comment: evalute.comment,
              rating: evalute.countStar,
              access_token_client: user.access_token_client
            })
          })
          if(res.status ===200){
            setFeeback({loading: false,notification: true,message: 'Success!',success: true})
            alert('Success!')
            getReview()
          }
          if(res.status ===400){
            setFeeback({loading: false,notification: true,message: 'Fail!',success: true})
            alert('token invalid')
          }
          if(res.status !== 400 && res.status !== 200){
            setFeeback({loading: false,notification: true,message: 'Fail!',success: true})
            alert('Fail!')
          }
        } catch (error) {
          setFeeback({loading: false,notification: true,message: 'Fail!',success: true})
          alert(feedback.message)
          throw error
        }
      }
      else{
        setFeeback({...feedback,loading: false})
        alert('Your must choose count start and type your comment!')
      }
    }
    else{
      setFeeback({...feedback,loading: false})
      alert('Your must be login!')
    }
  }

  return (
    <div>
      {/* <Background url={tourdetaibackground} /> */}
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
                <div className="flex lg:flex-1 flex-col justify-center gap-4">
                  {/* border border-[#666ec9] */}
                  <div
                    className="grid grid-cols-2 lg:flex-1 p-4 gap-4 rounded-md  lg:h-fit lg:grow-0 shadow-lg shadow-slate-300"
                  >
                    <div className="rounded-md border-[2px] border-black lg:py-[28px]">
                      <div className="flex flex-col lg:gap-1 items-center justify-center lg:h-[30px] lg:text-[12px] lg:px-2 h-[100px] px-1 ">
                        <SlPlane />
                        <div className=" w-full text-secondary clamp_1">
                          {tour.title}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md border-[2px] border-black lg:py-[28px]">
                      <div className="flex flex-col  lg:gap-1 items-center justify-center lg:h-[30px] lg:text-[12px] lg:px-2 h-[100px] px-1 ">
                        <GiRank3 />
                        <div className=" text-secondary whitespace-nowrap">
                          Level:
                        </div>
                        <div>{tour.level}</div>
                      </div>
                    </div>
                    <div className="rounded-md border-[2px] border-black lg:py-[28px]">
                      <div className="flex flex-col  lg:gap-1 items-center justify-center lg:h-[30px] lg:text-[12px] lg:px-2 h-[100px] px-1 ">
                        <FiUsers />
                        <div className=" text-secondary whitespace-nowrap">
                          Max People:
                        </div>
                        <div>{tour.rating}</div>
                      </div>
                    </div>
                    <div className="rounded-md border-[2px] border-black lg:py-[28px]">
                      <div className="flex flex-col  lg:gap-1 items-center justify-center lg:h-[30px] lg:text-[12px] lg:px-2 h-[100px] px-1 ">
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
                      onClick={() => setEvalute({...evalute,countStar: index+1})}
                      key={index}
                    >
                      {index < evalute.countStar ? <AiFillStar className="hover:scale-110 active:scale-95 duration-100"/> : <AiOutlineStar className="hover:scale-105 hover:text-orange-500 active:scale-95 duration-100"/>}
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
                   className="w-[300px] lg:w-[500px] border border-slate-200 rounded-lg py-3 px-6 outline-none  bg-transparent"
                   onChange={e=>setEvalute({...evalute,comment: e.target.value})}
                 />
                 <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[40px]" onClick={handleApplyComemt}>
                    Apply
                </button>
                </div>
             )}
              {/* <select defaultValue={'value1'} name="comment" id="comment" className='w-[280px] p-2 rounded-sm shadow select-none hover:cursor-pointer shadow-slate-400'>
                <option value="value 1"  className="hover:cursor-pointer"selected>Filter comments</option>
                <option value="value 2" className="hover:cursor-pointer">value</option>
                <option value="value 3" className="hover:cursor-pointer">value</option>
                <option value="value 4" className="hover:cursor-pointer">value</option>
                <option value="value 5" className="hover:cursor-pointer">value</option>
              </select> */}
            </div>
            <div className="root-container">
               <div className="flex flex-col gap-10 py-[60px]">
                    {reviewlist.map((item,index)=>(
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
      <LazyLoad isOpen={feedback.loading}/>
    </div>
  );
}
TourDetail.getLayout = DefaultLayout;
// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/tour/publish`)
//   const tours = await res.json()
  
//   const paths = tours.map(item=>({params:{id: item._id}}))
//   return {
//     paths,
//     fallback: false,
//   };
// }
export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/tour/${params.id}`)
  const resview = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/review/getreviewoftour/${params.id}`)
  const tour = await res.json()
  const reviews = await resview.json()
  return {
    props: {
      tour,
      reviews,
    },
  };
}
export default TourDetail;
