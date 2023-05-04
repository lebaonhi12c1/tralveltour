import { destinationlist } from '@/fakedata';
import DefaultLayout from '@/layout/DefaultLayout';
import React from 'react';

function DestinationDetails({destination}) {
    return (
        <div className=''>
           <div className='center-element'>
                <div className="bg-white py-[60px]">
                    <div className="root-container">
                        <h1 className = 'text-[24px] text-secondary font-bold'>{destination.name}</h1>
                        <img src={destination.image} alt={destination.name} name={destination.name} loading='eager' className='h-[280px] lg:[440px] rounded-md w-full object-cover' />
                    </div>
                </div>
           </div>
        </div>
    );
}
DestinationDetails.getLayout = DefaultLayout
export const  getStaticPaths = async()=>{
    const res = await fetch(`${process.env.SERVER_URL}/api/destination`)
    const destinations = await res.json()
    const paths = destinations.map(item=>({params:{id: item._id}}))
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async({params})=>{
    const res = await fetch(`${process.env.SERVER_URL}/api/destination/${params.id}`)
    const destination = await res.json()
    return {
        props: {
            destination
        }
    }
}
export default DestinationDetails;