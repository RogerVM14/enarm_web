import React, { useEffect, useState } from 'react';

const ProgressRecord = (props) => {

    const [progress, setProgress] = useState([]);
    const [bodyShow, setBodyShow] = useState(false);

    useEffect(() => {
        const httprequestProgress = () => {
            const progressArray = [];
            for (let i = 1; i <= props.days; i++) {
                progressArray.push({ day: i, status: false });
            }
            setProgress(progressArray);
        }
        httprequestProgress();
    }, [props.days]);

    const { deviceType, isSmart } = props;

    return (
        <div className={`progress-record ${deviceType}`}>
            {
                isSmart ? (
                    <>
                        <div className="progress-record__head">
                            <div>
                                <span className='semibold-16'>Registra tu avance</span>
                                {bodyShow && <span className='regular-14 gray-textColor'>Semana {props.week} - {props.days} días</span>}
                            </div>
                            <i className="material-icons" onClick={() => { setBodyShow(!bodyShow) }}>{bodyShow ? "expand_more" : "expand_less"}</i>
                        </div>
                        {
                            bodyShow && (
                                <div className="progress-record__body">
                                    {
                                        progress.map((prog, pIndex) => {
                                            return (
                                                <div className='day-week-register smart' key={pIndex}>
                                                    <input type="checkbox" name={`progress-${prog.day}`} id={`input-progress-${prog.day}`} />
                                                    <label className="regular-14" htmlFor={`input-progress-${prog.day}`}>Día {prog.day}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </>
                ) :
                    (
                        <>
                            <div className="progress-record__head">
                                <span className='semibold-16'>Registra tu avance</span>
                            </div>
                            <div className="progress-record__body">
                                <span className='regular-14 gray-textColor'>Semana {props.week} - {props.days} días</span>
                                {
                                    progress.map((prog, pIndex) => {
                                        return (
                                            <div className='day-week-register' key={pIndex}>
                                                <input type="checkbox" name={`progress-${prog.day}`} id={`input-progress-${prog.day}`} />
                                                <label className="regular-14" htmlFor={`input-progress-${prog.day}`}>Día {prog.day} semana {props.week}</label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
            }
        </div>
    )
}

export default ProgressRecord;