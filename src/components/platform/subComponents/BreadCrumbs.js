import React, { useContext } from 'react';
import { PlatformResponsiveContext } from '../../../contexts/platform/PlatformResponsiveContext';

const BreadCrumbs = (props) => {

    const { device } = useContext(PlatformResponsiveContext);

    return (
        <div className='breadcrumb'>
            <h3 className={`gray-textColor regular-${device === "smart" ? "10" : "14"}`}>Sitio Plataforma Enarm</h3>
            <span className={`first-level ${device === "smart" ? "regular-10" : ""}`}>/</span>
            <h3 className={`regular-${device === "smart" ? "10" : "14"} ${props.currentSubPage ? "gray-textColor" : ""}`}>{props.currentPage}</h3>
            {props.currentSubPage &&
                <>
                    <span>/</span>
                    <h3 className='regular-14'>{props.currentSubPage}</h3>
                </>
            }
        </div>
    )
}

export default BreadCrumbs;