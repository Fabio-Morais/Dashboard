import { Metric, Metrics } from '@/utils/interfaces/metrics'

export const fetchMetrics = async () => {
  try {
    // Perform the API request to fetch the metrics data
    const response = await fetch('/api/metrics')
    return await response.json()
  } catch (error) {
    throw new Error('Failed to fetch metrics')
  }
}

export const metricsByCategory = (data: Metrics) => {
  const categories: { [key: string]: Metric[] } = {}

  data.data.forEach((item: Metric) => {
    const { category, id, label, value, type, description } = item
    if (!categories[category]) {
      categories[category] = []
    }
    categories[category].push({ id, label, value, type, description, category })
  })

  return categories
}
