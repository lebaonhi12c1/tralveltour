import DefaultLayout from '@/layout/DefaultLayout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import tourBackground from '@/public/images/goldbackground.jpg'
import Background from '@/components/Background';
import Hero from '@/components/Hero';
import Paging from '@/components/Paging';
import { getReponsive } from '@/globalfuntions';
import ContactFrom from '@/components/ContactFrom';
import CardTour from '@/components/CardTour';
import LazyLoad from '@/components/LazyLoad';
function SearchPage(props) {
  const reponsive = getReponsive()
  const router = useRouter()
  const [tours, setTours] = useState(null)
  const getTours = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/api/tour/find`, {
      method: 'post',
      headers: {
        'ConTent-Type': 'application/json',
      }
      ,
      body: JSON.stringify({
        keyword: router.query.value
      })
    })
    const data = await res.json()
    setTours(data.tours)
  }
  useEffect(() => {
    getTours()
  }, [router.query])
  return (
    <div>
      {/* <Background url={tourBackground} /> */}
      <div className="center-element">
        <Hero
          type={"destination"}
          heading={"I'm looking for a tour"}
        />
        <div className="bg-white py-10">
          <div className="root-container">
            <main
              title="All tour from Top Nepal"
              className="flex flex-col gap-10"
            >
              <div className="lg:grid-cols-3 grid-cols-1 gap-[40px] grid">
                {tours?.map((item, index) => {
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
                }) ??
                  (<LazyLoad isOpen={true}/>)}
              </div>
              {tours?.length < 1 && (
                <div className='flex items-center justify-center'>
                  <div className='text-primary p-10 shadow-lg rounded-md text-[24px] shadow-slate-300'>
                    No results were found!
                  </div>
                </div>
              )}
              <div className="">
                {tours && <Paging size={reponsive ? 4 : 9} lenght={tours?.length} />}
              </div>
              <div className="hidden lg:block lg:border-b-[1px] lg:border-gray-300 "></div>
              <div>
                <ContactFrom />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

SearchPage.getLayout = DefaultLayout
export default SearchPage;