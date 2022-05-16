import React, { useContext } from 'react';
import Discount from '../components/Discount';
import Explore from '../components/homepage/Explore';
import Hero from '../components/homepage/Hero';
import Resources from '../components/Resources';
import ValueProposal from '../components/homepage/ValueProposal';
import Witness from '../components/homepage/Witness'; 
import WidthContext from '../contexts/WidthContext';

const HomePage = () => { 
     
    const size = useContext(WidthContext);

    const isMobile = () => {
        if(['xs', 'sm', 'md'].includes(size)) return 'true';
        if(['lg', 'xl', 'xxl'].includes(size)) return 'false';
    } 
    
    return (
        <>
            <Hero size={size} ismobile={isMobile()} />
            <Explore size={size} ismobile={isMobile()} />
            <Discount size={size} ismobile={isMobile()} />
            <ValueProposal size={size} ismobile={isMobile()} />
            <Witness size={size} ismobile={isMobile()} />
            <Resources size={size} ismobile={isMobile()} />
        </>
    )
}

export default HomePage;