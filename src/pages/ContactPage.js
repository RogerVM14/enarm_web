import React, { useContext } from 'react';
import Hero7 from '../components/contact/Hero7.js';
import ContactBanner from '../components/ContactBanner';
import RegularQuestions from '../components/contact/RegularQuestions.js';
import WidthContext from '../contexts/WidthContext';

const ContactPage = () => {

    const screenSize = useContext(WidthContext);
    return (
        <div className='layout-wrapper'>
            <Hero7 width={screenSize}/>
            <RegularQuestions width={screenSize}/>
            <ContactBanner width={screenSize}/>
        </div>
    )
}

export default ContactPage