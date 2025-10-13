import * as p from "drizzle-orm/pg-core";
import { streamerValues, titlesMediaType, titleTypeValues } from "./dbTypes.js";

export const schema = p.pgSchema("stream_originals");

export const streamersEnum = p.pgEnum("streamers", streamerValues);

export const titlesTypeEnum = p.pgEnum("titles_type", titleTypeValues);

export const titlesTable = schema.table(
  "titles",
  {
    id: p.uuid("id").primaryKey().defaultRandom(),
    name: p.text().notNull(),
    premiere: p.date(),
    streamer: streamersEnum().notNull(),
    imdbId: p.text(),
    imdbType: titlesTypeEnum(),
  },
  (table) => ({
    uniqueTitleStreamer: p.unique().on(table.name, table.streamer),
  }),
);

export const titlesMediaTypeEnum = p.pgEnum(
  "titles_media_type",
  titlesMediaType,
);

export const titlesMediaTable = schema.table(
  "titles_media",
  {
    id: p.uuid("id").primaryKey().defaultRandom(),
    titleId: p
    .uuid("title_id")
    .references(() => titlesTable.id)
    .notNull(),
    url: p.text().notNull(),
    height: p.integer().notNull(),
    width: p.integer().notNull(),
    type: titlesMediaTypeEnum(),
  },
  (table) => ({
    uniqueUrl: p.unique().on(table.url),
  }),
);

export const interests = schema.table('interests', {
  id: p.varchar('id', { length: 20 }).primaryKey(),
  titleId: p
  .uuid("title_id")
  .references(() => titlesTable.id)
  .notNull(),
  name: p.varchar('name', { length: 100 }).notNull(),
  isSubgenre: p.boolean('is_subgenre'),
});
