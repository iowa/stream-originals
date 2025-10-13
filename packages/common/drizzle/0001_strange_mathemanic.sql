CREATE TABLE "stream_originals"."interests" (
	"id" varchar(20) PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"is_subgenre" boolean
);
--> statement-breakpoint
CREATE TABLE "stream_originals"."titles_to_interests" (
	"title_id" uuid NOT NULL,
	"interest_id" varchar(20) NOT NULL,
	CONSTRAINT "titles_to_interests_title_id_interest_id_pk" PRIMARY KEY("title_id","interest_id")
);
--> statement-breakpoint
ALTER TABLE "stream_originals"."titles_to_interests" ADD CONSTRAINT "titles_to_interests_title_id_titles_id_fk" FOREIGN KEY ("title_id") REFERENCES "stream_originals"."titles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stream_originals"."titles_to_interests" ADD CONSTRAINT "titles_to_interests_interest_id_interests_id_fk" FOREIGN KEY ("interest_id") REFERENCES "stream_originals"."interests"("id") ON DELETE no action ON UPDATE no action;