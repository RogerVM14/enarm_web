import React from 'react';

const NavbarContentSmall = (props) => {
    return (
        <div className='navbar-content-small'>
            <h1 className='semibold-14 sky-blue'>Plataforma ENARM</h1>
            <div className='navbar-content-buttons'>
                <button onClick={() => { props.handleContactModal() }} >
                    <i className="material-icons-outlined">help_outline</i>
                </button>
                <button onClick={() => { props.handleShowMenu()}}>
                    <i className="material-icons-outlined">menu</i>
                </button>
            </div>
        </div>
    )
}

export default NavbarContentSmall;