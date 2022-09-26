import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudyCalendar = (props) => {

    const { deviceType, isSmart } = props;
    const [showBody, setShowBody] = useState(false);

    return (
        <div className='calendar'>
            <div className={`calendar-head ${deviceType}`}>
                <h3 className={isSmart ? "medium-14" : 'semibold-16'}>Calendario de Estudio</h3>
                {
                    isSmart ? (
                        showBody
                            ? <i className='material-icons' onClick={() => { setShowBody(!showBody) }}>expand_less</i>
                            : <i className='material-icons' onClick={() => { setShowBody(!showBody) }}>expand_more</i>
                    ) : null
                }
            </div>
            {
                (isSmart && showBody) ? (
                    <div className={`calendar-body ${deviceType}`}>
                        <span className={`regular-${isSmart ? "12" : "14"} gray`}>Ejemplo Calendario Mensual</span>
                        <h1 className={isSmart ? 'semibold-22' : 'semibold-24'} style={{ marginTop: "4px", marginBottom: "8px" }}>Alcanza tus metas con el siguiente calendario.</h1>
                        <p className={isSmart ? "regular-12 lineHeight-18" : "regular-14"}>El realizarlo te permitirá tener una organización, programar tus días de estudio y crear un hábito de estudio.</p>
                        <button>
                            <Link className='noDecor regular-14 black' to="#" target="_blank">Descargar Calendario</Link>
                        </button>
                    </div>
                ) : (
                    !isSmart ? (
                        <div className={`calendar-body ${deviceType}`}>
                            <span className='regular-14 gray'>Ejemplo Calendario Mensual</span>
                            <h1 className='semibold-24' style={{ marginTop: "4px", marginBottom: "8px" }}>Alcanza tus metas con el siguiente calendario.</h1>
                            <p className='regular-14'>El realizarlo te permitirá tener una organización, programar tus días de estudio y crear un hábito de estudio.</p>
                            <button>
                                <Link className='noDecor regular-14 black' to="#" target="_blank">Descargar Calendario</Link>
                            </button>
                        </div>
                    ) : null
                )
            }
        </div>
    )
}

export default StudyCalendar;