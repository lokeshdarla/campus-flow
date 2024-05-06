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
	"event_date" date NOT NULL,
	"event_start_time" timestamp,
	"event_end_time" timestamp,
	"location" varchar NOT NULL,
	"status" "EVENT_STATUS" NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp,
	CONSTRAINT "Events_event_name_unique" UNIQUE("event_name")
);
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
