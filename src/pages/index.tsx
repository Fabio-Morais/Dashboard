import { Container, Stack } from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { Metric } from '@/utils/interfaces/metrics'

import DowntimeSection from '@/components/DowntimeSection/DowntimeSection'
import EfficiencySection from '@/components/EfficiencySection/EfficiencySection'
import ShiftSection from '@/components/ShiftSection/ShiftSection'
import Sidebar from '@/components/SideBar/Sidebar'

import StatusContext from '@/utils/contexts/StatusContext'
import { fetchMetrics, metricsByCategory } from '@/utils/fetchAPI'

export default function Home() {
  const { data, status } = useQuery('metrics', fetchMetrics)

  const [metrics, setMetrics] = useState<{ [key: string]: Metric[] }>({})

  useEffect(() => {
    if (status == 'success') {
      const categories: { [key: string]: Metric[] } = metricsByCategory(data)
      setMetrics(categories)
    }
  }, [data])
  console.log(status + '-' + Object.keys(metrics).length)
  return (
    <>
      <Sidebar>
        <Container maxW="10xl" mt={5}>
          <StatusContext.Provider value={status}>
            <Stack direction={['column']} spacing={10}>
              <EfficiencySection data={metrics['efficiency']} />
              <ShiftSection data={metrics['shift']} />
              <DowntimeSection data={metrics['downtime']} />
            </Stack>
          </StatusContext.Provider>
        </Container>
      </Sidebar>
    </>
  )
}
