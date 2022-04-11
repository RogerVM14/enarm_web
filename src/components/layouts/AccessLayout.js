import React from 'react'
import NavBar from '../NavBar'; 
import Modal from '../Modal';
import '../../css/Layout.css'

const AccessLayout = ({ children }) => {
    return (
        <div className='main-container'>
            <NavBar />
            { children }      
            <Modal />    
        </div>
    )
}

export default AccessLayout;