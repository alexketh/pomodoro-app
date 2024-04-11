import React, { useState } from 'react';

const TimerSettings = ({ setTime }) => {
    const [inputMinutes, setInputMinutes] = useState('');
    const [inputSeconds, setInputSeconds] = useState('');

    const handleSetTime = () => {
        const minutes = parseInt(inputMinutes);
        const seconds = parseInt(inputSeconds);

        if (!isNaN(minutes) && !isNaN(seconds)) {
            setTime(minutes, seconds);
            setInputMinutes('');
            setInputSeconds('');
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-2">
                <input
                    type="number"
                    placeholder="Min"
                    value={inputMinutes}
                    onChange={(e) => setInputMinutes(e.target.value)}
                    className="px-4 py-2 w-20 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                />
                <span className="text-gray-600">:</span>
                <input
                    type="number"
                    placeholder="Sec"
                    value={inputSeconds}
                    onChange={(e) => setInputSeconds(e.target.value)}
                    className="px-4 py-2 w-20 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
                />
                <button
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                    onClick={handleSetTime}
                >
                    Set Timer
                </button>
            </div>
            <div className="flex space-x-2">
                <button className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300" onClick={() => setTime(25, 0)}> Pomodoro </button>
                <button className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300" onClick={() => setTime(5, 0)}> Short Break </button>
                <button className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition duration-300" onClick={() => setTime(15, 0)}> Long Break </button>
            </div>
        </div>
    );
};

export default TimerSettings;
