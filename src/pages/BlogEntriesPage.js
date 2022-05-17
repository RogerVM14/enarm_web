import React, { useContext } from 'react';
import ContentsEntries from '../components/blog_entries/ContentsEntries';
import Hero4 from '../components/blog_entries/Hero4';
import Promises from '../components/Promises';
import WidthContext from '../contexts/WidthContext';

const BlogEntriesPage = () => {
    
    const size = useContext(WidthContext);

    const isMobile = () => {
        if(['xs', 'sm', 'md'].includes(size)) return 'true';
        if(['lg', 'xl', 'xxl'].includes(size)) return 'false';
    } 

    return ( 
        <>
            <Hero4 size={size} ismobile={isMobile().toString()} />
            <ContentsEntries size={size} ismobile={isMobile().toString()} />
            <Promises size={size} />
        </>
    )
}

export default BlogEntriesPage