import React from 'react';
import '../../css/blog_entries/ContentsEntries.css';
import blog1Image from '../../assets/imgs/blog_1.png';
import blog2Image from '../../assets/imgs/blog_2.png';
import blog3Image from '../../assets/imgs/blog_3.png';
import { Link } from 'react-router-dom';

const entries_list = [
    {
        image: blog1Image,
        date: "25/02/2021",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    },
    {
        image: blog2Image,
        date: "25/02/2021",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    },
    {
        image: blog3Image,
        date: "25/02/2021",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    },
    {
        image: blog1Image,
        date: "25/02/2021",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    },
    {
        image: blog2Image,
        date: "25/02/2021",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    },
    {
        image: blog3Image,
        date: "25/02/2021",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    },
    {
        image: blog1Image,
        date: "25/02/2021",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    },
    {
        image: blog2Image,
        date: "25/02/2021",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    },
    {
        image: blog3Image,
        date: "25/02/2021",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    },
]

const ContentsEntries = () => {
    return (
        <div className='contents-entries'>
            <div className="contents-entries-container">
                <div className="contents-entries-container-header">
                    <h2 className="subtitle text-center">Todas las entradas</h2>
                </div>
                <div className="contents-entries-container-body">                    
                    <div className="entries">
                        {
                            entries_list.map((item, index) => {
                                return (
                                    <div className="entry" key={index}>
                                        <Link to={`/blog/${index}`}>
                                            <div className="entry-image">
                                                <img src={item.image} alt="entry" />
                                            </div>
                                            <div className="entry-text">
                                                <p className="gray">{ item.date }</p>
                                                <p className="regular-20">{ item.text }</p>
                                            </div>
                                        </Link>
                                    </div>  
                                )
                            })
                        }
                    </div>
                    <div className='pagination-entries'>
                        <span>{"< 1 2 3 4 5 ... 99 >"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentsEntries