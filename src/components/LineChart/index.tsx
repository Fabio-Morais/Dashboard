import React from 'react'

const LineChart = () => {
  const data = [2, 3, 5, 2, 3] // Example data points
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
      <path d={pathData} fill="none" stroke="#2196f3" strokeWidth="2" />
    </svg>
  )
}

export default LineChart
