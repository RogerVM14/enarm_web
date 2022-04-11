import React from 'react';
import Hero2 from '../components/Hero2';
import KnowUs from '../components/KnowUs';
import News from '../components/News';
import Facts from '../components/Facts';
import Stats from '../components/Stats';
import Promises from '../components/Promises';

const AboutUsPage = () => {
    return (
        <div className='layout-wrapper'>
            <Hero2 />
            <KnowUs />
            <News />
            <Facts />
            <Stats />
            <Promises />
        </div>
    )
}

export default AboutUsPage;