import { getVacancyList } from '@/lib/db'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end()

  try {
    const results = await getVacancyList(req.query)
    res.setHeader('cache-control', 'public, max-age=3600, must-revalidate')
    res.status(200).json(results)
  } catch (e: any) {
    res.status(500).json({ message: e.message })
  }
}
