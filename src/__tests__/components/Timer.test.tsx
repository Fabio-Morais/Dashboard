import { queryByText, render, screen } from '@testing-library/react'

import { Metric } from '@/utils/interfaces/Metrics'

import Timer from '@/components/Timer'

const mockMetric: Metric = {
  id: '1',
  label: 'Timer Label',
  value: 3600,
  type: 'secs',
  description: 'Timer Description',
  category: 'efficiency',
}

test('renders timer label and converted time', () => {
  const { getByText } = render(<Timer data={mockMetric} />)

  // Check if the timer label is rendered
  const labelElement = getByText(/Timer Label:/i)
  expect(labelElement).toBeInTheDocument()

  // Check if the converted time is rendered
  const timeElement = getByText(/1h:0m:0s/i)
  expect(timeElement).toBeInTheDocument()
})
