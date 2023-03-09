import React from 'react';
import { CartesianGrid, LineChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const data = [
        {
            name: 'JavaScript',
            student: 150,
            fees: 240,
        },
        {
            name: 'Python',
            student: 200,
            fees: 250,
        },
        {
            name: 'C++',
            student: 138,
            fees: 260,
        },
        {
            name: 'PHP',
            student: 167,
            fees: 230,
        },
        {
            name: 'Java',
            student: 255,
            fees: 220,
        },
        {
            name: 'Go',
            student: 160,
            fees: 270,
        },
        {
            name: 'Swift',
            student: 270,
            fees: 280,
        },
    ];
    return (
        <div>
            <h1>Line Chart</h1>
            <ResponsiveContainer width={"100%"} aspect={3}>
                <LineChart data={data} width={500} height={300} margin={{ top: 5, right: 80, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray={"3 3"} />
                    <XAxis dataKey={"name"} interval={"preserveStartEnd"} tickFormatter={(value) => value + " Program"} />
                    <YAxis />
                    <Tooltip itemStyle={{ color: "green" }} contentStyle={{ backgroundColor: "yellow" }} />
                    <Legend />
                    <Line type={"monotone"} dataKey={"student"} stroke={"red"} activeDot={{ r: 5 }} />
                    <Line type={"monotone"} dataKey={"fees"} stroke={"blue"} activeDot={{ r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineCharts;