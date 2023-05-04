// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { metricsFakeData } from '@/pages/api/fakeData'

import { Metrics } from '@/utils/interfaces/Metrics'

export default function handler(req: NextApiRequest, res: NextApiResponse<Metrics>) {
  res.status(200).json(metricsFakeData)
}
