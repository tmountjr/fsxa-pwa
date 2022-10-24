/* eslint-disable no-console */

import { Router } from '@layer0/core/router'
import { nuxtRoutes } from '@layer0/nuxt'

export default new Router()
  // Prevent search engines from indexing permalink URLs
  .noIndexPermalink()

  // Ensure that the server middleware routes are accounted for on the L0 side.
  .match('/api/:slug*', ({ request, cache, renderWithApp }) => {
    // Log the requests and their request bodies.
    console.log(
      `[${Date.now()}] ${request.method} ${
        request.url
      } ${request.rawBody?.toString()}`
    )

    // Do not cache.
    cache({
      browser: { maxAgeSeconds: 0 },
      edge: { maxAgeSeconds: 0 }
    })

    // Send to the app.
    renderWithApp()
  })

  // Attach the service worker.
  .match('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('.nuxt/dist/client/service-worker.js')
  })

  // Parse additional nuxt routes.
  .use(nuxtRoutes)
