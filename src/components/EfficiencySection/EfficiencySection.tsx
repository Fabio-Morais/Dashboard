import { Box, Flex, Icon, useColorModeValue } from '@chakra-ui/react'

import React, { useContext } from 'react'
import { MdBarChart } from 'react-icons/md'

import { Metric, Metrics } from '@/utils/interfaces/metrics'

import IconBox from '@/components/IconBox/IconBox'
import Section from '@/components/Section/Section'
import Statistic from '@/components/Statistic/Statistic'
import StatisticSkeleton from '@/components/StatisticSkeleton/StatisticSkeleton'

import StatusContext from '@/utils/contexts/StatusContext'

interface Props {
  data: Metric[]
}

const EfficiencySection = (props: Props) => {
  const brandColor = useColorModeValue('brand.500', 'white')

  const status = useContext(StatusContext)

  return (
    <Box>
      <Section>Efficiency</Section>
      <Flex gap="36px" flexWrap={'wrap'}>
        {props.data ? (
          //Already loaded
          props.data.map((metric: Metric) => (
            <Statistic
              startContent={<IconBox icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />} />}
              name={metric.label}
              value={metric.value}
              description={metric.description}
              key={metric.id}
            />
          ))
        ) : (
          //Is loading
          <StatisticSkeleton numberOfSkeletons={3} />
        )}
      </Flex>{' '}
    </Box>
  )
}

export default EfficiencySection
