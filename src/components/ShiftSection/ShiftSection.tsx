import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'

import { Box, Card, Flex, HStack, Text } from '@chakra-ui/react'

import { Pie } from 'react-chartjs-2'

import { Metric } from '@/utils/interfaces/Metrics'

import Section from '@/components/Section/Section'

import { convertSecondsToTimeObject } from '@/utils/convertions'
import usePieHook from '@/utils/hooks/usePieHook'

interface Props {
  data: Metric[]
}
ChartJS.register(ArcElement, Tooltip, Legend)

const ShiftSection = (props: Props) => {
  const { chartData } = usePieHook(props)

  const convertTime = (time: number, type: string) => {
    if (type === 'hours') {
      return '' + time + 'h:00m:00s'
    }
    const timeObject = convertSecondsToTimeObject(time)
    return '' + timeObject.hours + 'h:' + timeObject.minutes + 'm:' + timeObject.seconds + 's'
  }
  return (
    <Box>
      <Section>Shift</Section>
      <HStack spacing={'45px'} style={{ display: 'flex' }} height="350px">
        <Card height="100%" variant={'elevated'} p={5} pl={10} pr={10}>
          <Text fontSize="xl" as={'b'} textAlign={'center'}>
            Time Spent
          </Text>
          <Flex flexDirection={'column'} gap={6} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            {props.data &&
              props.data.map((metric) => (
                <HStack spacing={5} key={metric.id}>
                  <Text fontSize="4xl">{metric.label}: </Text>
                  <Text fontSize="4xl" as="b">
                    {convertTime(metric.value, metric.type)}
                  </Text>
                </HStack>
              ))}
          </Flex>
        </Card>
        <Card height="100%" width="450px" variant={'elevated'} p={4}>
          <Text fontSize="xl" textAlign={'center'} as={'b'}>
            Time Spent Pie Chart
          </Text>
          <Pie data={chartData} style={{ margin: 'auto' }} />
        </Card>
      </HStack>
    </Box>
  )
}

export default ShiftSection
