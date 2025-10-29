import { InterestsService } from "./InterestsService.js";
import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { InteretsCreateResponseSchema } from "@repo/common";

const app = new OpenAPIHono();
const service = new InterestsService();

app.openapi(createRoute({
  method: 'post',
  path: '/init',
  description: "Initial Interests import",
  responses: {
    200: {
      description: "OK",
      content: {
        'application/json': {
          schema: InteretsCreateResponseSchema,
        },
      },
    },
  },
}), async (c) => {
  const response = await service.create();
  return c.json(response);
})

export default app