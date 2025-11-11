ALTER TABLE "stream_originals"."title_drafts" ALTER COLUMN "streamer" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "stream_originals"."titles" ALTER COLUMN "streamer" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."streamers";--> statement-breakpoint
CREATE TYPE "public"."streamers" AS ENUM('appleTV+', 'disney+', 'hboMax', 'primeVideo', 'netflix');--> statement-breakpoint
ALTER TABLE "stream_originals"."title_drafts" ALTER COLUMN "streamer" SET DATA TYPE "public"."streamers" USING "streamer"::"public"."streamers";--> statement-breakpoint
ALTER TABLE "stream_originals"."titles" ALTER COLUMN "streamer" SET DATA TYPE "public"."streamers" USING "streamer"::"public"."streamers";