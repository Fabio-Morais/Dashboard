import { convertToTimeObject } from '@/utils/conversions'

describe('convertToTimeObject', () => {
  test('converts seconds to time object correctly', () => {
    const seconds = 3660 // 1 hour and 1 minute
    const unit = 'secs'
    const expectedTimeObject = { hours: 1, minutes: 1, seconds: 0 }

    const result = convertToTimeObject(seconds, unit)

    expect(result).toEqual(expectedTimeObject)
  })

  test('converts hours to time object correctly', () => {
    const hours = 2 // 2 days
    const unit = 'hours'
    const expectedTimeObject = { hours: 2, minutes: 0, seconds: 0 }

    const result = convertToTimeObject(hours, unit)

    expect(result).toEqual(expectedTimeObject)
  })

  test('should convert 4213 seconds to the correct time object', () => {
    // Test input
    const value = 4213
    const unit = 'secs'

    // Expected output
    const expectedResult = {
      hours: 1,
      minutes: 10,
      seconds: 13,
    }

    // Call the function
    const result = convertToTimeObject(value, unit)

    // Assertions
    expect(result).toEqual(expectedResult)
  })

  test('throws error for invalid unit', () => {
    const value = 120 // 2 minutes
    const unit = 'invalid' // unsupported unit

    expect(() => {
      convertToTimeObject(value, unit)
    }).toThrow(TypeError)
  })

  test('returns zero time object for zero seconds', () => {
    const seconds = 0
    const unit = 'secs'
    const expectedTimeObject = { hours: 0, minutes: 0, seconds: 0 }

    const result = convertToTimeObject(seconds, unit)

    expect(result).toEqual(expectedTimeObject)
  })

  test('returns zero time object for zero hours', () => {
    const hours = 0
    const unit = 'hours'
    const expectedTimeObject = { hours: 0, minutes: 0, seconds: 0 }

    const result = convertToTimeObject(hours, unit)

    expect(result).toEqual(expectedTimeObject)
  })

  test('throws error for non-numeric value', () => {
    const value = NaN
    const unit = 'secs'

    expect(() => {
      convertToTimeObject(value, unit)
    }).toThrow(TypeError)
  })
})
