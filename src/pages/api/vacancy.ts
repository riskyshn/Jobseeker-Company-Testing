import { getVacancyList } from '@/lib/db'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    getVacancyList(req.query).then((results) => {
      res.status(200).json(results)
    })
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
