import React from 'react'
import ContentsEntries from '../components/blog_entries/ContentsEntries'
import Hero4 from '../components/blog_entries/Hero4'
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