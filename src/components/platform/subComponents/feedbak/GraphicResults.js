import React, { useEffect, useState } from 'react'

const GraphicResults = (props) => {

    const [categoryResults, setCategoryResults] = useState([]);
    const [hover, setHover] = useState([]);
  
    useEffect(() => {
        setCategoryResults(props.results);
        const graphicCategories = () => {

            let count = 0;
            const boolean_array = [];
            while (count <= props.results.length) {
                boolean_array.push(false);
                count++;
            }
            return boolean_array;
        }

        setHover(graphicCategories());
    }, [props])
 

    const handleGraphHover = (index, bool) => {
        setHover((items) => {
            const NEW_ARRAY = items.map((it, ix) => {
                if (ix === index) {
                    return bool;
                }
                return it;
            })
            return NEW_ARRAY;
        });
    }

    return (
        <div className="graphic">
            <div className="horizontal-line h-line-100"></div>
            <div className="horizontal-line h-line-75"></div>
            <div className="horizontal-line h-line-50"></div>
            <div className="horizontal-line h-line-25"></div>
            <div className="horizontal-line h-line-0"></div>
            <div className="graphic-container">
                {
                    categoryResults.map((category, catIndex) => {
                        if (catIndex === 0) {
                            return (
                                <div key={catIndex}>
                                    <span className='porcentaje porce-100 regular-12'>100%</span>
                                    <span className='porcentaje porce-75 regular-12'>75%</span>
                                    <span className='porcentaje porce-50 regular-12'>50%</span>
                                    <span className='porcentaje porce-25 regular-12'>25%</span>
                                    <span className='porcentaje porce-0 regular-12'>0%</span>
                                </div>
                            )
                        }
                        return (
                            <div key={catIndex}>
                                <span
                                    className='porcentaje regular-12 bold'
                                    style={{
                                        bottom: `calc(100px + (200px * ${category.result}))`,
                                        whiteSpace: "nowrap",

                                    }}
                                >
                                    {hover[catIndex] && ((parseFloat(category.result) * 100).toFixed(2) + "%")}
                                </span>
                                <div
                                    className="barra"
                                    style={{
                                        height: `calc(200px * ${category.result})`,
                                        background: (() => {
                                            return hover[catIndex] ? "#05B2FA" : "#05B2FA35";
                                        })()
                                    }}
                                    onMouseEnter={() => { handleGraphHover(catIndex, true) }}
                                    onMouseLeave={() => { handleGraphHover(catIndex, false) }}
                                ></div>
                                <span className="categoria regular-12">{category.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GraphicResults