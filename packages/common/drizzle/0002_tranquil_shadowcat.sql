CREATE TYPE "public"."rating_types" AS ENUM('imdb');--> statement-breakpoint
CREATE TABLE "stream_originals"."ratings" (
	"title_id" varchar(20) NOT NULL,
	"type" "rating_types" NOT NULL,
	"total" numeric NOT NULL,
	"vote_count" integer NOT NULL,
	CONSTRAINT "ratings_title_id_type_pk" PRIMARY KEY("title_id","type")
);
--> statement-breakpoint
ALTER TABLE "stream_originals"."ratings" ADD CONSTRAINT "ratings_title_id_titles_id_fk" FOREIGN KEY ("title_id") REFERENCES "stream_originals"."titles"("id") ON DELETE no action ON UPDATE no action;