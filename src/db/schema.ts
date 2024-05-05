import { date, integer, pgTable, uuid, varchar, boolean, pgEnum, time, timestamp } from 'drizzle-orm/pg-core';

export const ROLE = pgEnum('ROLE', ['CLUB', 'STUDENT']);
export const GENDER = pgEnum('GENDER', ['MALE', 'FEMALE']);
export const RESIDENCE_TYPE = pgEnum('RESIDENCE_TYPE', ['DAYSCHOLAR', 'HOSTELER']);
export const EVENT_STATUS = pgEnum('EVENT_STATUS', ['NOT_STARTED', 'HAPPENING', 'COMPLETED', 'POSTPONED']);
export const EVENT_REGISTERED_STATUS = pgEnum('EVENT_REGISTERED_STATUS', ['APPLIED', 'ACCEPTED', 'ATTENDED', 'NOT_ATTENDED'])
export const RECRUITMENT_STATUS = pgEnum('RECRUITMENT_STATUS', ['HIRING', 'NOT_HIRING']);
export const RECRUITMENT_APPLICATION_STATUS = pgEnum('RECRUITMENT_APPLICATION_STATUS', ['APPLIED', 'SCHEDULED_INTERVIEW', 'SELECTED', 'REJECTED']);
export const CLUB_MEMBER_STATUS = pgEnum('CLUB_MEMBER_STATUS', ['MEMBER', 'CO-CONVENER', 'CONVENOR']);

export const Users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar('email').notNull(),
  profile_url: varchar('profileImage'),
  role: ROLE('role').notNull(),
  created_at: timestamp('created_at').defaultNow(),
});

export const Clubs = pgTable("Club_details", {
  id: uuid("id").primaryKey().references(() => Users.id),
  name: varchar('club_name', { length: 256 }).notNull(),
  description: varchar('description').notNull(),
});


export const ClubMemberStatus = pgTable('ClubMemberStatus', {
  id: uuid('id').primaryKey().defaultRandom(),
  club_id: uuid('club_id').references(() => Clubs.id),
  role: CLUB_MEMBER_STATUS('role'),
})

export const Students = pgTable("Student_details", {
  id: uuid("id").references(() => Users.id).notNull(),
  reg_id: varchar('reg_id', { length: 13 }).primaryKey(),
  studentName: varchar('studentName', { length: 256 }).notNull(),
  batch: integer('batch').notNull(),
  section: varchar('section', { length: 1 }).notNull(),
  gender: GENDER('gender').notNull(),
  residence: RESIDENCE_TYPE('residence').notNull(),
  ClubStatus: uuid('club_status_id').references(() => ClubMemberStatus.id)
});

export const Events = pgTable('Events', {
  id: uuid('events').primaryKey().defaultRandom(),
  club_id: uuid('club_id').references(() => Clubs.id).notNull(),
  name: varchar('event_name').notNull().unique(),
  description: varchar('event_description').notNull(),
  date: date('event_date').notNull(),
  start_time: time('event_start_time'),
  end_time: time('event_end_time'),
  location: varchar('location').notNull(),
  status: EVENT_STATUS('status').notNull(),
  created_at: timestamp('created_at'),
  updated_at: timestamp('updated_at')
})

export const EventResponses = pgTable('eventResponses', {
  registration_id: uuid('registration_id').primaryKey().defaultRandom(),
  event_id: uuid('event_id').references(() => Events.id).notNull(),
  student_id: uuid('student_id').references(() => Users.id),
  status: EVENT_REGISTERED_STATUS('status'),
  from_club: boolean('from_club'),
  registered_at: timestamp('registered_at'),
})

export const Recruitments = pgTable('Recruitments', {
  id: uuid('recruiments').primaryKey().defaultRandom(),
  club_id: uuid('club_id').references(() => Clubs.id),
  role: varchar('role').notNull(),
  description: varchar('descriptions').notNull(),
  status: RECRUITMENT_STATUS('status').notNull(),
  created_at: timestamp('created_at'),
  updated_at: timestamp('updated_at')
})

export const RecruitmentResponses = pgTable('Recruitments', {
  application_id: uuid('application_id').primaryKey().defaultRandom(),
  recruitment_id: uuid('recruitment_id').references(() => Recruitments.id).notNull(),
  student_id: uuid('student_id').references(() => Users.id),
  status: RECRUITMENT_APPLICATION_STATUS('status').notNull(),
  applied_at: timestamp('applied_at'),
})

