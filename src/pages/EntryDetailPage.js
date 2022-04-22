import React, { useContext } from 'react';
import Hero5 from '../components/entry_details/Hero5';
import Entry from '../components/entry_details/Entry';
import InterestingEntries from '../components/entry_details/InterestingEntries';
import Resources from '../components/Resources';
import WidthContext from '../contexts/WidthContext'

const EntryDetailPage = () => {
    
    const screenSize = useContext(WidthContext);

    return (
        <div>
            <Hero5 width={screenSize} />
            <Entry width={screenSize} />
            <InterestingEntries width={screenSize} />
            <Resources width={screenSize} />
        </div>
    )
}

export default EntryDetailPage