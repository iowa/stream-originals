ALTER TYPE "public"."rating_types" RENAME TO "title_rating_types";--> statement-breakpoint
ALTER TABLE "stream_originals"."ratings" RENAME TO "title_ratings";--> statement-breakpoint
ALTER TABLE "stream_originals"."title_ratings" DROP CONSTRAINT "ratings_title_id_titles_id_fk";
--> statement-breakpoint
ALTER TABLE "stream_originals"."title_ratings" DROP CONSTRAINT "ratings_title_id_type_pk";--> statement-breakpoint
ALTER TABLE "stream_originals"."title_ratings" ADD CONSTRAINT "title_ratings_title_id_type_pk" PRIMARY KEY("title_id","type");--> statement-breakpoint
ALTER TABLE "stream_originals"."title_ratings" ADD CONSTRAINT "title_ratings_title_id_titles_id_fk" FOREIGN KEY ("title_id") REFERENCES "stream_originals"."titles"("id") ON DELETE no action ON UPDATE no action;