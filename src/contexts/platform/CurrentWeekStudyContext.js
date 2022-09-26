import React, { createContext, useState } from 'react';

export const CurrentWeekContext = createContext(null);

const CurrentWeekStudyContext = (props) => {

    const [currentWeek, setCurrentWeek] = useState({
        week: 0, class: "", days: 0
    });

    const handleSelectCurrentWeek = (prop) => {
        setCurrentWeek(() => {
            return { week: prop.week, class: prop.class, days: prop.days }
        });
    }

    return (
        <CurrentWeekContext.Provider value={{ currentWeek, handleSelectCurrentWeek }}>
            {props.children}
        </CurrentWeekContext.Provider>
    )
}

export default CurrentWeekStudyContext