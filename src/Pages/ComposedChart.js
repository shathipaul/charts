import React from 'react';
import { Bar, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ComposedCharts = () => {
    const data = [
        {
            name: 'JavaScript',
            student: 15,
            fees: 240,
        },
        {
            name: 'Python',
            student: 200,
            fees: 125,
        },
        {
            name: 'C++',
            student: 13,
            fees: 26,
        },
        {
            name: 'PHP',
            student: 160,
            fees: 23,
        },
        {
            name: 'Java',
            student: 25,
            fees: 22,
        },
        {
            name: 'Go',
            student: 160,
            fees: 27,
        },
        {
            name: 'Swift',
            student: 27,
            fees: 28,
        },
    ];
    return (
        <div>
            <h1>Composed Chart</h1>
            <ResponsiveContainer width={"100%"} aspect={3}>

                <ComposedChart layout={"vertical"}
                    data={data} width={500} height={300} margin={{ top: 5, right: 80, left: 80, bottom: 5 }} >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type='number' />
                    <YAxis type='category' dataKey={"name"} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={"student"} barSize={20} fill="#413ea0" layout={"vertical"} />
                    <Bar dataKey={"fees"} barSize={20} fill="#413ea0" layout={"vertical"} />
                </ComposedChart>
            </ResponsiveContainer>

        </div>
    );
};

export default ComposedCharts;