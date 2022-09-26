import React, { useState, createContext, useEffect } from 'react';

export const PlanRoutesContext = createContext(null);

const PlanRoutesProvider = (props) => {

    const [routeString, setRouteString] = useState("");

    useEffect(()=> {
        console.log(routeString)
    },[routeString])

    return (
        <PlanRoutesContext.Provider value={{routeString, setRouteString}}>
            {props.children}
        </PlanRoutesContext.Provider>
    )
}

export default PlanRoutesProvider;