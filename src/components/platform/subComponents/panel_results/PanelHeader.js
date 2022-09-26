import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentCourseContext } from '../../../../contexts/platform/CurrentCourseContext';

const PanelHeader = (props) => {

    const navigate = useNavigate();
    const { currentCourse } = useContext(CurrentCourseContext);

    const { deviceType, isSmart } = props;

    return (
        <div className={`panel-header-container ${deviceType}`}>
            <div className="panel-header__head">
                <div className="panel-header__head__left">
                    <i className="material-icons" onClick={() => { navigate(-1) }}>chevron_left</i>
                    <h1 className={`medium-${isSmart ? "16" : "20"}`}>Simulador {currentCourse.course}</h1>
                    <span className='regular-14' style={{ color: "rgba(0, 0, 0, 0.45)" }}>Panel</span>
                </div>
                {
                    !isSmart && (
                        <div className="panel-header__head__right">
                            <button type='button' className='regular-14'>Comenzar Simulador</button>
                        </div>
                    )
                }
            </div>
            <div className="panel-header__body">
                <p className='regular-14'>
                    En este espacio podrás conocer las estadísticas de tu desempeño por cada intento realizado.
                    Además, para una mejor retroalimentación hemos dividido los resultados por categorías para que
                    identifiques rápidamente cuáles son tus categorías fuertes y cuáles son aquellas que necesitas reforzar.
                </p>
            </div>
            {
                isSmart && (
                    <div className="panel-header__head__right">
                        <button type='button' className='regular-14'>Comenzar Simulador</button>
                    </div>
                )
            }
        </div>
    )
}

export default PanelHeader;