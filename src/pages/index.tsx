import { Container } from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { Metric } from '@/utils/interfaces/metrics'

import EfficiencySection from '@/components/EfficiencySection/EfficiencySection'
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

  console.log(metrics['efficiency'])
  return (
    <>
      <Sidebar>
        <Container maxW="8xl" style={{ border: '1px solid red' }}>
          <StatusContext.Provider value={status}>
            <EfficiencySection data={metrics['efficiency']} />
          </StatusContext.Provider>
        </Container>
      </Sidebar>
    </>
  )
}
