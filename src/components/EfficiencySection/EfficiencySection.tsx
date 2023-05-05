import { Box, Card, Flex, HStack, Icon, useColorModeValue } from '@chakra-ui/react'

import { Radar } from 'react-chartjs-2'
import { MdBarChart } from 'react-icons/md'

import { Metric } from '@/utils/interfaces/Metrics'

import IconBox from '@/components/IconBox/IconBox'
import Section from '@/components/Section/Section'
import Statistic from '@/components/Statistic/Statistic'

interface Props {
  data: Metric[]
}

const EfficiencySection = (props: Props) => {
  const brandColor = useColorModeValue('brand.500', 'white')

  return (
    <Box>
      <Section>Efficiency</Section>

      <Flex gap="36px" flexWrap={'wrap'} style={{ display: 'flex' }} justifyContent={'space-around'}>
        {props.data &&
          //Already loaded
          props.data.map((metric: Metric) => (
            <Statistic
              startContent={<IconBox icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />} />}
              name={metric.label}
              value={metric.value}
              description={metric.description}
              key={metric.id}
              growth={'+23'}
            />
          ))}
      </Flex>
    </Box>
  )
}

export default EfficiencySection
