import React from 'react';
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BarAndLineChart = () => {
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
            <h1>Bar and Line Chart</h1>

            <ResponsiveContainer width={"100%"} aspect={3}>
                <ComposedChart data={data} width={500} height={300} margin={{ top: 5, right: 80, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Bar dataKey="student" barSize={50} fill="#413ea0" />
                    <Line type="monotone" dataKey="fees" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>

        </div>
    );
};

export default BarAndLineChart;