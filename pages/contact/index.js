import React from 'react';
import DefaultLayout from './../../layout/DefaultLayout';
import Background from './../../components/Background';
import  goldbackground  from '@/public/images/goldbackground.jpg';
import Hero from '@/components/Hero';
import  Image  from 'next/image';
//import { AiFillAccountBook, AiFillMail, AiFillPhone } from 'react-icons/ai';
import ContactFrom from '@/components/ContactFrom'
import  background2  from '@/public/images/background2.jpg';
import logo from '@/public/images/logotopnepal.jpg'
function Contact(props) {
    return (
        <div>
            {/* <Background url={goldbackground}/> */}
            <div className='center-element'>
                <Hero type={'destination'} heading={'Contact Us'}/>
                <div className = 'bg-white py-[40px] lg:py-[60px]'>
                <div className = 'root-container'>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-6'>
                        <div className='relative h-[280px] lg:w-full lg:flex-1 rounded-md overflow-hidden shadow-lg shadow-slate-200'>
                            <Image src={logo} fill={true} title='Top Nepal Treck' alt='Top Nepal Treck' className='object-contain'/>
                        </div>
                        <div className = 'flex flex-col gap-4 lg:flex-1'>
                            <h5 className='text-secondary text-[24px]'>
                                Top Nepal
                            </h5>
                            <div>
                                <div className=''>🗺️  Thành phố Hồ Chí Minh - Việt Nam</div>
                            </div>
                            <div>

                                <div>📞(+84) 966 512 740 - (+977) 984 344 7027 </div>
                            </div>
                            <div>
                                <div className='w-[90%]'>✉️  trekking.himalayanofficial@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className = 'my-[40px] shadow-md shadow-slate-200'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.373418851246!2d106.69861887469717!3d10.782685289366418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f49e7cce083%3A0xaff51dd6810f6963!2zMjkgxJAuIEzDqiBEdeG6qW4sIELhur9uIE5naMOpLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1681119946217!5m2!1svi!2s" loading="lazy"  className='w-full h-[300px] lg:h-[490px]'></iframe>
                    </div> */}
                    <ContactFrom/>
                </div>  
                </div>
            </div>
        </div>
    );
}
Contact.getLayout = DefaultLayout
export default Contact;