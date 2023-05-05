import { Box, Card, Flex, HStack, Icon, Text, useColorModeValue } from '@chakra-ui/react'

import React, { useContext } from 'react'
import { Pie } from 'react-chartjs-2'
import { MdBarChart } from 'react-icons/md'

import { Metric, Metrics } from '@/utils/interfaces/Metrics'

import IconBox from '@/components/IconBox/IconBox'
import Section from '@/components/Section/Section'
import Statistic from '@/components/Statistic/Statistic'

import { convertSecondsToTimeObject } from '@/utils/convertions'
import usePieHook from '@/utils/hooks/usePieHook'

interface Props {
  data: Metric[]
}

const DowntimeSection = (props: Props) => {
  const { chartData } = usePieHook({ ...props, convertToMinutes: true })

  const convertTime = (time: number, type: string) => {
    if (type === 'hours') {
      return '' + time + 'h:00m:00s'
    }
    const timeObject = convertSecondsToTimeObject(time)
    return '' + timeObject.minutes + 'm:' + timeObject.seconds + 's'
  }
  return (
    <Box>
      <Section>Down Time</Section>
      <HStack spacing={'45px'} style={{ display: 'flex' }} height="350px">
        <Card height="100%" variant={'elevated'} p={5} pl={10} pr={10}>
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
          <Pie data={chartData} style={{ margin: 'auto' }} />
        </Card>
      </HStack>
    </Box>
  )
}

export default DowntimeSection
