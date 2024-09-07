interface EventInfo {
  id: string;
  club_id: string;
  name: string;
  description: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ClubInfo {
  name: string;
  description: string;
  email: string;
  profile_url: string | null;
}

export interface EventData {
  eventInfo: EventInfo;
  clubInfo: ClubInfo;
}

export interface EventCreate {
  name: string,
  description: string,
  start_time: string,
  end_time: string,
  location: string,
}


export interface RegistrationData {
  eventInfo: {
    id: string;
    club_id: string;
    name: string;
    description: string;
    start_time: string;
    end_time: string;
    location: string;
    status: string;
    created_at: string;
    updated_at: string;
  }
  registration_id: string,
  club_name: string,
  student_id: string,
}
