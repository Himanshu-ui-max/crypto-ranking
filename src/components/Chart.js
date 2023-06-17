import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
    const HistoryChart = () => {
        const {coinId} = useParams ();
        const [chart, setChart] = useState({});
        const chartData = async () => {
            let url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`;
            let data = await fetch(url);
            let parsedata = await data.json();
            setChart(parsedata);
            console.log(parsedata);
          }
          console.log(chart);
          useEffect(() => {
            chartData();
            // eslint-disable-next-line
          }, []);

        const coinChartData = chart.prices?.map(value => ({ x: value[0],
          y: value[1].toFixed(2) }));
          console.log(coinChartData);
           const options = {
            responsive: true
            }
            const data = {
            labels: ['1', '20','2'],
            datasets: [
            {
                fill:true,
                label: coinId,
                data: ['10', '2', '90'],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
            }
  return (
    <div>
      <Line options={options} data={data} />
    </div>
   
  )
}

export default HistoryChart
