import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BarCharts = () => {
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
            <h1>Bar Chart</h1>
            <ResponsiveContainer width={"100%"} aspect={3}>
                <BarChart data={data} width={500} height={300} margin={{ top: 5, right: 80, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray={"3 3"} />
                    <XAxis dataKey={"name"} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={"student"} fill="#8884d8" />
                    <Bar dataKey={"fees"} fill="#82ca9d" />
                </BarChart>

            </ResponsiveContainer>
        </div>
    );
};

export default BarCharts;