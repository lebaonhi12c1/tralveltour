
//import { Inter,Montserrat } from '@next/font/google'
import Background from '@/components/Background'
import Hero from '@/components/Hero'
import DefaultLayout from '@/layout/DefaultLayout'
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })
import background2 from '@/public/images/background2.jpg'
import background3 from '@/public/images/background3.jpg'
import Slider from '@/components/Slider'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <main>
        <Background url={background2}/>
        <div className='center-element'>
          <Hero home={true} heading={'Seeing the World, Through the Eyes of My Lens'}/>
          <div className='bg-white'>
            <div className='root-container bg-white'>
              <div className='py-10 lg:py-[60px]'>
                <Slider type='destination'/>
              </div>
            </div>
            <div className='h-[255px] lg:h-[600px] relative mt-[110px]'>
              <div className='root-container absolute -top-[145px] left-1/2 -translate-x-1/2 '>
                <div className='bg-primary p-4 flex flex-col gap-4 min-h-[300px] justify-center rounded-sm lg:gap-10 lg:h-[400px]'>
                  <h2 className=' uppercase text-[28px] font-bold tracking-[8px] lg:text-[40px] lg:ml-10'>hello there!</h2>
                  <p className=' text-white  text-[20px] font-bold lg:text-[12px] lg:text-black max-w-[625px] self-center'>
                    Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!
                  </p>
                </div>
              </div>
              <Image src={background3} alt="Background T.L travel" title='Background T.L travel' loading='eager'className=' object-cover object-top block w-full h-full'/>
            </div>
            <div className='root-container'>
              <div className='py-10 lg:pb-[60px] lg:my-[20px]'>
                <Slider type='tour'/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

Home.getLayout = DefaultLayout
