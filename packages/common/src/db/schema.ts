import * as p from "drizzle-orm/pg-core";
import {
  creditRoleValues, titleRatingTypeValues,
  streamerValues,
  titleImageTypeValues,
  titleTypeValues
} from "./dbTypes.js";

export const schema = p.pgSchema("stream_originals");

export const streamersEnum = p.pgEnum("streamers", streamerValues);

export const titleTypesEnum = p.pgEnum("title_types", titleTypeValues);

export const titleDraftsTable = schema.table("title_drafts", {
  id: p.uuid("id").primaryKey().defaultRandom(),
  name: p.text().notNull(),
  streamer: streamersEnum().notNull(),
  premiere: p.date(),
  finale: p.date(),
  seasons: p.integer(),
  episodes: p.integer(),
})

export const titlesTable = schema.table(
  "titles",
  {
    id: p.varchar('id', { length: 20 }).primaryKey(),
    type: titleTypesEnum().notNull(),
    name: p.text().notNull(),
    streamer: streamersEnum().notNull(),
    premiere: p.date(),
    finale: p.date(),
    plot: p.text(),
    updatedAt: p.timestamp("updated_at").defaultNow(),
    runtimeSeconds: p.integer("runtime_seconds"),
    seasons: p.integer(),
    episodes: p.integer(),
  }
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
    .varchar('title_id', { length: 20 })
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
    titleId: p.varchar('title_id', { length: 20 })
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
  id: p.varchar('id', { length: 20 }).primaryKey(),
  name: p.text("name").notNull(),
  primaryImageUrl: p.text("primary_image_url"),
  primaryImageWidth: p.integer("primary_image_width"),
  primaryImageHeight: p.integer("primary_image_height"),
});

export const titleCreditsTable = schema.table("title_credits", {
    titleId: p.varchar('title_id', { length: 20 }).references(() => titlesTable.id).notNull(),
    creditId: p.varchar('credit_id', { length: 20 }).references(() => creditsTable.id).notNull(),
    role: creditRolesEnum().notNull(),
  }, (t) => [
    p.primaryKey({ columns: [t.titleId, t.creditId, t.role] })
  ],
);

export const titleRatingTypesEnum = p.pgEnum("title_rating_types", titleRatingTypeValues);

export const titleRatingsTable = schema.table(
  "title_ratings",
  {
    titleId: p.varchar("title_id", { length: 20 })
    .notNull()
    .references(() => titlesTable.id),
    type: titleRatingTypesEnum().notNull(),
    total: p.numeric("total"),
    voteCount: p.integer("vote_count"),
  }, (t) => [
    p.primaryKey({ columns: [t.titleId, t.type] })
  ],
);