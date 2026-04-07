import React from 'react';

const Results = ({ score, total }) => {
    const percentage = ((score / total) * 100).toFixed(2);

    return (
        <div>
            <h1>Final Score: {score}</h1>
            <h2>Percentage: {percentage}%</h2>
        </div>
    );
};

export default Results;