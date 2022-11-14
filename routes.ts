/* eslint-disable no-console */

import { Router } from '@layer0/core/router'
import { nuxtRoutes } from '@layer0/nuxt'

export default new Router()
  // Prevent search engines from indexing permalink URLs
  .noIndexPermalink()

  // Intercept any routes that would trigger the infinite loop of the FSXAProxyApi
  // and dispatch them to a dedicated instance of the FSXARemoteApi.
  // Configure the deployment details for the API backend in layer0.config.js.
  .match('/api/:slug*', ({ proxy }) => {
    proxy('api')
  })

  // Attach the service worker.
  .match('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('.nuxt/dist/client/service-worker.js')
  })

  // Parse additional nuxt routes.
  .use(nuxtRoutes)
