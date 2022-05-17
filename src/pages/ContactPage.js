import React, { useContext } from 'react';
import Hero7 from '../components/contact/Hero7.js';
import ContactBanner from '../components/ContactBanner';
import RegularQuestions from '../components/contact/RegularQuestions.js';
import WidthContext from '../contexts/WidthContext';

const ContactPage = () => {

    
    const size = useContext(WidthContext);

    const isMobile = () => {
        if(['xs', 'sm', 'md'].includes(size)) return 'true';
        if(['lg', 'xl', 'xxl'].includes(size)) return 'false';
    } 

    return (
        <div className='layout-wrapper'>
            <Hero7 size={size} ismobile={isMobile().toString()} />
            <RegularQuestions size={size} />
            <ContactBanner size={size} />
        </div>
    )
}

export default ContactPage;

