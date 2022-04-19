import React, { useContext } from 'react';
import Discount from '../components/Discount';
import Explore from '../components/homepage/Explore';
import Hero from '../components/homepage/Hero';
import Resources from '../components/Resources';
import ValueProposal from '../components/homepage/ValueProposal';
import Witness from '../components/homepage/Witness';
import WidthContext from '../contexts/WidthContext';

const HomePage = () => { 
    
    const screenSize = useContext(WidthContext);

    return (
        <div className='layout-wrapper'>
            <Hero width={screenSize}/>
            <Explore width={screenSize}/>
            <Discount width={screenSize}/>
            <ValueProposal width={screenSize}/>
            <Witness width={screenSize}/>
            <Resources width={screenSize}/>
        </div>
    )
}

export default HomePage