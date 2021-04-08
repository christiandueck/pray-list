export interface Prayer {
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

export interface PrayerRecord {
  createdAt: Date;
  comment?: string;
}

export interface PrayerRecordWithPrayerId {
  prayerId: string;
  record: PrayerRecord;
}