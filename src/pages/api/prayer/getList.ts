import { Prayer } from '../../../models/Prayer';
import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getList(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ msg: 'Methold not allowed' });
  }

  try {
    const response = await fauna.query(
      q.Map(
        q.Paginate(
          q.Match(
            q.Index('active_prayers_by_user'),
            ["295305703231324674", true]
          )
        ),
        q.Lambda(
          "ref",
          q.Get(
            q.Var("ref")
          )
        )
      )
    );

    return res.status(200).json(response);

  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong.' });
  }
}