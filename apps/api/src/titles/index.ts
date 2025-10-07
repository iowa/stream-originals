import { Hono } from "hono";
import { describeRoute, resolver } from "hono-openapi";
import { TitlesPatchResponseSchema } from "@repo/common";
import { TitlesSchema } from "./types.js";
import { TitlesService } from "./TitlesService.js";

const app = new Hono();

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
    const titles = await TitlesService.getTitles();
    return c.json(titles);
  },
);

app.patch(
  "/crawlee",
  describeRoute({
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
    const response = await TitlesService.crawleeTitles();
    return c.json(response);
  },
);

export default app;
