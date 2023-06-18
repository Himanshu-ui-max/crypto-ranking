import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import moment from 'moment';
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
          y: value[1].toFixed(2)}));
          console.log(coinChartData);
           const options = {
            responsive: true
            }
            const data = {
              labels: coinChartData?.map(value => moment(value.x).format('MMM DD')),
            datasets: [
            {
                fill:true,
                label: coinId,
                data: coinChartData?.map(val=>val.y),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
            }
  return (
    <>
         <div className="buttons">
          <input type="checkbox" className="btn-check mx-2" id="btn-check-outlined" autocomplete="off"/>
          <label className="btn btn-outline-primary" for="btn-check-outlined">1 D</label>
          <input type="checkbox" className="btn-check mx-2" id="btn-check-2-outlined" checked autocomplete="off"/>
          <label className="btn btn-outline-secondary" for="btn-check-2-outlined">1 W</label>
          <input type="radio" className="btn-check mx-2" name="options-outlined" id="success-outlined" autocomplete="off" checked/>
          <label className="btn btn-outline-success" for="success-outlined">1 M</label>

          <input type="radio" className="btn-check mx-2" name="options-outlined" id="danger-outlined" autocomplete="off"/>
          <label className="btn btn-outline-danger" for="danger-outlined">1 Y</label>
          </div>
    <div>
      <Line options={options} data={data} />
    </div>
    </>
  )
}

export default HistoryChart
