import { Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

import React from 'react'
import { MdBarChart } from 'react-icons/md'

import IconBox from '@/components/IconBox/IconBox'
import Statistic from '@/components/Statistic/Statistic'

const StatisticSection = () => {
  const brandColor = useColorModeValue('brand.500', 'white')

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }} gap="20px" mb="20px">
      <Statistic
        startContent={<IconBox icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />} />}
        name="Earnings"
        value="350.4"
      />
    </SimpleGrid>
  )
}

export default StatisticSection
