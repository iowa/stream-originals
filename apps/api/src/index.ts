import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { TitlesPatchResponse } from "@repo/common";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/common', (c) => {
  const response: TitlesPatchResponse = {
    items: []
  } as TitlesPatchResponse
  return c.json(response)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
