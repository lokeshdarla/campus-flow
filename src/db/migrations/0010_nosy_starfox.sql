CREATE TABLE IF NOT EXISTS "RecruitmentResponses" (
	"application_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"recruitment_id" uuid NOT NULL,
	"student_id" uuid,
	"Why do you think you are eligible for the role" varchar NOT NULL,
	"Any past experiences" varchar NOT NULL,
	"status" "RECRUITMENT_APPLICATION_STATUS" NOT NULL,
	"applied_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "RecruitmentResponses" ADD CONSTRAINT "RecruitmentResponses_recruitment_id_Recruitments_recruiments_fk" FOREIGN KEY ("recruitment_id") REFERENCES "Recruitments"("recruiments") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "RecruitmentResponses" ADD CONSTRAINT "RecruitmentResponses_student_id_users_id_fk" FOREIGN KEY ("student_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
