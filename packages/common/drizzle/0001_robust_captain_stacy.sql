ALTER TABLE "stream_originals"."credits" ADD COLUMN "imageUrl" text;--> statement-breakpoint
ALTER TABLE "stream_originals"."credits" DROP COLUMN "primary_image_url";--> statement-breakpoint
ALTER TABLE "stream_originals"."credits" DROP COLUMN "primary_image_width";--> statement-breakpoint
ALTER TABLE "stream_originals"."credits" DROP COLUMN "primary_image_height";