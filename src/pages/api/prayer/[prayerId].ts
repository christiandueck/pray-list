import { Prayer } from '../../../models/Prayer';
import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getPraterById(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ msg: 'Methold not allowed' });
  }

  const { prayerId } = req.query;

  try {
    const response = await fauna.query(
      q.Get(
        q.Ref(
          q.Collection('prayers'),
          prayerId
        )
      )
    );

    return res.status(200).json(response);

  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong.' });
  }
}