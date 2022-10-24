// This file was added by layer0 init.
// You should commit this file to source control.

import { Router } from '@layer0/core/router'
import { nuxtRoutes } from '@layer0/nuxt'

export default new Router()
  // Prevent search engines from indexing permalink URLs
  .noIndexPermalink()
  .match('/api/:slug*', ({ renderWithApp }) => {
    renderWithApp({
      transformRequest: (req) => {
        console.log(
          `[${Date.now()}] ${req.method} ${req.url} ${req.rawBody?.toString()}`
        )
      }
    })
  })
  .match('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('.nuxt/dist/client/service-worker.js')
  })
  .use(nuxtRoutes)
