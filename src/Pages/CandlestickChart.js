import { createChart } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';


const CandlestickCharts = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = createChart(chartRef.current, {
            width: 800,
            height: 300,
        });

        const candlestickSeries = chart.addCandlestickSeries({
            upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
            wickUpColor: '#26a69a', wickDownColor: '#ef5350',
        });


        const data = [
            { time: '2022-01-01', open: 10, high: 20, low: 5, close: 15 },
            { time: '2022-01-02', open: 15, high: 25, low: 10, close: 20 },
            { time: '2022-01-03', open: 20, high: 30, low: 15, close: 25 },
            { time: '2022-01-04', open: 25, high: 35, low: 20, close: 30 },
            { time: '2022-01-05', open: 30, high: 40, low: 25, close: 35 },
        ];

        candlestickSeries.setData(data);
    }, []);
    return <div ref={chartRef} />;
};

export default CandlestickCharts;