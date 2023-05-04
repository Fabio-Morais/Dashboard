import { useEffect, useState } from 'react'

import { Metric } from '@/utils/interfaces/Metrics'

interface Props {
  data: Metric[]
}
const useShiftHook = (props: Props) => {
  const emptyData = {
    datasets: [
      {
        data: [] as number[],
        backgroundColor: [] as string[],
        borderColor: [] as string[],
        label: '',
        borderWidth: 1,
      },
    ],
    labels: [] as string[],
  }
  const [chartData, setChartData] = useState(emptyData)

  useEffect(() => {
    if (props.data) {
      const dataLabels: string[] = []
      const dataValues: number[] = []
      props.data.forEach((item) => {
        if (item.type == 'secs') {
          dataValues.push(item.value / 3600)
          dataLabels.push(item.label)
        } else {
          dataValues.push(item.value - dataValues[0])
          dataLabels.push('Doing other things')
        }
      })
      setChartData({
        labels: dataLabels,
        datasets: [
          {
            label: 'Hours',
            data: dataValues,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
          },
        ],
      })
    }
  }, [props.data])
  return { chartData } as const
}
export default useShiftHook
