// pages/api/hello.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check the request method
  if (req.method === 'GET') {
    // Send "Hello World" as a response
    res.status(200).json({ message: 'Hello World' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}