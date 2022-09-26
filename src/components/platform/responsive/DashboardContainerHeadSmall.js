import React from 'react';

const DashboardContainerHeadSmall = (props) => {
    return (
        <>
            <div className='layout-blocks-small'>
                <h1 className='medium-18'>Hola, {props.username}, tenemos todo listo!</h1>
                <h3 className='regular-12' style={{ color: "rgba(0, 0, 0, 0.45)" }}>Bienvenido a Plataforma ENARM</h3>
            </div>
        </>
    )
}

export default DashboardContainerHeadSmall;