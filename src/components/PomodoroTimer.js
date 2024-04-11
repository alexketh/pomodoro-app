import React, {useState, useEffect } from 'react';
import TimerControls from './TimerControls';
import TimerSettings from './TimerSettings';
import HistoryPanel from './HistoryPanel';

const PomodoroTimer = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [history, setHistory] = useState([
        'Completed at 09:30:15',
        'Completed at 10:05:37',
    ]);

    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                if (seconds === 0 ) {
                    if (minutes === 0) {
                        clearInterval(intervalId); 
                        setIsActive(false);
                        setHistory(prevHistory => [...prevHistory, 'Complete at ${new Date().toLocalTimeStamp'])
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds -1);
                }
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isActive, seconds, minutes, history]);

    const toggle = () => {
        setIsActive(!isActive);
    }

    const reset = () => {
        setIsActive(false);
        setMinutes(25);
        setSeconds(0);
    }
    
    const setTime = (newTime) => {
        reset();
        setMinutes(newTime);
    };

    return (
        <div className="p-5 md:p-10 space-y-5 md:space-y-10 bg-gray-100 rounded-lg w-full md:w-1/3 mx-auto mt-5 md:mt-10 shadow-lg">
            <div className="text-3xl md:text-7xl font-semibold text-center">
                {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2,'0')}`} 
            </div>
            <TimerControls toggle={toggle} reset={reset} isActive={isActive} />
            <TimerSettings setTime={setTime} />
            <HistoryPanel history={history} />
        </div>
    );
};

export default PomodoroTimer;