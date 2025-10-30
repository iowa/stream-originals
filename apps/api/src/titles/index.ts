import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import {
  TitlesCreateResponseSchema,
  TitlesGetCountsResponseSchema,
  TitlesPatchRequest,
  TitlesPatchRequestSchema,
  TitlesPatchResponseSchema
} from "@repo/common";
import { TitlesService } from "./TitlesService.js";

const app = new OpenAPIHono();
const service = new TitlesService();

app.openapi(
  createRoute({
    method: "get",
    path: "/counts",
    description: "Get Titles counts per streamer",
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: TitlesGetCountsResponseSchema,
          },
        },
      },
    },
  }),
  async (c) => {
    return c.json(await service.getCounts());
  }
);

app.openapi(
  createRoute({
    method: "post",
    path: "/init",
    description: "Get intial titles data per streamer",
    request: {
      body: {
        content: {
          "application/json": {
            schema: TitlesPatchRequestSchema
          }
        }
      }
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: TitlesCreateResponseSchema,
          },
        },
      },
    },
  }),
  async (c) => {
    const req: TitlesPatchRequest = c.req.valid('json')
    const response = await service.create(req.streamer);
    return c.json(response);
  }
);

app.openapi(
  createRoute({
    method: "patch",
    path: "/",
    description: "Patch titles with data per streamer",
    request: {
      body: {
        content: {
          "application/json": {
            schema: TitlesPatchRequestSchema
          }
        }
      }
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: TitlesPatchResponseSchema,
          },
        },
      },
    },
  }),
  async (c) => {
    const req: TitlesPatchRequest = c.req.valid('json')
    const response = await service.patch(req.streamer);
    return c.json(response);
  }
);

export default app;
