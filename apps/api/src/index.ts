import { serve } from '@hono/node-server'
import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import titles from "./titles/index.js";
import interests from "./interests/index.js";

const app = new OpenAPIHono()

app.get("/", Scalar({ url: "/doc" }));

app.doc31('/doc', {
  openapi: '3.1.0',
  info: {
    version: '1.0.0',
    title: 'Stream Originals Crawlee API',
    description: "API for managing Stream Originals resources.",
  },
})

app.route("/titles", titles);
app.route("/interests", interests);

serve({
  fetch: app.fetch,
  port: 8080
}, (info) => {
  if (!process.env.POSTGRES_URL) {
    throw new Error("Missing required environment variable: POSTGRES_URL");
  }
  console.log(`Server is running on http://localhost:${info.port}`)
})
