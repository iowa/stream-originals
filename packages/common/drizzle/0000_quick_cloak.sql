CREATE SCHEMA "stream_originals";
--> statement-breakpoint
CREATE TYPE "public"."credit_roles" AS ENUM('star', 'writer', 'director');--> statement-breakpoint
CREATE TYPE "public"."streamers" AS ENUM('appleTV+', 'netflix');--> statement-breakpoint
CREATE TYPE "public"."title_image_types" AS ENUM('poster');--> statement-breakpoint
CREATE TYPE "public"."title_types" AS ENUM('movie', 'tvSeries', 'tvMiniSeries', 'tvSpecial', 'tvMovie', 'short', 'video', 'videoGame');--> statement-breakpoint
CREATE TABLE "stream_originals"."credits" (
	"id" varchar(20) PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"primary_image_url" text,
	"primary_image_width" integer,
	"primary_image_height" integer
);
--> statement-breakpoint
CREATE TABLE "stream_originals"."interests" (
	"id" varchar(20) PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"is_subgenre" boolean,
	"description" text,
	"category" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "stream_originals"."title_credits" (
	"title_id" varchar(20) NOT NULL,
	"credit_id" varchar(20) NOT NULL,
	"role" "credit_roles" NOT NULL,
	CONSTRAINT "title_credits_title_id_credit_id_role_pk" PRIMARY KEY("title_id","credit_id","role")
);
--> statement-breakpoint
CREATE TABLE "stream_originals"."title_drafts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"streamer" "streamers" NOT NULL,
	"premiere" date,
	CONSTRAINT "title_drafts_name_streamer_unique" UNIQUE("name","streamer")
);
--> statement-breakpoint
CREATE TABLE "stream_originals"."title_images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title_id" varchar(20) NOT NULL,
	"url" text NOT NULL,
	"height" integer NOT NULL,
	"width" integer NOT NULL,
	"type" "title_image_types",
	CONSTRAINT "title_images_url_unique" UNIQUE("url")
);
--> statement-breakpoint
CREATE TABLE "stream_originals"."title_interests" (
	"title_id" varchar(20) NOT NULL,
	"interest_id" varchar(20) NOT NULL,
	CONSTRAINT "title_interests_title_id_interest_id_pk" PRIMARY KEY("title_id","interest_id")
);
--> statement-breakpoint
CREATE TABLE "stream_originals"."titles" (
	"id" varchar(20) PRIMARY KEY NOT NULL,
	"type" "title_types" NOT NULL,
	"name" text NOT NULL,
	"streamer" "streamers" NOT NULL,
	"premiere" date,
	"plot" text
);
--> statement-breakpoint
ALTER TABLE "stream_originals"."title_credits" ADD CONSTRAINT "title_credits_title_id_titles_id_fk" FOREIGN KEY ("title_id") REFERENCES "stream_originals"."titles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stream_originals"."title_credits" ADD CONSTRAINT "title_credits_credit_id_credits_id_fk" FOREIGN KEY ("credit_id") REFERENCES "stream_originals"."credits"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stream_originals"."title_images" ADD CONSTRAINT "title_images_title_id_titles_id_fk" FOREIGN KEY ("title_id") REFERENCES "stream_originals"."titles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stream_originals"."title_interests" ADD CONSTRAINT "title_interests_title_id_titles_id_fk" FOREIGN KEY ("title_id") REFERENCES "stream_originals"."titles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stream_originals"."title_interests" ADD CONSTRAINT "title_interests_interest_id_interests_id_fk" FOREIGN KEY ("interest_id") REFERENCES "stream_originals"."interests"("id") ON DELETE no action ON UPDATE no action;