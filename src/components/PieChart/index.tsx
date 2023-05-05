import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'

import { Box } from '@chakra-ui/react'

import React from 'react'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface Props {
  data: any
}
const PieChart = (props: Props) => {
  return (
    <Box gap={20} justifyContent={'center'} mt={4}>
      <Pie data={props.data} style={{ margin: 'auto' }} />
    </Box>
  )
}

export default PieChart
