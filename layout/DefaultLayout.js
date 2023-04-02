import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Montserrat } from '@next/font/google';
import Headhtml from '@/components/Headhtml';
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
        </div>
    );
}

export default DefaultLayout;