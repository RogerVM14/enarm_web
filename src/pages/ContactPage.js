import React from 'react';
import Hero7 from '../components/Hero7.js';
import ContactBanner from '../components/ContactBanner';
import RegularQuestions from '../components/RegularQuestions.js';

const ContactPage = () => {
    return (
        <div className='layout-wrapper'>
            <Hero7 />
            <RegularQuestions />
            <ContactBanner />
        </div>
    )
}

export default ContactPage