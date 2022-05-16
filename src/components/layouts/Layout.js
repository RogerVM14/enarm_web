import React, { useContext } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Modal from '../Modal'; 
import WidthContext from '../../contexts/WidthContext';


const Layout = ({ children, topLine }) => { 

    const width = useContext(WidthContext);

    const isMobile = () => {
        if(['xs', 'sm', 'md'].includes(width)) return true;
        if(['lg', 'xl', 'xxl'].includes(width)) return false;
    } 

    return (
        <>
            <NavBar size={width} ismobile={isMobile().toString()} />
            <main className={width} >
                { children }
            </main>
            <Footer topLine={topLine} size={width} />
            <Modal size={width} ismobile={isMobile().toString()} />
        </>
    )
}

export default Layout;