// This file was added by layer0 init.
// You should commit this file to source control.

import { nuxtRoutes } from '@layer0/nuxt'
import { Router } from '@layer0/core/router'

export default new Router()
  // Prevent search engines from indexing permalink URLs
  .noIndexPermalink()
  .match('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('dist/dist/client/service-worker.js')
  })
  .use(nuxtRoutes)
