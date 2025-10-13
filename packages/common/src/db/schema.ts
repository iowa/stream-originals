import * as p from "drizzle-orm/pg-core";
import { streamerValues, titleImageTypeValues, titleTypeValues } from "./dbTypes.js";

export const schema = p.pgSchema("stream_originals");

export const streamersEnum = p.pgEnum("streamers", streamerValues);

export const titleTypesEnum = p.pgEnum("title_types", titleTypeValues);

export const titlesTable = schema.table(
  "titles",
  {
    id: p.uuid("id").primaryKey().defaultRandom(),
    name: p.text().notNull(),
    premiere: p.date(),
    streamer: streamersEnum().notNull(),
    imdbId: p.text(),
    imdbType: titleTypesEnum(),
  },
  (table) => ({
    uniqueTitleStreamer: p.unique().on(table.name, table.streamer),
  }),
);

export const titleImageTypesEnum = p.pgEnum(
  "title_image_types",
  titleImageTypeValues,
);

export const titleImagesTable = schema.table(
  "title_images",
  {
    id: p.uuid("id").primaryKey().defaultRandom(),
    titleId: p
    .uuid("title_id")
    .references(() => titlesTable.id)
    .notNull(),
    url: p.text().notNull(),
    height: p.integer().notNull(),
    width: p.integer().notNull(),
    type: titleImageTypesEnum(),
  },
  (table) => ({
    uniqueUrl: p.unique().on(table.url),
  }),
);