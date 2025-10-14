import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Scalar } from "@scalar/hono-api-reference";
import { openAPIRouteHandler } from "hono-openapi";
import titles from "./titles/index.js";
import interests from "./interests/index.js";

const app = new Hono()

app.get("/", Scalar({ url: "/openapi" }));
app.get(
  "/openapi",
  openAPIRouteHandler(app, {
    documentation: {
      info: {
        title: "Stream Originals Crawlee API",
        version: "1.0.0",
        description: "API for managing Stream Originals resources.",
      }
    },
    includeEmptyPaths: true,
    exclude: ["/", "/openapi"],
  }),
);

app.route("/titles", titles);
app.route("/interests", interests);

serve({
  fetch: app.fetch,
  port: 8080
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
