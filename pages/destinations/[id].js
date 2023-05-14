import CardTour from '@/components/CardTour';
import { destinationlist } from '@/fakedata';
import { getReponsive } from '@/globalfuntions';
import DefaultLayout from '@/layout/DefaultLayout';
import Paging from '@/components/Paging';
import React from 'react';

function DestinationDetails({ destination }) {
    const reponsive = getReponsive()
    console.log(destination.tours)
    return (
        <div className=''>
            <div className='center-element'>
                <div className="bg-white py-[60px]">
                    <div className="root-container">
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-[24px] text-secondary font-bold'>{destination.name}</h1>
                            <img src={destination.image} alt={destination.name} name={destination.name} loading='eager' className='h-[280px] lg:[440px] rounded-md w-full object-cover' />
                            {destination.tours.length > 0 ? (
                                <div className='flex flex-col gap-4'>
                                    <div className="lg:grid-cols-3 grid-cols-1 gap-[40px] grid">
                                        {destination.tours.map((item, index) => {
                                            return (
                                                reponsive ? (
                                                    index < 4 && (
                                                        (
                                                            <div
                                                                className=" flex items-center justify-center"
                                                                key={index}
                                                            >
                                                                <CardTour value={item} />
                                                            </div>
                                                        )
                                                    )
                                                ) : (
                                                    index < 9 && (
                                                        (
                                                            <div
                                                                className=" flex items-center justify-center"
                                                                key={index}
                                                            >
                                                                <CardTour value={item} />
                                                            </div>
                                                        )
                                                    )
                                                )
                                            );
                                        })}
                                    </div>
                                    <div className="">
                                        <Paging size={reponsive ? 4 : 9} lenght={destination.tours.length} />
                                    </div>
                                </div>
                            ) : (
                                <div className='p-10 text-center rounded-md shadow-lg shadow-slate-300 flex items-center justify-center gap-4'>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Nuvola_apps_bell.svg/1200px-Nuvola_apps_bell.svg.png" className='w-[40px] h-[40px] object-cover' alt="" />
                                    <div className="text-primary text-[24px] font-bold">
                                        There are currently no tours available at this location!
                                    </div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Nuvola_apps_bell.svg/1200px-Nuvola_apps_bell.svg.png" className='w-[40px] h-[40px] object-cover' alt="" />
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
DestinationDetails.getLayout = DefaultLayout
export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/destination/publish`)
    const destinations = await res.json()
    const paths = destinations.map(item => ({ params: { id: item._id } }))
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async ({ params }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/destination/${params.id}`)
    const destination = await res.json()
    return {
        props: {
            destination
        }
    }
}
export default DestinationDetails;