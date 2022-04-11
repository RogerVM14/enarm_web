import React from 'react'
import ContentsEntries from '../components/ContentsEntries'
import Hero4 from '../components/Hero4'
import Promises from '../components/Promises'

const BlogEntriesPage = () => {
    return (
        <div className='layout-wrapper'>
            <Hero4 />
            <ContentsEntries />
            <Promises />
        </div>
    )
}

export default BlogEntriesPage