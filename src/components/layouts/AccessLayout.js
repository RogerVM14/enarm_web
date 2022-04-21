import React, { useContext } from 'react'
import NavBar from '../NavBar'; 
import Modal from '../Modal';
import '../../css/Layout.css';
import WidthContext from '../../contexts/WidthContext';

const AccessLayout = ({ children }) => {
     
    const width = useContext(WidthContext); 

    return (
        <div className='main-container'>
            <NavBar breakpoint={width} />
            <main className={width}>
                { children }      
            </main>
            <Modal breakpoint={width}/>    
        </div>
    )
}

export default AccessLayout;