import Background from "@/components/Background";
import Hero from "@/components/Hero";
import DefaultLayout from "@/layout/DefaultLayout";
import React from "react";
import goldbackground from "@/public/images/goldbackground.jpg";
import Letter from "@/components/Letter";
function About(props) {
  return (
    <div>
      <Background url={goldbackground} />
      <div className="center-element">
        <Hero type={"destination"} heading={"About us"} />
        <div className="bg-white py-[40px] lg:py-[60px] flex flex-col gap-10">
          <div className="root-container">
            <div className="flex flex-col gap-10 text-secondary">
              <h1 className="font-bold text-[24px] lg:text-[40px]">
                ​Welcome to our about page!
              </h1>
              <h2 className="font-bold  text-[24px] lg:text-[36px]">
                This is the place for you to get a complete overview of the
                company and the services we offer.
              </h2>
              <p className="text-slate-700">
                We are a travel agency specializing in providing package tours
                to famous destinations around the world. With a team of
                professional and experienced staff, we are committed to
                providing our customers with wonderful and memorable travel
                experiences. ​ We have a full range of services that accompany
                tours such as airport transfers, hotels, entertainment
                activities and enjoyment. We guarantee that our customers will
                experience the best during their trip. ​ Not only providing
                package tours, we also provide air ticketing services and travel
                advice for those who want to freely explore tourist
                destinations. ​ With the desire to bring customers the best and
                most valuable travel experiences, we always try to improve the
                quality of our services and maintain our reputation in the
                travel industry. ​ Contact us today for more details about our
                services and to start an exciting trip!
              </p>
            </div>
          </div>
          <div className="bg-primary py-[60px]">
            <div className="root-container">
              <div className="flex flex-col gap-10 text-secondary">
                <h4 className="text-[30px] italic">
                  We offer a wide range of quality and diverse travel services
                  that are guaranteed to meet the needs of our customers. Here
                  are some of the services we offer on our travel website:
                </h4>
                <p className="text-slate-700">
                  1. Air ticket booking: We provide flight booking service with
                  many different airlines, making it easy for customers to find
                  and book flight tickets that fit their budget. ​ 
                  2. Hotel
                  Reservation: We have an online hotel booking system, providing
                  our customers with a wide selection of hotels in different
                  tourist destinations around the world at reasonable prices. ​
                  3. Package tours: We offer package tours with full services
                  such as airport transfers, entrance tickets to attractions,
                  tour guides and entertainment activities. ​ 
                  4. Self-sufficient
                  travel: If customers want the freedom to explore and
                  experience a tourist destination independently, we provide
                  consulting services and help with travel planning so that
                  customers can create their own trip. go on their own. 
                  ​5.Visa
                  service: We provide consulting services and assist customers
                  in obtaining visas to travel to different countries. In
                  addition, we also provide other support services such as car
                  rental, train tickets, bus tickets and other customs clearance
                  services. With the variety and completeness of these services,
                  we believe that we will meet all the needs of our customers.
                </p>
              </div>
            </div>
        
          </div>

          <Letter/>
        </div>
      </div>
    </div>
  );
}
About.getLayout = DefaultLayout;
export default About;
