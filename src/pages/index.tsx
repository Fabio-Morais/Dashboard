import Head from 'next/head'

import { Container, Heading, Stack } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { Metric } from '@/utils/interfaces/Metrics'

import DowntimeSection from '@/components/DowntimeSection/DowntimeSection'
import EfficiencySection from '@/components/EfficiencySection/EfficiencySection'
import Header from '@/components/Header'
import LoadingScreen from '@/components/LoadingScreen'
import ShiftSection from '@/components/ShiftSection/ShiftSection'
import Sidebar from '@/components/SideBar/Sidebar'

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
  return (
    <>
      <Head>
        <title>Factory Pal - Home</title>
      </Head>
      <Sidebar>
        <Header path={'/'}>Home</Header>
        {status == 'success' ? (
          <Container maxW="10xl" mt={10} mb={20}>
            <Stack direction={['column']} spacing={10}>
              <EfficiencySection data={metrics['efficiency']} />
              <ShiftSection data={metrics['shift']} />
              <DowntimeSection data={metrics['downtime']} />
            </Stack>
          </Container>
        ) : (
          <LoadingScreen />
        )}
      </Sidebar>
    </>
  )
}
