import { Metric, Metrics } from '@/utils/interfaces/Metrics'

import { fetchMetrics } from '@/utils/fetchAPI'
import { metricsByCategory } from '@/utils/fetchAPI'

// Define a custom mock function for fetch
const mockFetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({ data: 'mocked data' }),
  headers: new Headers(),
  ok: true,
  redirected: false,
  status: 200,
  statusText: 'OK',
  type: 'basic',
  url: '/api/metrics',
} as Response)

// Assign the mock function to global.fetch
global.fetch = mockFetch

describe('fetchMetrics', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch metrics successfully', async () => {
    // Call the function
    const result = await fetchMetrics()

    // Assertions
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith('/api/metrics')

    expect(result).toEqual({ data: 'mocked data' })
  })

  it('should throw an error if the fetch fails', async () => {
    // Mocking a rejected Promise to simulate a failed fetch
    mockFetch.mockRejectedValueOnce(new Error('Network error'))

    // Assertions
    await expect(fetchMetrics()).rejects.toThrow('Failed to fetch metrics')
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith('/api/metrics')
  })
})

describe('metricsByCategory', () => {
  it('should group metrics by category', () => {
    // Test data
    const data: Metrics = {
      data: [
        {
          id: '1',
          category: 'category1',
          label: 'Label 1',
          value: 10,
          type: 'percentage',
          description: 'Description 1',
        },
        {
          id: '2',
          category: 'category2',
          label: 'Label 2',
          value: 20,
          type: 'percentage',
          description: 'Description 2',
        },
        {
          id: '3',
          category: 'category1',
          label: 'Label 3',
          value: 30,
          type: 'percentage',
          description: 'Description 3',
        },
        {
          id: '4',
          category: 'category2',
          label: 'Label 4',
          value: 40,
          type: 'percentage',
          description: 'Description 4',
        },
        {
          id: '5',
          category: 'category1',
          label: 'Label 5',
          value: 50,
          type: 'percentage',
          description: 'Description 5',
        },
      ],
    }

    // Expected result
    const expectedResult: {
      [category: string]: Metric[]
    } = {
      category1: [
        {
          id: '1',
          label: 'Label 1',
          value: 10,
          type: 'percentage',
          description: 'Description 1',
          category: 'category1',
        },
        {
          id: '3',
          label: 'Label 3',
          value: 30,
          type: 'percentage',
          description: 'Description 3',
          category: 'category1',
        },
        {
          id: '5',
          label: 'Label 5',
          value: 50,
          type: 'percentage',
          description: 'Description 5',
          category: 'category1',
        },
      ],
      category2: [
        {
          id: '2',
          label: 'Label 2',
          value: 20,
          type: 'percentage',
          description: 'Description 2',
          category: 'category2',
        },
        {
          id: '4',
          label: 'Label 4',
          value: 40,
          type: 'percentage',
          description: 'Description 4',
          category: 'category2',
        },
      ],
    }

    // Call the function
    const result = metricsByCategory(data)

    // Assertions
    expect(result).toEqual(expectedResult)
  })

  it('should return an empty object if data is empty', () => {
    // Test data
    const data: Metrics = {
      data: [],
    }

    // Call the function
    const result = metricsByCategory(data)

    // Assertions
    expect(result).toEqual({})
  })
})
