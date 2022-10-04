import { Router } from '@layer0/core'
import { nuxtRoutes } from '@layer0/nuxt'
import getPrerenderRequests from './getPrerenderRequests'

const router = new Router()

// Regex to catch multiple hostnames
// Any deployment will have a L0 permalink
// Don't allow Google bot to crawl it, read more on:
// https://docs.layer0.co/guides/cookbook#blocking-search-engine-crawlers
router.noIndexPermalink()

// Pre-render the static home page
// By pre-rendering, once the project is deployed
// the set of links are visited to warm the cache
// for future visits (expected to be the first view for real users)
// More on static prerendering: https://docs.layer0.co/guides/static_prerendering
router.prerender(getPrerenderRequests)

router.get('/service-worker.js', ({ serviceWorker }) => {
  return serviceWorker('dist/dist/client/service-worker.js')
})

// Fallback in case any request is not served by any routes above will be handled by default routes
router.use(nuxtRoutes)

export default router
