import Background from '@/components/Background';
import DefaultLayout from '@/layout/DefaultLayout';
import React from 'react';
import  goldbackground  from '@/public/images/goldbackground.jpg';
import Hero from './../../components/Hero';
import { locations } from '@/fakedata';
import CardLocation from '@/components/CardLocation';
function Destinations(props) {
    return (
        <div className=''>
            <Background url={goldbackground}/>
            <div className="center-element">
                <Hero type={'destination'} heading={'Location'}/>
                <div className="bg-white py-[60px]">
                    <div className='root-container'>
                        <div className='flex flex-col gap-10'>
                            {locations.map((item,index)=>(
                                <CardLocation value={{...item,index: index+1}} key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
Destinations.getLayout = DefaultLayout
export default Destinations;