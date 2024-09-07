DO $$ BEGIN
 CREATE TYPE "CLUB_MEMBER_STATUS" AS ENUM('MEMBER', 'CO-CONVENER', 'CONVENOR');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "EVENT_REGISTERED_STATUS" AS ENUM('APPLIED', 'ACCEPTED', 'ATTENDED', 'NOT_ATTENDED');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "EVENT_STATUS" AS ENUM('NOT_STARTED', 'HAPPENING', 'COMPLETED', 'POSTPONED');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "GENDER" AS ENUM('MALE', 'FEMALE');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "RECRUITMENT_APPLICATION_STATUS" AS ENUM('APPLIED', 'SCHEDULED_INTERVIEW', 'SELECTED', 'REJECTED');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "RECRUITMENT_STATUS" AS ENUM('HIRING', 'NOT_HIRING');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "RESIDENCE_TYPE" AS ENUM('DAYSCHOLAR', 'HOSTELER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "ROLE" AS ENUM('CLUB', 'STUDENT');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ClubMemberStatus" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"club_id" uuid,
	"role" "CLUB_MEMBER_STATUS"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Club_details" (
	"id" uuid PRIMARY KEY NOT NULL,
	"club_name" varchar(256) NOT NULL,
	"description" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "eventResponses" (
	"registration_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"event_id" uuid NOT NULL,
	"student_id" uuid,
	"status" "EVENT_REGISTERED_STATUS",
	"from_club" boolean,
	"registered_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Events" (
	"events" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"club_id" uuid NOT NULL,
	"event_name" varchar NOT NULL,
	"event_description" varchar NOT NULL,
	"image_url" varchar NOT NULL,
	"event_date" date NOT NULL,
	"event_start_time" time,
	"event_end_time" time,
	"location" varchar NOT NULL,
	"status" "EVENT_STATUS" NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp,
	CONSTRAINT "Events_event_name_unique" UNIQUE("event_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Recruitments" (
	"recruiments" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"club_id" uuid,
	"role" varchar NOT NULL,
	"descriptions" varchar NOT NULL,
	"status" "RECRUITMENT_STATUS" NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Student_details" (
	"id" uuid NOT NULL,
	"reg_id" varchar(13) PRIMARY KEY NOT NULL,
	"studentName" varchar(256) NOT NULL,
	"batch" integer NOT NULL,
	"section" varchar(1) NOT NULL,
	"gender" "GENDER" NOT NULL,
	"residence" "RESIDENCE_TYPE" NOT NULL,
	"club_status_id" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(20) NOT NULL,
	"profileImage" varchar,
	"role" "ROLE" NOT NULL,
	"date" date
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ClubMemberStatus" ADD CONSTRAINT "ClubMemberStatus_club_id_Club_details_id_fk" FOREIGN KEY ("club_id") REFERENCES "Club_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Club_details" ADD CONSTRAINT "Club_details_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "eventResponses" ADD CONSTRAINT "eventResponses_event_id_Events_events_fk" FOREIGN KEY ("event_id") REFERENCES "Events"("events") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "eventResponses" ADD CONSTRAINT "eventResponses_student_id_users_id_fk" FOREIGN KEY ("student_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Events" ADD CONSTRAINT "Events_club_id_Club_details_id_fk" FOREIGN KEY ("club_id") REFERENCES "Club_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Recruitments" ADD CONSTRAINT "Recruitments_club_id_Club_details_id_fk" FOREIGN KEY ("club_id") REFERENCES "Club_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Student_details" ADD CONSTRAINT "Student_details_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Student_details" ADD CONSTRAINT "Student_details_club_status_id_ClubMemberStatus_id_fk" FOREIGN KEY ("club_status_id") REFERENCES "ClubMemberStatus"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
