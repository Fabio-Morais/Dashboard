import { Metric, Metrics } from '@/utils/interfaces/metrics'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export const fetchMetrics = async () => {
  try {
    // Perform the API request to fetch the metrics data
    const response = await fetch('/api/metrics')
    await delay(2000)

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
