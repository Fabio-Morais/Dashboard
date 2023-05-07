import { Box, Container, Flex, Icon, useColorModeValue } from '@chakra-ui/react'

import { GiFactory } from 'react-icons/gi'
import { IoMdSpeedometer } from 'react-icons/io'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'

import { Metric } from '@/utils/interfaces/Metrics'

import IconBox from '@/components/IconBox'
import Section from '@/components/Section'
import Statistic from '@/components/Statistic'

interface Props {
  data: Metric[]
}

const EfficiencySection = (props: Props) => {
  const brandColor = useColorModeValue('brand.500', 'white')
  const icons = [GiFactory, IoMdSpeedometer, MdKeyboardDoubleArrowDown]
  return (
    <Box data-testid="efficiency-section">
      <Section>Efficiency</Section>
      <Container maxW="98%" mt={8}>
        <Flex gap="36px" flexWrap={'wrap'} style={{ display: 'flex' }} justifyContent={'space-between'}>
          {props.data &&
            //Already loaded
            props.data.map((metric: Metric, index: number) => (
              <Statistic
                startContent={<IconBox icon={<Icon w="42px" h="42px" as={icons[index]} color={brandColor} />} />}
                name={metric.label}
                value={metric.value}
                description={metric.description}
                key={metric.id}
                growth={'+23'}
                index={index}
              />
            ))}
        </Flex>
      </Container>
    </Box>
  )
}

export default EfficiencySection
