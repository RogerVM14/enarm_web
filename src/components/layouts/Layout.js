import React from 'react'
import NavBar from '../NavBar';
import Footer from '../Footer';
import Modal from '../Modal';
import '../../css/Layout.css'

const Layout = ({ children, topLine }) => {
    return (
        <div className='main-container'>
            <NavBar />
            { children }
            <Footer topLine={topLine} />        
            <Modal />    
        </div>
    )
}

export default Layout;