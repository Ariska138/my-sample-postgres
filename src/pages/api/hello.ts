import { sql } from '@vercel/postgres';


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const likes = 100;
  const { rows, fields } =
    await sql`SELECT * FROM posts WHERE likes > ${likes} LIMIT 5;`;

  res.status(200).json({ rows, fields })
}
