CREATE TABLE "stream_originals"."interests" (
	"id" varchar(20) PRIMARY KEY NOT NULL,
	"title_id" uuid NOT NULL,
	"name" varchar(100) NOT NULL,
	"is_subgenre" boolean
);
--> statement-breakpoint
ALTER TABLE "stream_originals"."interests" ADD CONSTRAINT "interests_title_id_titles_id_fk" FOREIGN KEY ("title_id") REFERENCES "stream_originals"."titles"("id") ON DELETE no action ON UPDATE no action;