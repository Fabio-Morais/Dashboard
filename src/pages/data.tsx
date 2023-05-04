import { Card, Container, Heading, Text } from '@chakra-ui/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react'
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { Metric } from '@/utils/interfaces/Metrics'

import Sidebar from '@/components/SideBar/Sidebar'

import { fetchMetrics, metricsByCategory } from '@/utils/fetchAPI'

export default function Home() {
  const { data, status } = useQuery('metrics', fetchMetrics)
  return (
    <>
      <Sidebar>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Pages</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/data">Data</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading size="xl">Data</Heading>

        <Container maxW="10xl" mt={10}>
          {status == 'success' && (
            <Card p="15px" variant="elevated">
              <Text mb={5} textAlign={'center'} fontSize="xl">
                All data available
              </Text>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      {Object.keys(data.data[0]).map((key: string) => (
                        <Th>{key}</Th>
                      ))}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.data.map((metric: Metric) => (
                      <Tr>
                        {Object.keys(metric).map((key: string) => (
                          <Td>{(metric as any)[key]}</Td>
                        ))}
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Card>
          )}
        </Container>
      </Sidebar>
    </>
  )
}
