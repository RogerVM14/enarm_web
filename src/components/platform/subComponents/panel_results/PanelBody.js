import React from 'react';

const PanelBody = (props) => {
    return (
        <div className='c-panel-container__body'>
            {props.children}
        </div>
    )
}

export default PanelBody;