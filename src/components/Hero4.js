import React from 'react';
import '../css/Hero4.css'; 
import blog1Image from '../assets/imgs/blog_1.png';
import blog2Image from '../assets/imgs/blog_2.png';
import blog3Image from '../assets/imgs/blog_3.png';

const Hero4 = () => {

    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
    }, 100);

    return (
        <div className='hero-4'>
            <div className="hero-4-container">
                <div className="hero-4-container-header reveal-load">
                    <h2 className="title reveal-load">Orientación sobre el ENARM y sus tendencias</h2>
                    <p className="parraf reveal-load">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="hero-4-container-body reveal-load">
                    <h1 className="title">ENTRADAS DESTACADAS</h1>
                    <div className="entries">
                        <div className="entry">
                            <div className="entry-image">
                                <img src={blog1Image} alt="entry" />
                            </div>
                            <p className="gray-date">25/02/2021</p>
                            <p className="parraf">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                        </div>
                        <div className="entry">
                            <div className="entry-image">
                                <img src={blog2Image} alt="entry" />
                            </div>
                            <p className="gray-date">25/02/2021</p>
                            <p className="parraf">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                        </div>
                        <div className="entry">
                            <div className="entry-image">
                                <img src={blog3Image} alt="entry" />
                            </div>
                            <p className="gray-date">25/02/2021</p>
                            <p className="parraf">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero4;