import React, { useState } from 'react'; 
import imagesUrls from './CarrouselImages';
import '../css/Carrousel.css';
 
const dots = ['dot', 'dot', 'dot'];

const Carrousel = () => {

    const [current, setCurrent] = useState(0);
    const [dot, setDot] = useState(0);

    const updateCurrentCarrouselItem = () => {

        if(current === imagesUrls.length - 1) {
            setCurrent(0);
            setDot(0);
            return;
        }
    
        setCurrent(current + 1)
        
        if(dot === 2) {
            setDot(0);
            return;
        }

        setDot(dot + 1)
        return;
    }
 
    setInterval(() => {
        updateCurrentCarrouselItem();
    }, 5000);

    return (
        <div className='enarm-carrousel'>
            <div className='carrousel-container'> 
                <div className='carrousel-items'>
                    {
                        imagesUrls.map((item, index) => {
                            return (
                                <div className={`item ${index !== current ? 'hidden-item': ''}`} key={index}>
                                    <img 
                                        className='image-carrousel'
                                        src={item[1]} 
                                        alt='witness' 
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="ranking-dots">
                    {
                        dots.map((item, index) => {
                            return (
                                <div className={`dot ${ index === dot ? 'selected' : ''}`} key={index}></div>                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Carrousel;