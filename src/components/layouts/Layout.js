import React from 'react'
import NavBar from '../NavBar';
import Footer from '../Footer';
import Modal from '../Modal';
import '../../css/Layout.css'

const Layout = ({ children }) => {
    return (
        <div className='main-container'>
            <NavBar />
            { children }
            <Footer />        
            <Modal />    
        </div>
    )
}

export default Layout;