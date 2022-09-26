import React from 'react';

const SearchBarSmart = () => {
    return (
        <div className='search-bar-container'>
            <input type="text" placeholder='Buscar palabra clave'/>
            <button className='button-search-icon'>
                <i className="material-icons">search</i>
            </button>
        </div>
    )
}

export default SearchBarSmart