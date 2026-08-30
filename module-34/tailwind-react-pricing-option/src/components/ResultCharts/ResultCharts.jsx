import React from 'react';
import { Line, LineChart } from 'recharts';

const resultData = [
  {
    id: 1,
    student: "Rahim",
    math: 85,
    physics: 78,
    chemistry: 90
  },
  {
    id: 2,
    student: "Karim",
    math: 92,
    physics: 88,
    chemistry: 84
  },
  {
    id: 3,
    student: "Hasan",
    math: 76,
    physics: 95,
    chemistry: 82
  }
];

const ResultCharts = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <Line dataKey='math' stroke='blue'></Line>
                <Line dataKey='chemistry' stroke='red'></Line>
                <Line dataKey='physics' stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default ResultCharts;