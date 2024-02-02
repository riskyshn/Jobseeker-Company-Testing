import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const resp = await axios.post('https://devplay.jobseeker.software/api/company-inquiry', req.body)
      res.status(resp.status).json(resp.data)
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message })
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
