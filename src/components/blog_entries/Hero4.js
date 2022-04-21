import React from 'react';
import '../../css/blog_entries/Hero4.css'; 
import blog1Image from '../../assets/imgs/blog_1.png';
import blog2Image from '../../assets/imgs/blog_2.png';
import blog3Image from '../../assets/imgs/blog_3.png';

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
                        <div className="entry">
                            <div className="entry-image">
                                <img src={blog1Image} alt="entry" />
                            </div>
                            <div className="entry-text">
                                <p className="gray">25/02/2021</p>
                                <p className="regular-20">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                            </div>
                        </div>
                        <div className="entry">
                            <div className="entry-image">
                                <img src={blog2Image} alt="entry" />
                            </div>
                            <div className="entry-text">
                                <p className="gray">25/02/2021</p>
                                <p className="regular-20">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                            </div>
                        </div>
                        <div className="entry">
                            <div className="entry-image">
                                <img src={blog3Image} alt="entry" />
                            </div>
                            <div className="entry-text">
                                <p className="gray">25/02/2021</p>
                                <p className="regular-20">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero4;