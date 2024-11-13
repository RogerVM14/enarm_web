import React, { useState, useEffect } from "react";
import Clock from "../icons/Clock";

const CountdownTimer = ({ initialTime, isCooldownZero }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  const parseTime = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  useEffect(() => {
    if (initialTime === undefined || initialTime === null) return;
    setTimeLeft(parseTime(initialTime));
  }, [initialTime]);

  useEffect(() => {
    if (timeLeft === 0) {
      isCooldownZero(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, isCooldownZero]);

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-row justify-between">
      <p className="poppins-regular-14 ">Tiempo restante:</p>
      <p className="poppins-regular-14 border-solid border-[1px] border-[#d9d9d9] px-2 flex flex-row items-center gap-x-2 text-[#000000D9]">
        {timeLeft > 0 ? formatTime(timeLeft) : "00:00:00"}
        <Clock />
      </p>
    </div>
  );
};

export default CountdownTimer;
