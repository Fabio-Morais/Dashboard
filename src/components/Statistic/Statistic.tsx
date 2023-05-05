import { InfoIcon } from '@chakra-ui/icons'
import {
  Box,
  Card,
  Flex,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'

import React from 'react'

import LineChart from '@/components/LineChart'

export default function IconBox(props: {
  startContent?: JSX.Element
  name: string
  growth?: string | number
  value: string | number
  description?: string
  isLoaded?: boolean
  index: number
}) {
  const { startContent, name, growth, value, isLoaded = true } = props
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'secondaryGray.600'
  const randomNumber = ['23.24%', '-5.21%', '10.70%']
  return (
    <Card p="15px" variant="elevated" width={'100%'} maxW="400px">
      <Flex my="auto" h="100%" align={{ base: 'center', xl: 'center' }} justify={{ base: 'center', xl: 'center' }}>
        {startContent}

        <Stat my="auto" ml={startContent ? '18px' : '0px'}>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: 'sm',
            }}
          >
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={{
              base: '2xl',
            }}
          >
            {value}
          </StatNumber>
          {growth ? (
            <Flex align="center">
              <StatHelpText mr="5px">
                <StatArrow type={randomNumber[props.index][0] == '-' ? 'decrease' : 'increase'} />
                {randomNumber[props.index]}
              </StatHelpText>
            </Flex>
          ) : null}
        </Stat>
        <Box pr={5}>
          <LineChart index={props.index} />
        </Box>
        <Box style={{ position: 'absolute', top: 10, right: 10 }}>
          <Tooltip hasArrow label={props.description} bg="gray.300" color="black">
            <InfoIcon />
          </Tooltip>
        </Box>
      </Flex>
    </Card>
  )
}
