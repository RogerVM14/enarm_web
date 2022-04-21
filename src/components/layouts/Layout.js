import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Modal from '../Modal';
import '../../css/Layout.css';


const Layout = ({ children, topLine }) => {
    
    const getWindowWidth = () => { 
        let x = window.innerWidth;
        
        if(x >= 320 && x <= 480) return 'small';
        if(x >= 481 && x <= 768) return 'medium';
        if(x >= 769 && x <= 1023) return 'large';
        if(x >= 1024) return 'extra-large';
    }

    const [width, setWidth] = useState(getWindowWidth()); 
    
    useEffect(() => { 
        window.addEventListener('resize', event => {
            const w = getWindowWidth();
            setWidth(w);
        });  
    }, [width]);



    return (
        <div className='main-container'>
            <NavBar breakpoint={width}/>
            <main className={width} >
                { children }
            </main>
            <Footer topLine={topLine} breakpoint={width} />        
            <Modal breakpoint={width} />    
        </div>
    )
}

export default Layout;