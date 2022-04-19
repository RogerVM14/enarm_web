import React, { useContext } from 'react';
import Hero2 from '../components/about_us/Hero2';
import KnowUs from '../components/about_us/KnowUs';
import News from '../components/about_us/News';
import Facts from '../components/about_us/Facts';
import Stats from '../components/about_us/Stats';
import Promises from '../components/Promises';
import WidthContext from '../contexts/WidthContext';

const AboutUsPage = () => {
 
    const screenSize = useContext(WidthContext);

    return (
        <div className='layout-wrapper'>
            <Hero2 width={screenSize}/>
            <KnowUs width={screenSize}/>
            <News width={screenSize}/>
            <Facts width={screenSize}/>
            <Stats width={screenSize}/>
            <Promises width={screenSize}/>
        </div>
    )
}

export default AboutUsPage;