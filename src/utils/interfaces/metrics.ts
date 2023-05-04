export interface Metric {
  id: string
  label: string
  value: string | number
  type: 'percentage' | 'number' | 'secs' | 'hours'
  description: string
  category: string
}

export interface Metrics {
  data: Metric[]
}
