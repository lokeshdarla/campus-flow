ALTER TABLE "eventResponses" ADD CONSTRAINT "eventResponses_event_id_student_id_unique" UNIQUE("event_id","student_id");