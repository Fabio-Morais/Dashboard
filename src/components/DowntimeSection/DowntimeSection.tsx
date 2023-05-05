import { Box, Card, Container, Flex, HStack, Text } from '@chakra-ui/react'

import { Metric } from '@/utils/interfaces/Metrics'

import PieChart from '@/components/PieChart'
import Section from '@/components/Section/Section'
import Timer from '@/components/Timer'

import usePieHook from '@/utils/hooks/usePieHook'

interface Props {
  data: Metric[]
}

const DowntimeSection = (props: Props) => {
  const { chartData } = usePieHook({ ...props, convertToMinutes: true })

  return (
    <Box>
      <Section>Down Time</Section>
      <Container maxW="98%" mt={8}>
        <HStack spacing={'45px'} style={{ display: 'flex' }} height="400px">
          <Card height="100%" flex="1 1 20%" variant={'elevated'} p={5} pl={10} pr={10}>
            <Flex flexDirection={'column'} gap={6} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              {props.data && props.data.map((metric) => <Timer data={metric} />)}
            </Flex>
          </Card>
          <Card height="100%" flex="1 1 40%" variant={'elevated'} p={4} style={{ minWidth: 0 }}>
            <Text fontSize="xl" textAlign={'center'} as={'b'}>
              Down Time Pie Chart
            </Text>
            <PieChart data={chartData} />
          </Card>
        </HStack>
      </Container>
    </Box>
  )
}

export default DowntimeSection
