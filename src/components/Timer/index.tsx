import { Card, Text, Tooltip, VStack } from '@chakra-ui/react'

import React from 'react'

import { Metric } from '@/utils/interfaces/Metrics'

import { convertToTimeObject } from '@/utils/convertions'

interface Props {
  data: Metric
}
const Timer = (props: Props) => {
  const convertTime = (time: number, type: string) => {
    const timeObject = convertToTimeObject(time, type)
    return '' + timeObject.hours + 'h:' + timeObject.minutes + 'm:' + timeObject.seconds + 's'
  }
  return (
    <Card variant="outline" p={3} boxShadow={'1px 1px 1px 1px rgba(9,135,160,0.1)'}>
      <VStack spacing={2} key={props.data.id}>
        <Tooltip label={props.data.description} aria-label="A tooltip" hasArrow placement="top">
          <Text fontSize="2xl">{props.data.label}: </Text>
        </Tooltip>

        <Text fontSize="4xl" as="b">
          {convertTime(props.data.value, props.data.type)}
        </Text>
      </VStack>
    </Card>
  )
}

export default Timer
