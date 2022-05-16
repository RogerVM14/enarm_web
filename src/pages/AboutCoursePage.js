import React, { useContext } from 'react';
import Hero3 from '../components/about_course/Hero3';
import Process from '../components/about_course/Process'; 
import HowItWorks from '../components/about_course/HowItWorks';
import Contents from '../components/about_course/Contents';
import WidthContext from '../contexts/WidthContext';

const AboutCoursePage = () => {

    const size = useContext(WidthContext);

    const isMobile = () => {
        if(['xs', 'sm', 'md'].includes(size)) return 'true';
        if(['lg', 'xl', 'xxl'].includes(size)) return 'false';
    } 

    return (
        <>
            <Hero3 size={size} ismobile={isMobile().toString()} />
            <Process size={size} />
            <HowItWorks size={size} ismobile={isMobile().toString()} />
            <Contents size={size} ismobile={isMobile().toString()} />
        </>
    )
}

export default AboutCoursePage;