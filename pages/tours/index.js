import React, { useEffect, useState } from "react";
import DefaultLayout from "./../../layout/DefaultLayout";
import Background from "@/components/Background";
import tourBackground from "@/public/images/tourbackground2.jpg";
import Hero from "@/components/Hero";
import { tours } from "@/fakedata";
import CardTour from "./../../components/CardTour";
import Paging from './../../components/Paging';
import { getReponsive } from "@/globalfuntions";
import ContactFrom from "@/components/ContactFrom";
function Tours(props) {
  const reponsive = getReponsive()
  return (
    <div>
      <Background url={tourBackground} />
      <div className="center-element">
        <Hero
          type={"tour"}
          heading={"Our Tours"}
          subheading={"All tours for you"}
        />
        <div className="bg-white py-10">
          <div className="root-container">
            <main
              title="All tour from L.T Travel"
              className="flex flex-col gap-10"
            >
              <div  className="lg:grid-cols-3 grid-cols-1 gap-[40px] grid">
                {tours.map((item, index) => {
                    return (
                        reponsive ? (
                            index<4 && (
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
                            index<9 && (
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
                <Paging size={reponsive? 4: 9} lenght={tours.length}/>
              </div>
              <div>
                <ContactFrom/>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
Tours.getLayout = DefaultLayout;
export default Tours;
