import React, { useContext } from 'react'
import NavBar from '../NavBar';
import Modal from '../Modal';
import WidthContext from '../../contexts/WidthContext';

const AccessLayout = ({ children }) => {

  const size = useContext(WidthContext);

  const isMobile = () => {
    if (['xs', 'sm', 'md'].includes(size)) return true;
    if (['lg', 'xl', 'xxl'].includes(size)) return false;
  }

  return (
    <>
      <NavBar size={size} ismobile={isMobile} />
      <main className={size}>
        {children}
      </main>
      <Modal size={size} ismobile={isMobile} />
    </>
  )
}

export default AccessLayout;