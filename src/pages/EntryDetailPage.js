import React, { useContext } from 'react';
import Hero5 from '../components/entry_details/Hero5';
import Entry from '../components/entry_details/Entry';
import InterestingEntries from '../components/entry_details/InterestingEntries';
import Resources from '../components/Resources';
import WidthContext from '../contexts/WidthContext'

const EntryDetailPage = () => {
    
    const size = useContext(WidthContext);

    const isMobile = () => {
        if(['xs', 'sm', 'md'].includes(size)) return 'true';
        if(['lg', 'xl', 'xxl'].includes(size)) return 'false';
    } 


    return (
        <div>
            <Hero5 size={size} />
            <Entry size={size} ismobile={isMobile().toString()} />
            <InterestingEntries size={size} ismobile={isMobile().toString()} />
            <Resources size={size} ismobile={isMobile().toString()} />
        </div>
    )
}

export default EntryDetailPage