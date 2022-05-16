import React from 'react'; 
import facebookIcon from '../../assets/icons/facebook-blue.png';
import twitterIcon from '../../assets/icons/twitter-blue.png';
import pinterestIcon from '../../assets/icons/pinterest-blue.png';
import instagramIcon from '../../assets/icons/instagram-blue.png';
import '../../css/entry_details/Hero5.css';


const Hero5 = ({ size }) => { 
    setTimeout(() => {
        
        const body = document.querySelector("body");
        body.scrollTop = 0;

        const items = document.querySelectorAll(".reveal-load");
        items.forEach(item => {
            item.classList.add("active");
        })
        
    }, 100);

    return (
        <div className='hero-5'>
            <div className="hero-5-container">
                <div className="container-head">
                    <h1 className={`bold-${['xl', 'xxl'].includes(size) ? '44': '47'} text-center reveal-load`}>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                    </h1>
                </div>
                <div className="container-body">
                    <p className="hero-5-date regular-14 text-center gray reveal-load">25/02/2021</p>
                    <div className="social-media-container reveal-load">
                        <p className='regular-14 text-center gray'>Compartir:</p>
                        <div className='social-media-icons'>
                            <img src={facebookIcon} alt="facebook" />
                            <img src={twitterIcon} alt="twitter" />
                            <img src={pinterestIcon} alt="pinterest" />
                            <img src={instagramIcon} alt="instagram" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero5;