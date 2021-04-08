import { PrayerRecordWithPrayerId } from '../../../models/Prayer';
import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function addPrayerRecord(req: NextApiRequest, res: NextApiResponse) {
  const prayerRecord: PrayerRecordWithPrayerId = req.body;

  if (req.method !== 'PUT') {
    return res.status(405).json({ msg: 'Methold not allowed' });
  }

  try {
    const addRecord = await fauna.query(
      q.Let(
        {
          ref: q.Ref(
            q.Collection("prayers"),
            prayerRecord.prayerId
          ),
          doc: q.Get(
            q.Var('ref')
          ),
          array: q.Select(
            ['data', 'records'],
            q.Var('doc')
          )
        },
        q.Update(
          q.Var('ref'),
          {
            data: {
              records: q.Append(
                prayerRecord.record,
                q.Var('array')
              )
            }
          }
        )
      )
    );

    return res.status(200).json(addRecord);

  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong.' });
  }
}