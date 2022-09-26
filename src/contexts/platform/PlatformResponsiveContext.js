import React, { createContext, useEffect, useState } from 'react';

export const PlatformResponsiveContext = createContext(null);

const PlatformResponsiveProvider = (props) => {

    const getScreenDimension = () => {

        let x = window.innerWidth;
        if (x < 576) return 'xs';
        if (x >= 576 && x <= 767) return 'sm';
        if (x >= 768 && x <= 991) return 'md';
        if (x >= 992 && x <= 1199) return 'lg';
        if (x >= 1200 && x <= 1399) return 'xl';
        if (x >= 1400) return 'xxl';
    }

    const getDeviceDimension = () => {
        let x = window.innerWidth;

        if (x <= 767) return "smart";
        if (x >= 768 && x <= 991) return "tab";
        if (x >= 992) return 'desk';
    }

    const [breakpoint, setBreakpoint] = useState(getScreenDimension);
    const [device, setDevice] = useState(getDeviceDimension);
    const [isSmart, setIsSmart] = useState((() => {
        return device === "smart";
    })());

    useEffect(() => {

        window.addEventListener('resize', () => {
            const axis_x = getScreenDimension();
            setBreakpoint(axis_x)
        });  
    }, []);

    useEffect(() => {

        window.addEventListener('resize', () => {
            const device_x = getDeviceDimension();
            setDevice(device_x)
        });
    }, []);

    useEffect(()=> {
        const isSmartDevice = () => {
            return device === "smart";
        }

        setIsSmart(isSmartDevice)
    }, [device]);


    return (
        <PlatformResponsiveContext.Provider value={{ breakpoint, device, isSmart }}>
            {props.children}
        </PlatformResponsiveContext.Provider>
    )
}

export default PlatformResponsiveProvider;