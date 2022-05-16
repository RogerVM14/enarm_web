import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import blog1Image from '../../assets/imgs/blog_1.png';
import blog2Image from '../../assets/imgs/blog_2.png';
import blog3Image from '../../assets/imgs/blog_3.png';
import '../../css/blog_entries/Hero4.css'; 

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

const Hero4 = ({ size, ismobile }) => {

    const [mobileDevice, setMobileDevice] = useState(true); 
    const navigate = useNavigate();

    useEffect(() =>{
        const isMobileDevice = () =>{
            if(ismobile === 'true') {
                setMobileDevice(true)
                return;
            }
            setMobileDevice(false);
            return;
        }

        isMobileDevice();
    }, [ismobile]);

    setTimeout(() => {
        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
        
        const body = document.querySelector("body");
        body.scrollTop = 0;
    }, 100);
 
    const goToNavigation = (i) => {
        navigate(`/blog/${i}`, { replace: false });
    }

    return (
        <div className={`hero-4 ${size}`}>
            <div className="hero-4-container">
                <div className="hero-4-container-header reveal-load">
                    <h2 className="title text-center reveal-load fade-in-title">
                        <span className={ismobile ? "bold-44": "bold-47"}>Orientación</span>
                        <span className={ismobile ? "bold-44": "bold-47"}>sobre</span>
                        <span className={ismobile ? "bold-44": "bold-47"}>el</span>
                        <span className={ismobile ? "bold-44": "bold-47"}>ENARM</span>
                        <span className={ismobile ? "bold-44": "bold-47"}>y</span>
                        <span className={ismobile ? "bold-44": "bold-47"}>sus</span>
                        <span className={ismobile ? "bold-44": "bold-47"}>tendencias</span>
                    </h2>
                    <p className={`${mobileDevice ? 'regular-14' : 'regular-16' } text-center reveal-load`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="hero-4-container-body reveal-load">
                    <h1 className="tiny-blue-title text-center">ENTRADAS DESTACADAS</h1>
                    <div className="entries">
                        {
                            entries_list.map((item, index) => {
                                return (
                                    <div className="entry" key={index} onClick={() => goToNavigation(index)}>
                                        <div className="entry-image">
                                            <img src={item.image} alt="entry" />
                                        </div>
                                        <div className="entry-text">
                                            <Link className='entry-link' to={`/blog/${index}`} key={index}>
                                                <p className={`${mobileDevice ? 'regular-14' : 'regular-16' } gray`}>{item.date}</p>
                                                <p className="regular-20">{item.text}</p>
                                            </Link>
                                        </div>
                                    </div>
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