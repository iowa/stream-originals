import * as p from "drizzle-orm/pg-core";
import {
  creditRoleValues,
  streamerValues,
  titleImageTypeValues,
  titleTypeValues
} from "./dbTypes.js";

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
    plot: p.text()
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
  description: p.text(),
  category: p.varchar('category', { length: 100 }),
});

export const titleInterestsTable = schema.table(
  'title_interests',
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

export const creditRolesEnum = p.pgEnum("credit_roles", creditRoleValues);

export const creditsTable = schema.table("credits", {
  id: p.uuid("id").primaryKey().defaultRandom(),
  imdbId: p.text("imdb_id").unique(),
  displayName: p.text("display_name").notNull(),
  primaryImageUrl: p.text("primary_image_url"),
  primaryImageWidth: p.integer("primary_image_width"),
  primaryImageHeight: p.integer("primary_image_height"),
});

export const titleCreditsTable = schema.table("title_credits", {
    titleId: p.uuid("title_id").references(() => titlesTable.id).notNull(),
    creditId: p.uuid("credit_id").references(() => creditsTable.id).notNull(),
    role: creditRolesEnum().notNull(),
  }, (t) => [
    p.primaryKey({ columns: [t.titleId, t.creditId, t.role] })
  ],
);