import { render } from '@testing-library/react'

import { Metric } from '@/utils/interfaces/Metrics'

import Index from '@/components/EfficiencySection'

const mockData: Metric[] = [
  {
    id: '1',
    label: 'Metric 1',
    value: 100,
    type: 'number',
    description: 'Description 1',
    category: 'efficiency',
  },
  {
    id: '2',
    label: 'Metric 2',
    value: 200,
    type: 'number',
    description: 'Description 2',
    category: 'efficiency',
  },
]

test('renders efficiency section with statistics', () => {
  const { getByText } = render(<Index data={mockData} />)

  // Check if the section header is rendered
  const sectionHeader = getByText('Efficiency')
  expect(sectionHeader).toBeInTheDocument()

  // Check if each statistic is rendered
  mockData.forEach((metric) => {
    const metricLabel = getByText(metric.label)
    const metricValue = getByText(metric.value.toString())

    expect(metricLabel).toBeInTheDocument()
    expect(metricValue).toBeInTheDocument()
  })
})
