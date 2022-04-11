import React from 'react';
import Discount from '../components/Discount'
import Explore from '../components/Explore'
import Hero from '../components/Hero'
import Resources from '../components/Resources'
import ValueProposal from '../components/ValueProposal'
import Witness from '../components/Witness'

const HomePage = () => {
    return (
        <div className='layout-wrapper'>
            <Hero />
            <Explore />
            <Discount />
            <ValueProposal />
            <Witness />
            <Resources />
        </div>
    )
}

export default HomePage