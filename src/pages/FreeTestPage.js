import React, { useContext } from 'react';
import Hero6 from '../components/free_test/Hero6';
import AreYouReady from '../components/free_test/AreYouReady';
import ContactBanner from '../components/ContactBanner';
import Discount from '../components/Discount'
import Advantages from '../components/free_test/Advantages';
import WidthContext from '../contexts/WidthContext';
const FreeTestPage = () => {

    const screenSize = useContext(WidthContext);

    return (
        <div className='layout-wrapper'>
            <Hero6 width={screenSize}/>
            <AreYouReady width={screenSize}/>
            <ContactBanner width={screenSize}/>
            <Advantages width={screenSize}/> 
            <Discount width={screenSize}/>
        </div>
    )
}

export default FreeTestPage