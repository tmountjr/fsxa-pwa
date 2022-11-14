/* eslint-disable no-console */

import { Router } from '@layer0/core/router'
import { nuxtRoutes } from '@layer0/nuxt'

export default new Router()
  // Prevent search engines from indexing permalink URLs
  .noIndexPermalink()

  // Attach the service worker.
  .match('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('.nuxt/dist/client/service-worker.js')
  })

  // Parse additional nuxt routes.
  .use(nuxtRoutes)
