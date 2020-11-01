import React from 'react'
import { Line } from 'react-chartjs-2'
import classes from './PlayerChart.module.css'

const LineChart = (props) => {
  const playerScores = props.scores.map((scoreObject) => {
    const seconds = new Date(scoreObject.score)

    return seconds / 1000
  })

  const labels = playerScores.map((score, id) => id + 1)

  const data = {
    labels,
    datasets: [
      {
        label: '# your scores',
        data: playerScores,
        fill: false,
        backgroundColor: '#C4E538',
        borderColor: '#A3CB38',
      }
    ]
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

  return < div className={classes.chart} >
    <Line data={data} options={options} />
  </div >
}

export default LineChart