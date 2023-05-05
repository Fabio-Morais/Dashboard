import { InfoIcon } from '@chakra-ui/icons'
import {
  Box,
  Card,
  Flex,
  Skeleton,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
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
}) {
  const { startContent, name, growth, value, isLoaded = true } = props
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'secondaryGray.600'

  return (
    <Card p="15px" variant="elevated" width={'100%'} maxW="380px">
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
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Flex>
          ) : null}
        </Stat>
        <Box>
          <LineChart />
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
