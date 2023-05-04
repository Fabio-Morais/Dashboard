import { Box, Flex, Icon, useColorModeValue } from '@chakra-ui/react'

import { MdBarChart } from 'react-icons/md'

import { Metric } from '@/utils/interfaces/Metrics'

import IconBox from '@/components/IconBox/IconBox'
import Section from '@/components/Section/Section'
import Statistic from '@/components/Statistic/Statistic'
import StatisticSkeleton from '@/components/StatisticSkeleton/StatisticSkeleton'

interface Props {
  data: Metric[]
}

const EfficiencySection = (props: Props) => {
  const brandColor = useColorModeValue('brand.500', 'white')

  return (
    <Box>
      <Section>Efficiency</Section>
      <Flex gap="36px" flexWrap={'wrap'} style={{ display: 'flex' }}>
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
      </Flex>
    </Box>
  )
}

export default EfficiencySection
