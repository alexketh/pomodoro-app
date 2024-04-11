import React from "react";

const HistoryPanel = ({ history }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-2">History</h2>
            <ul className="list-disc pl-5">
                {history.map((item, index) => (
                    <li key={index} className="text-sm">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HistoryPanel;