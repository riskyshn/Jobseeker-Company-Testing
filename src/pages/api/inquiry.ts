import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const resp = await fetch('https://devplay.jobseeker.software/api/company-inquiry', {
        method: 'POST',
        body: req.body,
        headers: {
          'Content-Type': 'application/json',
        },
      })

      res.status(resp.status).json({ success: resp.ok })
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message })
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
