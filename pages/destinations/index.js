import Background from '@/components/Background';
import DefaultLayout from '@/layout/DefaultLayout';
import React from 'react';
import  goldbackground  from '@/public/images/goldbackground.jpg';
import Hero from './../../components/Hero';
import CardLocation from '@/components/CardLocation';
function Destinations({destinations}) {
    return (
        <div className=''>
            {/* <Background url={goldbackground}/> */}
            <div className="center-element">
                <Hero type={'destination'} heading={'Location'}/>
                <div className="bg-white py-[60px]">
                    <div className='root-container'>
                        <div className='flex flex-col gap-10'>
                            {destinations.map((item,index)=>(
                                <CardLocation value={{...item,index: index+1}} key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/destination/publish`)
    const destinations = await res.json()
    return {
        props:{
            destinations
        }
    }
}
Destinations.getLayout = DefaultLayout
export default Destinations;