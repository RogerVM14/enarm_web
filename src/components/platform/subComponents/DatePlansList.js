import React from 'react';

const DatePlansList = (props) => {

    const datesList = [
        { date: "18 de octubre", dMonths: "11 meses." },
        { date: "1 de noviembre", dMonths: "10 meses." },
        { date: "1 de diciembre", dMonths: "9 meses." },
        { date: "1 de enero", dMonths: "8 meses." },
        { date: "1 de febrero", dMonths: "7 meses." },
    ]
    return (
        <div>
            {
                datesList.map((item, index) => {
                    return (
                        <div className='dateplans-card' key={index}>
                            <ul className='dateList-ul'>
                                <li className={`regular-14 ${props.isSmart ? "lineHeight-24" : ""}`}>
                                    <span className='fw500'>{item.date}</span> para curso en <span className='blue'>{item.dMonths} </span>
                                </li>
                            </ul>
                            <p className={`regular-14 ${props.isSmart ? "lineHeight-24" : ""}`}>
                                Tienes dos días para revisar los temas de cada Video-Clase de tu temario.<br />
                                <span className='regular-14 fw500'>Ejemplo:</span> El temario de Infectología está dividido en 5 Video-Clases, en tu calendario observarás que se le dan 10 días a Infectología, es decir 2 días  para revisar los temas de las Video-Clases.<br />
                                Los Domingos son de <span className='regular-14 fw500'>Simulador-Pro.</span>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DatePlansList