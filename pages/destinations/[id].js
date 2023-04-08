import { destinationlist } from '@/fakedata';
import DefaultLayout from '@/layout/DefaultLayout';
import React from 'react';

function DestinationDetails({destination}) {
    return (
        <div className=''>
           <div className='center-element'>
                <div className="bg-white py-[60px]">
                    <div className="root-container">
                        <h1 className = 'text-[24px] text-secondary font-bold'>{destination.title}</h1>
                        <img src={destination.image} alt={destination.title} title={destination.title} loading='eager' className='h-[280px] lg:[440px] rounded-md w-full object-cover' />
                    </div>
                </div>
           </div>
        </div>
    );
}
DestinationDetails.getLayout = DefaultLayout
export const  getStaticPaths = async()=>{
    const paths = destinationlist.map(item=>({params:{id:item._id}}))
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async({params})=>{
    const destination = destinationlist.filter(item=>item._id === params.id)[0]
    return {
        props: {
            destination
        }
    }
}
export default DestinationDetails;