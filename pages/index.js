//import { Inter,Montserrat } from '@next/font/google'
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import DefaultLayout from "@/layout/DefaultLayout";
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })
import background2 from "@/public/images/background2.jpg";
//import home from "@/public/images/home.jpg";
import homeBackground from "@/public/images/home-background.jpg";
import nepaltrek_background from "@/public/images/nepaltrek_background.jpg";
import Slider from "@/components/Slider";
import Image from "next/image";
import ContactFrom from "@/components/ContactFrom";
import Link from 'next/link'
import nepalbackground from '@/public/images/nepalbackground.jpg'
export default function Home({destination,tour, ratings}) {
  return (
    <>
      <main>
        {/* <Background url={nepalbackground} /> */}
        <div className="center-element">
          <Hero
            type='home'
            heading={"Seeing the World, Through the Eyes of My Lens"}
            subheading={'Namaste'}
          />
          <div className="bg-white">
            <div className="root-container bg-white">
              <div className="py-10 lg:py-[60px]">
                <Slider type="destination" value={destination} />
              </div>
            </div>
            <div className="h-[255px] lg:h-[600px] relative mt-[110px]">
              <div className="root-container absolute -top-[145px] left-1/2 -translate-x-1/2 ">
                <div className="bg-primary p-4 flex flex-col gap-4 min-h-[300px] justify-center rounded-sm lg:gap-10 lg:h-[400px]">
                  <h2 className=" uppercase text-[28.75px] font-bold tracking-[8.75px] lg:text-[44px] lg:ml-10 text-secondary">
                    Hello there!
                  </h2>
                  <p className=" text-white  text-[19.75px] font-[600] tracking-[0.5px] lg:text-[15.75px] lg:mt-[4.75px]  max-w-[625px] lg:max-w-[85%] self-center">
                    Our travels are different from all the others! We love our
                    business and want to see happy customers, so we always do
                    our best for your comfort!
                  </p>
                </div>
              </div>
              <Image
                src={nepaltrek_background}
                alt="Background T.L travel"
                title="Background T.L travel"
                loading="eager"
                className=" object-cover object-top block w-full h-full"
              />
            </div>
            <div className="root-container">
              <div>
                <div className="py-10 lg:pb-[60px] lg:my-[20px]">
                  <Slider type="tour" value={tour}/>
                </div>
                <div className="pb-10 lg:pb-[60px] lg:mb-[20px]">
                  <Slider type="rating" value={ratings} />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="h-[300px] lg:flex-1 lg:h-[455px]">
                <Image
                  src={homeBackground}
                  alt={"Top Nepal"}
                  title="Top Nepal"
                  loading="eager"
                  className=" w-full h-full object-cover"
                />
              </div>
              <div className="bg-primary flex gap-4 lg:gap-5 flex-col items-center justify-center p-6 lg:flex-1 lg:h-[455px]">
                <h5
                  title="Infomation about Top Nepal"
                  className="italic text-[32px] sm:font-bold lg:text-[48px] lg:tracking-[1.75px] lg:font-[700] text-secondary"
                >
                  About us
                </h5>
                <p
                  title="Infomation about Top Nepal"
                  className="text-[16px] lg:text-[19.25px] lg:font-[500] lg:tracking-[0.55px] text-center lg:w-[480px] text-white"
                >
                  Top Nepal Trek showcase the spectacular Himalayas to a wide range of nature-loving professional and recreational trekkers in order to appreciate the integrity of the gorgeous mountains.

                </p>
                <Link href={'/about'} className="uppercase rounded-md py-2 px-5 lg:shadow-md lg:font-[600] lg:tracking-[0.75px] text-white hover:scale-105 bg-secondary active:scale-90 duration-200 mt-[10px] lg:mt-[14px]">
                  learn more
                </Link>
              </div>
            </div>
           <div className = 'root-container'>
            <ContactFrom/>
           </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/destination/publish`)
  const destination = await res.json()
  const restour= await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/tour/publish`)
  const tour = await restour.json()
  const resRating = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/review/ratinggt3`)
  const ratings = await resRating.json()
  return {
    props: {
      destination,
      tour,
      ratings
    }
  }
}

Home.getLayout = DefaultLayout;
