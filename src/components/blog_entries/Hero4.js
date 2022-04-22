import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/blog_entries/Hero4.css'; 
import blog1Image from '../../assets/imgs/blog_1.png';
import blog2Image from '../../assets/imgs/blog_2.png';
import blog3Image from '../../assets/imgs/blog_3.png';

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
    }
]

const Hero4 = () => {

    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
        
        const body = document.querySelector("body");
        body.scrollTop = 0;
    }, 100);
 
    return (
        <div className='hero-4' >
            <div className="hero-4-container">
                <div className="hero-4-container-header reveal-load">
                    <h2 className="title text-center mb-16 reveal-load">Orientación sobre el ENARM y sus tendencias</h2>
                    <p className="regular-14 text-center reveal-load">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="hero-4-container-body reveal-load">
                    <h1 className="tiny-blue-title text-center">ENTRADAS DESTACADAS</h1>
                    <div className="entries">

                        {
                            entries_list.map((item, index) => {
                                return (
                                    <Link to={`/blog/${index}`} key={index}>
                                        <div className="entry" key={index}>
                                            <div className="entry-image">
                                                <img src={item.image} alt="entry" />
                                            </div>
                                            <div className="entry-text">
                                                <p className="gray">{item.date}</p>
                                                <p className="regular-20">{item.text}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero4;