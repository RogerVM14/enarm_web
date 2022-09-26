import React, { useState, useEffect, createContext } from 'react';

export const CountDownContext = createContext(null);

const CountDownProvider = (props) => {

    const [startCountdown, setStartCountDown] = useState(false);
    const [timerCountDown, setTimer] = useState(5400);
    const [countDown, setCountdown] = useState("");

    useEffect(() => {

        if(startCountdown === false) {
            setTimer(4500);
            setCountdown("");            
            return;
        }

        const formatedTime = () => {
            let hours = Math.floor(timerCountDown / 3600);
            let minutes = (Math.floor(timerCountDown % 3600) / 60);
            let seconds = (parseFloat("0." + ((Math.floor(timerCountDown % 3600) / 60) + "").split(".")[1]) * 60).toFixed(0);

            hours = (hours < 10) ? ('0' + hours) : hours;
            minutes = (minutes < 10) ? ('0' + minutes) : minutes;

            // console.log(`${hours}:${minutes.toString().split('.')[0]}:${seconds < 10 ? ('0' + seconds) : seconds}`)
            setCountdown(`${hours}:${minutes.toString().split('.')[0]}:${seconds < 10 ? ('0' + seconds) : seconds}`); 
        }

        formatedTime()

        const timer = timerCountDown > 0 && setInterval(() => setTimer(timerCountDown - 1), 1000);
        return () => clearInterval(timer);

    }, [timerCountDown, startCountdown]);



    return (
        <CountDownContext.Provider value={{ timerCountDown, countDown, startCountdown, setStartCountDown }}>
            {props.children}
        </CountDownContext.Provider>
    )
}

export default CountDownProvider;