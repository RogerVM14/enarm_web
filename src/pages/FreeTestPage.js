import React, { useContext } from 'react';
import Hero6 from '../components/free_test/Hero6';
import AreYouReady from '../components/free_test/AreYouReady';
import ContactBanner from '../components/ContactBanner';
import Discount from '../components/Discount'
import Advantages from '../components/free_test/Advantages';
import WidthContext from '../contexts/WidthContext';

const FreeTestPage = () => {

    const size = useContext(WidthContext);

    const isMobile = () => {
        if(['xs', 'sm', 'md'].includes(size)) return 'true';
        if(['lg', 'xl', 'xxl'].includes(size)) return 'false';
    } 

    return ( 
        <>
            <Hero6 size={size} />
            <AreYouReady size={size} ismobile={isMobile().toString()} />
            <ContactBanner size={size} ismobile={isMobile().toString()} />
            <Advantages size={size} /> 
            <Discount size={size} ismobile={isMobile().toString()} />
        </>
    )
}

export default FreeTestPage;