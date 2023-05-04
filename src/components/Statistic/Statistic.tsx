import { InfoIcon } from '@chakra-ui/icons'
import { Box, Card, Flex, Skeleton, Stat, StatLabel, StatNumber, Text, useColorModeValue } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'

import React from 'react'

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
    <Card p="15px" variant="elevated" width={'100%'} maxW="250px">
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
              <Text color="green.500" fontSize="xs" fontWeight="700" mr="5px">
                {growth}
              </Text>
              <Text color="secondaryGray.600" fontSize="xs" fontWeight="400">
                since last month
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Box style={{ position: 'absolute', top: 10, right: 10 }}>
          <Tooltip hasArrow label={props.description} bg="gray.300" color="black">
            <InfoIcon />
          </Tooltip>
        </Box>
      </Flex>
    </Card>
  )
}
