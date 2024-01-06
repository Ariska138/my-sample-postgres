import { sql } from '@vercel/postgres';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  switch (req.method) {
    case "POST":
      {
        const likes = 100;
        const { rows, fields } =
          await sql`SELECT * FROM posts WHERE likes > ${likes} LIMIT 5;`;

        res.status(200).json({ rows, fields })
      }

      break;
    case "GET":
      {
        const likes = 50;
        const pageSize = 10; // Number of records per page
        const pageNumber = 1; // Specific page number

        const offset = (pageNumber - 1) * pageSize;

        // Fetching records for the specific page number returning 10 records per page
        const { rows, fields } =
          await sql`SELECT * FROM posts WHERE likes > ${likes} LIMIT ${pageSize} OFFSET ${offset};`;

        res.status(200).json({ rows, fields })
      }

      break;
    case "PUT":
      break;
    case "DELETE":
      break;
  }


}
