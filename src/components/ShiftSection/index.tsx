import { Box, Card, Flex, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

import { Metric } from '@/utils/interfaces/Metrics'

import PieChart from '@/components/PieChart'
import Section from '@/components/Section'
import Timer from '@/components/Timer'

import usePieHook from '@/utils/hooks/usePieHook'

interface Props {
  data: Metric[]
}

const ShiftSection = (props: Props) => {
  const { chartData } = usePieHook(props)

  return (
    <Box data-testid="shift-section">
      <Section>Shift</Section>
      <Container maxW="98%" mt={8}>
        <Flex gap="36px" height="400px" flexWrap={'wrap'} style={{ display: 'flex' }} justifyContent={'space-between'}>
          <Card height="100%" flex="1 1 20%" variant={'elevated'} p={5} pl={10} pr={10}>
            <Text fontSize="2xl" as={'b'} textAlign={'center'}>
              Time Spent
            </Text>
            <Flex flexDirection={'column'} gap={8} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              {props.data && props.data.map((metric) => <Timer data={metric} key={metric.id} />)}
            </Flex>
          </Card>

          <Card height="100%" flex="1 1 40%" variant={'elevated'} p={4} style={{ minWidth: 0 }}>
            <Text fontSize="2xl" textAlign={'center'} as={'b'}>
              Time Spent Pie Chart
            </Text>
            <PieChart data={chartData} />
          </Card>
        </Flex>
      </Container>
    </Box>
  )
}

export default ShiftSection
