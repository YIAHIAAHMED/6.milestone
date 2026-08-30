import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data; 
    // console.log(marksData);

    // data processing for chart
     const marksCahrtData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            student: studentData.student,
            physics: studentData.physics, 
            chemistry: studentData.chemistry 
        }
        const avg = (student.physics + student.chemistry)/ 2;
        student.avg = avg;

        return student;
     })
     console.log(marksCahrtData);
    return (
        <div>
            <BarChart width={500} height={300} data={marksCahrtData}>
                <XAxis dataKey='student' > </XAxis>
                <YAxis></YAxis>
                <Bar dataKey='avg' fill='red' ></Bar>
                <Bar dataKey='chemistry' fill='blue' ></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;