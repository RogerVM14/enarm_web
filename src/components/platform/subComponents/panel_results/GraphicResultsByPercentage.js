import React, { useContext } from 'react'
import { CategoryResultsContext } from '../../../../contexts/platform/CategoryResultsContext';

const GraphicResultsByPercentage = (props) => {

    const { results } = useContext(CategoryResultsContext);

    return (
        <div className='graphic-results-bars'>
            <div className="results-bars-attempts">
                {
                    props.showAttemps && (
                        <div className='attempt-top'>
                            <h1 className="medium-16" style={{ color: "#05B2FA" }}>1er Intento</h1>
                        </div>
                    )
                }
                {
                    results.map((item, index) => {
                        if (index === 0) return null
                        return (
                            <div className='result-bar' key={index}>
                                <div className='result-bar__top'>
                                    <span className="regular-12">{item.name} </span>
                                    <span className="regular-12" style={{ color: "rgba(0, 0, 0, 0.45)" }}>{(item.result * 100).toFixed(0)}%</span>
                                </div>
                                <div className='result-bar__bottom'>
                                    <div className="long-bar"></div>
                                    <div className="percent-bar"
                                        style={{
                                            width: `${(item.result * 100).toFixed(0)}%`
                                        }}></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GraphicResultsByPercentage