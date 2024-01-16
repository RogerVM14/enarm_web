import React from 'react';

const NavbarContentMedium = (props) => {
  return (
    <div className='navbar-content'>
      <div className="search-tag">
        {
          props.searchButton && (
            <input type="text" placeholder='Buscar...' className='search-tag-input' />
          )
        }
        <button onClick={() => props.handleSearhButton()}>
          <i className="material-icons-outlined">search</i>
        </button>
      </div>
      <div className="about-tag">
        <button onClick={() => { props.handleContactModal() }} >
          <i className="material-icons-outlined">help_outline</i>
        </button>
      </div>
      <div className="user-info" onClick={() => { props.handleUserModal() }}>
        <img src={props.userIcon} alt="user-img" className="user-icon" />
        <span className="user-name">{props.userData}</span>
      </div>
    </div>
  )
}

export default NavbarContentMedium