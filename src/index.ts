import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'

const app = new OpenAPIHono()

app.openapi(
  createRoute({
    method: 'get',
    path: '/api/hello',
    tags: ['Hello'],
    summary: 'Hello World',
    responses: {
      200: {
        description: 'Hello response',
        content: {
          'application/json': {
            schema: z.object({
              message: z.string()
            })
          }
        }
      }
    }
  }),
  (c) => {
    return c.json({ message: 'Hello from Hono!' })
  }
)

// OpenAPI documentation endpoint
app.doc('/openapi.json', {
  openapi: '3.1.0',
  info: {
    title: 'API',
    version: '1.0.0'
  }
})

// Scalar API Reference UI
app.get(
  '/docs',
  apiReference({
    url: '/openapi.json',
    pageTitle: 'API Reference'
  })
)

export default app
