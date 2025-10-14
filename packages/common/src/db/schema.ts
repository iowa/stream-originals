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


export const interestsTable = schema.table('interests', {
  id: p.varchar('id', { length: 20 }).primaryKey(),
  name: p.varchar('name', { length: 100 }).notNull(),
  isSubgenre: p.boolean('is_subgenre'),
  description: p.text()
});


export const titlesToInterests = schema.table(
  'titles_to_interests',
  {
    titleId: p.uuid('title_id')
    .notNull()
    .references(() => titlesTable.id),
    interestId: p.varchar('interest_id', { length: 20 })
    .notNull()
    .references(() => interestsTable.id),
  },
  (t) => [
    p.primaryKey({ columns: [t.titleId, t.interestId] })
  ],
);

