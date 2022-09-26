import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/platform/components/Cards.css';

const Cards = (props) => {

    const { device, title, redirect, route, parraf, icon } =  props;

    return (
        <>
            {
                device === "smart" ? (

                    <div className={`c-card smart`}>
                        <div className='c-card-head smart'>
                            <span className='regular-14 white'>
                                <i className='material-icons'>{icon}</i>
                                {title}
                            </span>
                            {redirect && <Link className='regular-14 lineHeight-18' to={route}>Ir</Link>}
                        </div>
                        <div className='c-card-body smart'>
                            <p className='regular-12 lineHeight-18 white'>{parraf}</p>
                        </div>
                    </div>
                ) : 
                    (
                        <div className='c-card'>
                            <div className='c-card-head'>
                                <span className='regular-16 white'>
                                    <i className='material-icons'>{icon}</i>
                                    {title}
                                </span>
                                {redirect && <Link className='regular-16' to={route}>Ir</Link>}
                            </div>
                            <div className='c-card-body'>
                                <p className='regular-14 white'>{parraf}</p>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Cards;