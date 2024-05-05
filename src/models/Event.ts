interface Event {
  club_id: string;
  name: string;
  description: string;
  date: Date;
  start_time: Date;
  end_time: Date;
  location: string;
  status: 'NOT_STARTED' | 'HAPPENING' | 'COMPLETED' | 'POSTPONED';
  created_at: Date;
  updated_at: Date;
}

export default Event;
