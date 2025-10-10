CREATE SCHEMA "stream_originals";
--> statement-breakpoint
CREATE TYPE "public"."streamers" AS ENUM('appleTV+', 'netflix');--> statement-breakpoint
CREATE TYPE "public"."titles_media_type" AS ENUM('poster');--> statement-breakpoint
CREATE TYPE "public"."titles_type" AS ENUM('movie', 'tvSeries', 'tvMiniSeries', 'tvSpecial', 'tvMovie', 'short', 'video', 'videoGame');--> statement-breakpoint
CREATE TABLE "stream_originals"."titles_media" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title_id" uuid NOT NULL,
	"url" text NOT NULL,
	"height" integer NOT NULL,
	"width" integer NOT NULL,
	"type" "titles_media_type",
	CONSTRAINT "titles_media_url_unique" UNIQUE("url")
);
--> statement-breakpoint
CREATE TABLE "stream_originals"."titles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"premiere" date,
	"streamer" "streamers" NOT NULL,
	"imdbId" text,
	"imdbType" "titles_type",
	CONSTRAINT "titles_name_streamer_unique" UNIQUE("name","streamer")
);
--> statement-breakpoint
ALTER TABLE "stream_originals"."titles_media" ADD CONSTRAINT "titles_media_title_id_titles_id_fk" FOREIGN KEY ("title_id") REFERENCES "stream_originals"."titles"("id") ON DELETE no action ON UPDATE no action;