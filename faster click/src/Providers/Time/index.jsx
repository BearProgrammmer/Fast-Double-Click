import React, { createContext, useState } from "react";

export const TimeContext = createContext([]);

export const TimeProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);
  const [registers, setRegisters] = useState([]);

  const handleStart = () => {
    setIsActive(isActive);
  };

  const handleReset = () => {
    setIsActive(false);

    setRegisters([...registers, { hour, minutes, seconds }]);

    setSeconds(0);
    setMinutes(0);
    setHour(0);
  };

  React.useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds < 59) {
          setSeconds(seconds + 1);
        } else {
          setSeconds(0);
          setMinutes(minutes + 1);
        }
        if (minutes === 59) {
          setMinutes(0);
          setHour(hour + 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, hour, setSeconds, setMinutes, setHour]);

  return (
    <TimeContext.Provider
      value={{
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        hour,
        setHour,
        isActive,
        registers,
        setRegisters,
        setIsActive,
        handleStart,
        handleReset,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};
