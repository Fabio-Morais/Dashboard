import { HStack, Icon, useColorModeValue } from '@chakra-ui/react'

import React from 'react'
import { MdBarChart } from 'react-icons/md'

import IconBox from '@/components/IconBox/IconBox'
import Section from '@/components/Section/Section'
import Statistic from '@/components/Statistic/Statistic'

const StatisticSection = () => {
  const brandColor = useColorModeValue('brand.500', 'white')

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

export default StatisticSection
