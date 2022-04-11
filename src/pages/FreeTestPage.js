import React from 'react';
import Hero6 from '../components/Hero6';
import AreYouReady from '../components/AreYouReady';
import ContactBanner from '../components/ContactBanner';
import Discount from '../components/Discount'
import Advantages from '../components/Advantages';

const FreeTestPage = () => {
    return (
        <div className='layout-wrapper'>
            <Hero6 />
            <AreYouReady />
            <ContactBanner />
            <Advantages /> 
            <Discount />
        </div>
    )
}

export default FreeTestPage