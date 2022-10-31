import React, { createContext, useState } from 'react'

export const ActualGuideContext = createContext({});

const CurrentGuideContext = (props) => {

    const [guideData, setGuideData] = useState({ pos: 0, label: "Infectología" });

    const handleGuideSelector = (data) => {
        // console.log(data)
        setGuideData((guide) => {
            return { ...guide, pos: data[0], label: data[1] }
        });
    }

    // useEffect(()=>{
    //     console.log(guideData);
    // }, [guideData])

    return (
        <ActualGuideContext.Provider value={{ guideData, handleGuideSelector }}>
            {props.children}
        </ActualGuideContext.Provider>
    )
}

export default CurrentGuideContext;