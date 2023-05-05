import { Timer } from '@/utils/interfaces/Timer'

export const convertToTimeObject = (value: number, unit: string): Timer => {
  let hours = 0,
    minutes = 0,
    seconds = 0

  if (isNaN(value)) {
    throw new TypeError('Value sent to converter must be a number.')
  }

  if (unit === 'secs') {
    seconds = value
    minutes = Math.floor(seconds / 60)
    seconds = seconds % 60
    hours = Math.floor(minutes / 60)
    minutes = minutes % 60
  } else if (unit === 'hours') {
    hours = value
    minutes = Math.floor(hours * 60)
    hours = hours % 24
    minutes = minutes % 60
  } else {
    throw new TypeError('Invalid unit. Supported units are "seconds" and "hours".')
  }

  return { hours, minutes, seconds }
}
