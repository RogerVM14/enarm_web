import React, { createContext, useState } from 'react';

export const DashAsideContext = createContext(null);

const DashboardAsideWidth = (props) => {

    const [isShort, setIsShort] = useState(false);

    const handleDashboardAsideMenu = () => {
        setIsShort(!isShort);
    }

    return (
        <DashAsideContext.Provider value={{ isShort, handleDashboardAsideMenu }}>
            {props.children}
        </DashAsideContext.Provider>
    )
}

export default DashboardAsideWidth;