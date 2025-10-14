import { Hono } from "hono";
import { describeRoute, resolver } from "hono-openapi";
import { TitlesCreateResponseSchema, TitlesPatchResponseSchema } from "@repo/common";
import { TitlesSchema } from "./types.js";
import { TitlesService } from "./TitlesService.js";

const app = new Hono();
const service = new TitlesService();

app.get(
  "/",
  describeRoute({
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": { schema: resolver(TitlesSchema) },
        },
      },
    },
  }),
  async (c) => {
    const titles = await service.getTitles('appleTV+');
    return c.json(titles);
  },
);

app.post(
  "/init",
  describeRoute({
    description: "Initial Titles import",
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": { schema: resolver(TitlesCreateResponseSchema) },
        },
      },
    },
  }),
  async (c) => {
    const response = await service.create();
    return c.json(response);
  },
);

app.patch(
  "/",
  describeRoute({
    description: "Patch found titles with additional data",
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": { schema: resolver(TitlesPatchResponseSchema) },
        },
      },
    },
  }),
  async (c) => {
    const response = await service.patch();
    return c.json(response);
  },
);

export default app;
