import React from 'react';
import '../../css/platform/components/DashboardRightAside.css';

const DashboardRightAside = (props) => {
    return (
        <div className='aside-right-container'>
            { props.children }
        </div>
    )
}

export default DashboardRightAside;