import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Montserrat } from '@next/font/google';
import Headhtml from '@/components/Headhtml';
import Loading from '@/components/Loading';
import ScrollToTop from '@/components/ScrollToTop';
const monterrat = Montserrat({
    subsets: ['latin'],
    style: 'normal',
    weight: ['100','200','400']
})
function DefaultLayout({children}) {
    return (
        <div className={monterrat.className}>
            <Headhtml/>
            <Navbar/>
            {children}
            <Footer/>
            <Loading/>
            <ScrollToTop/>
        </div>
    );
}

export default DefaultLayout;