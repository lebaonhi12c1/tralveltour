import React from 'react';
import logo from '@/public/images/logo.jpg'

import Head from 'next/head';
function Headhtml(props) {
    return (
        <Head>
            <title>Enjoy Nepal</title>  

            {/* meta seo */}
            <meta name="description" content="Generated by create next app" />
            <meta name="description" content="Enjoy Nepal Treks & Tours" />
            <meta name="title" content="Enjoy Nepal Treks & Tours - Du lịch trekking Nepal"/>
            <meta name="description" content="Enjoy Nepal Treks & Tours cung cấp các chuyến đi trekking tại Nepal với các gói tour hấp dẫn, đội ngũ hướng dẫn chuyên nghiệp và dịch vụ chất lượng. Đặt tour của bạn ngay hôm nay!"></meta>
            <meta name="description" content="Enjoy Nepal Treks & Tours offers trekking tours in Nepal with attractive tour packages, professional guide team, and quality services. Book your tour today!"></meta>
            <meta name="keywords" content="Enjoy Nepal Treks & Tours, trekking Nepal, trekking tours, du lịch trekking, du lịch Nepal"></meta>
            <meta name="keywords" content="Enjoy Nepal Treks & Tours, Nepal trekking, trekking tours, trekking travel, Nepal travel"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* meta preview link */}
            <meta property="og:image" content={logo} />
            <meta property="og:title" content="Enjoy Nepal Treks & Tours - Trekking Tours in Nepal with Professional Guides"/>
            <meta property="og:description" content="Enjoy Nepal Treks & Tours provides trekking tours in Nepal with attractive packages, professional guides, and quality services. Book your tour today!"/>

            <link rel="icon" href="/images/logo.jpg" />
            
        </Head>
    );
}

export default Headhtml;