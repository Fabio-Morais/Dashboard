import { Container } from '@chakra-ui/react'

import Sidebar from '@/components/SideBar/Sidebar'
import StatisticSection from '@/components/StatisticSection/StatisticSection'

export default function Home() {
  return (
    <>
      <Sidebar>
        <Container maxW="8xl" style={{ border: '1px solid red' }}>
          <StatisticSection />
        </Container>
      </Sidebar>
    </>
  )
}
