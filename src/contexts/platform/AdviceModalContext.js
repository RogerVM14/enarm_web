import React, { createContext, useState } from 'react';

export const AdviceModalContext = createContext(null);

const AdviceModalProvider = (props) => {

    const [isAdviceModalActive, setAdviceModal] = useState(false);

    return (
        <AdviceModalContext.Provider value={{isAdviceModalActive, setAdviceModal}}>
            {props.children}
        </AdviceModalContext.Provider>
    )
}

export default AdviceModalProvider;