import { PrayerRecordWithPrayerId } from '../../../models/Prayer';
import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function addPrayerRecord(req: NextApiRequest, res: NextApiResponse) {
  const prayerRecord: PrayerRecordWithPrayerId = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Methold not allowed' });
  }

  try {
    const create = await fauna.query(
      q.Update(
        q.Ref(
          q.Collection('prayers'),
          prayerRecord.prayerId
        ),
        {
          data: prayerRecord.record
        }
      )
    );

    return res.status(200).json(create);

  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong.' });
  }
}