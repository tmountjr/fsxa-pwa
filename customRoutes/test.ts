import { Request, Response } from 'express'
// eslint-disable-next-line import/named
import { FSXAMiddlewareContext } from 'fsxa-nuxt-module'

export default {
  handler(_context: FSXAMiddlewareContext, _req: Request, res: Response) {
    res.status(200).json({ text: 'ok' })
  },
  route: '/test'
}
