import React from 'react';
import Hero3 from '../components/Hero3';
import Process from '../components/Process'; 
import HowItWorks from '../components/HowItWorks';
import Contents from '../components/Contents';

const AboutCoursePage = () => {
    return (
        <div className='layout-wrapper'>
            <Hero3 />
            <Process />
            <HowItWorks />
            <Contents />
        </div>
    )
}

export default AboutCoursePage;