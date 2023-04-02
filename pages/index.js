
//import { Inter,Montserrat } from '@next/font/google'
import Background from '@/components/Background'
import Hero from '@/components/Hero'
import DefaultLayout from '@/layout/DefaultLayout'
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })
import homeBackground from '@/public/images/home-background.jpg'
import background2 from '@/public/images/background2.jpg'
export default function Home() {
  return (
    <>
      <main>
        <Background url={background2}/>
        <div className='center-element'>
          <Hero home={true} heading={'Seeing the World, Through the Eyes of My Lens'}/>
        </div>
      </main>
    </>
  )
}

Home.getLayout = DefaultLayout
