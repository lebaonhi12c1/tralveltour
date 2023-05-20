import Background from "@/components/Background";
import Hero from "@/components/Hero";
import DefaultLayout from "@/layout/DefaultLayout";
import React from "react";
import goldbackground from "@/public/images/goldbackground.jpg";
import { getReponsive } from "@/globalfuntions";
import Image from 'next/image';
import CardBlog from "@/components/CardBlog";
import Paging from "@/components/Paging";
import blogbackground from '@/public/images/blogbackground4.jpg'
function Blogs({blogs}) {
  const reponsive = getReponsive()
  return (
    <div className="center-element">
      {/* <Background url={goldbackground} /> */}
      <div>
        <Hero
          type={"blog"}
          heading="Our Blog"
          subheading={"New from the world of tourism"}
        />
        <div className="bg-white">
          <div className={`${reponsive && "root-container"}`}>
            <div className="flex flex-col lg:flex-row gap-4 lg:h-[600px]">
              <div className="flex flex-col gap-4 justify-center items-center lg:flex-1 py-10">
                <h5
                  title="blog of Top Nepal"
                  className="font-bold text-[24px] text-center text-primary lg:text-[40px] "
                >
                  WELCOME TO
                  <br />
                  the blog
                </h5>
                <p className="text-secondary text-[20px] text-center lg:w-[455px] lg:text-[24px]">Get tips and tricks for planning your Southern Utah & Zion adventure from our local outdoor loving experts. We are a team of local photogs dedicated to finding the best that Zion National Park + Southern Utah has to offer and sharing that with you!</p>
                <span className="text-primary text-center uppercase font-bold lg:text-[24px]">let&apos;s go</span>
              </div>
              <div className="lg:flex-1 h-[260px] lg:h-full relative">
                <Image src={blogbackground} loading="eager" className="w-full h-full object-cover" fill={true} />
              </div>
            </div>
          </div>

          <div className="root-container">
            <div className="flex flex-col gap-[60px] py-[60px]">
                <div className="flex flex-col gap-10">
                    {blogs?.map((item,index)=>{
                        return reponsive ? (
                            index<4 && (  <CardBlog key={item._id} value={item}/>)
                        ):(
                            index<9 && (<CardBlog key={item._id} value={item}/>)
                        )
                    })??'Loading...'}
                </div>
                <div className="">
                    <Paging size={reponsive? 4: 9} lenght={blogs?.length || 0}/>
                </div>
                <div className = 'flex flex-col items-center gap-4'>
                    <h5 className="italic text-center text-[24px] text-secondary">Where to stay & play?</h5>
                    <h4 className='italic text-center text-[24px] lg:text-[44px] text-primary'>Our Favorite Lodging & Adventures</h4>
                    <h5 className="italic text-center text-[20px] text-secondary">Our top lodging & adventure choices in Zion & Southern Utah</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/blog/publish`)
  const blogs = await res.json()
  return {
    props: {
      blogs,
    }
  }
}
Blogs.getLayout = DefaultLayout;
export default Blogs;
