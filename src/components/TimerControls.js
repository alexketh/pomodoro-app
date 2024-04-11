import React from "react";

const TimerControls = ({ toggle, reset, isActive }) => {
    return (
        <div className="flex justify-center space-x-4">
            <button 
                className={`px-5 py-3 rounded-full text-white ${isActive ? 'bg-red-500' : 'bg-green-500'}`}
                onClick={toggle}
            >
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-500 text-white" onClick={reset}>
                Reset
            </button>
        </div>
    );
};

export default TimerControls;