import React from 'react'
import { Line } from 'react-chartjs-2'
import classes from './PlayerChart.module.css'

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# your scores',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: '#C4E538',
      borderColor: '#A3CB38',
    },
    {
        label: '# top player scores scores',
        data: [5, 10, 15],
        fill: false,
        backgroundColor: '#12CBC4',
        borderColor: '#1289A7',
      },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const LineChart = () => (
  <div className={classes.chart}>
    <Line data={data} options={options} />
  </div>
)

export default LineChart