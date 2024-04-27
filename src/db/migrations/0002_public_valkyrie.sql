ALTER TABLE "users" RENAME COLUMN "date" TO "created_at";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DATA TYPE timestamp;