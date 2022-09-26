import React from 'react'

const CircleResultsByPercentage = (props) => {

    const { totalAttempts } = props;

    const first_tag_style = { borderTop: "1px solid #f0f0f0" };
    const attempts_label = ["1er", "2do", "3ro", "4to", "5to"]

    const { isSmart } = props;

    return (
        <>
            {
                totalAttempts.map((attempt, atIndex) => {
                    return (
                        <div
                            key={atIndex}
                            className="panel-left-results__body__tries"
                            style={atIndex === 0 ? first_tag_style : null}
                        >
                            <div>
                                <h1 className='regular-16'>{attempts_label[atIndex]} Intento</h1>
                                <span className='regular-12 results' style={{ color: "rgba(0, 0, 0, 0.45)" }}>{attempt.correct_answers} de 50 respuestas correctas</span>
                                <h1 className='regular-14 retro-link'>Ver Retroalimentación</h1>
                            </div>
                            <div className='circle-percentage' style={isSmart ? {
                                alignSelf: "center",
                                marginLeft: "auto"
                            } : {}}>
                                <div className="percent">
                                    <svg>
                                        <circle cx="21" cy="21" r="21"></circle>
                                        <circle
                                            cx="21"
                                            cy="21"
                                            r="21"
                                            style={{
                                                strokeDashoffset: `calc(132 - (132 * ${parseInt(attempt.percentage * 100)}) / 100)`,
                                                stroke: "#06b2fa"
                                            }}
                                        ></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2 className='regular-12'>{attempt.percentage * 100}<span className='regular-12'>%</span></h2>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CircleResultsByPercentage