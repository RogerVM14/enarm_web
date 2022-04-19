import React, { useContext } from 'react';
import Hero3 from '../components/about_course/Hero3';
import Process from '../components/about_course/Process'; 
import HowItWorks from '../components/about_course/HowItWorks';
import Contents from '../components/about_course/Contents';
import WidthContext from '../contexts/WidthContext';

const AboutCoursePage = () => {

    const screenSize = useContext(WidthContext);
    return (
        <div className='layout-wrapper'>
            <Hero3 />
            <Process />
            <HowItWorks width={screenSize}/>
            <Contents />
        </div>
    )
}

export default AboutCoursePage;