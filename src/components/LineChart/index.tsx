import React from 'react'

interface Props {
  index: number
}
const LineChart = (props: Props) => {
  const randomData = [
    [1, 3, 4, 2, 5],
    [5, 3, 4, 3, 1],
    [1, 2, 2, 2, 3],
  ]
  const data = randomData[props.index] // Example data points

  const width = 150
  const height = 50

  const maxYValue = Math.max(...data)
  const dataPoints = data.map((value, index) => ({
    x: (width / (data.length - 1)) * index,
    y: height - (value / maxYValue) * height,
  }))

  const pathData = `M ${dataPoints.map((point) => `${point.x},${point.y}`).join(' L ')}`

  return (
    <svg width={width} height={height}>
      <path d={pathData} fill="none" stroke={props.index == 1 ? '#E43500' : '#00E44C'} strokeWidth="2" />
    </svg>
  )
}

export default LineChart
