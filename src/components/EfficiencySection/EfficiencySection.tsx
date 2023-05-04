import { HStack, Icon, useColorModeValue } from '@chakra-ui/react'

import React, { useContext } from 'react'
import { MdBarChart } from 'react-icons/md'

import { Metric, Metrics } from '@/utils/interfaces/metrics'

import IconBox from '@/components/IconBox/IconBox'
import Section from '@/components/Section/Section'
import Statistic from '@/components/Statistic/Statistic'

import StatusContext from '@/utils/contexts/StatusContext'

interface Props {
  data: Metric[]
}

const EfficiencySection = (props: Props) => {
  const brandColor = useColorModeValue('brand.500', 'white')

  const status = useContext(StatusContext)

  return (
    <>
      <Section>M</Section>
      <HStack spacing="24px">
        <Statistic
          startContent={<IconBox icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />} />}
          name="Earnings"
          value="350.4"
        />
        <Statistic
          startContent={<IconBox icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />} />}
          name="Earnings"
          value="350.4"
        />
      </HStack>{' '}
    </>
  )
}

export default EfficiencySection
