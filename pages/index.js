//import { Inter,Montserrat } from '@next/font/google'
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import DefaultLayout from "@/layout/DefaultLayout";
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })
import background2 from "@/public/images/background2.jpg";
import homeBackground from "@/public/images/home-background.jpg";
import background3 from "@/public/images/background3.jpg";
import Slider from "@/components/Slider";
import Image from "next/image";
import ContactFrom from "@/components/ContactFrom";
export default function Home() {
  return (
    <>
      <main>
        <Background url={background2} />
        <div className="center-element">
          <Hero
            type='home'
            heading={"Seeing the World, Through the Eyes of My Lens"}
            subheading={'Happy Travel'}
          />
          <div className="bg-white">
            <div className="root-container bg-white">
              <div className="py-10 lg:py-[60px]">
                <Slider type="destination" />
              </div>
            </div>
            <div className="h-[255px] lg:h-[600px] relative mt-[110px]">
              <div className="root-container absolute -top-[145px] left-1/2 -translate-x-1/2 ">
                <div className="bg-primary p-4 flex flex-col gap-4 min-h-[300px] justify-center rounded-sm lg:gap-10 lg:h-[400px]">
                  <h2 className=" uppercase text-[28px] font-bold tracking-[8px] lg:text-[40px] lg:ml-10 text-secondary">
                    hello there!
                  </h2>
                  <p className=" text-white  text-[20px] font-bold lg:text-[12px] lg:text-black max-w-[625px] self-center">
                    Our travels are different from all the others! We love our
                    business and want to see happy customers, so we always do
                    our best for your comfort!
                  </p>
                </div>
              </div>
              <Image
                src={background3}
                alt="Background T.L travel"
                title="Background T.L travel"
                loading="eager"
                className=" object-cover object-top block w-full h-full"
              />
            </div>
            <div className="root-container">
              <div>
                <div className="py-10 lg:pb-[60px] lg:my-[20px]">
                  <Slider type="tour" />
                </div>
                <div className="pb-10 lg:pb-[60px] lg:mb-[20px]">
                  <Slider type="rating" />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="h-[300px] lg:flex-1 lg:h-[455px]">
                <Image
                  src={homeBackground}
                  alt={"L.T Travel"}
                  title="L.T Travel"
                  loading="eager"
                  className=" w-full h-full object-cover"
                />
              </div>
              <div className="bg-primary flex gap-4 lg:gap-[20px] flex-col items-center justify-center p-6 lg:flex-1 lg:h-[455px]">
                <h5
                  title="Infomation about L.T Travel"
                  className="italic text-[32px] font-bold lg:text-[46px] text-secondary"
                >
                  About us
                </h5>
                <p
                  title="Infomation about L.T Travel"
                  className="text-[16px] text-center lg:w-[280px] text-white"
                >
                  I’m a paragraph. Double click here or click Edit Text to add
                  some text of your own or to change the font. Tell your
                  visitors a bit about your services.
                </p>
                <button className="uppercase rounded-md p-2 text-white hover:scale-105 bg-secondary active:scale-90 duration-200">
                  learn more
                </button>
              </div>
            </div>
           <div className="relative h-[800px]">
              <div className="root-container absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10">
                <div className=" lg:p-[60px] bg-[rgba(255,255,255,0.4)] rounded-lg">
                  <ContactFrom/>
                </div>
              </div>
              <img src="https://img.freepik.com/free-photo/fuji-mountain-kawaguchiko-lake-sunset-autumn-seasons-fuji-mountain-yamanachi-japan_335224-1.jpg?w=1060&t=st=1680542887~exp=1680543487~hmac=70169b82a15668bad00e3baed1a42353fb9a57e6d6107196d1bf8c025379f081" className="absolute inset-0 w-full h-full object-cover hidden lg:block" alt="" />
           </div>
          </div>
        </div>
      </main>
    </>
  );
}

Home.getLayout = DefaultLayout;
