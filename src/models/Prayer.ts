export type Prayer = {
  id?: string;
  user: string;
  title: string;
  description?: string;
  createdAt: Date;
  closing_date: Date;
  answer?: string;
  active: boolean;
  records: PrayerRecord[];
}

export type PrayerRecord = {
  createdAt: Date;
  comment?: string;
}

export type PrayerRecordWithPrayerId = {
  prayerId: string;
  record: PrayerRecord;
}