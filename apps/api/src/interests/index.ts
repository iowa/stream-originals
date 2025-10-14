import { Hono } from "hono";
import { describeRoute, resolver } from "hono-openapi";
import { InterestsService } from "./InterestsService.js";
import { InteretsCreateResponseSchema } from "@repo/common";

const app = new Hono();
const service = new InterestsService();

app.post(
  "/init",
  describeRoute({
    description: "Initial Interests import",
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": { schema: resolver(InteretsCreateResponseSchema) },
        },
      },
    },
  }),
  async (c) => {
    const response = await service.create();
    return c.json(response);
  },
);

export default app;
