import { factory } from '#api/shared'
import { githubHandlers } from './github'
import { githubCallbackHandlers } from './github-callback'
import { sendCodeHandlers } from './send-code'
import { signOutHandlers } from './sign-out'
import { signOutAllHandlers } from './sign-out-all'
import { verifyCodeHandlers } from './verify-code'

export const authRoutes = factory
  .createApp()
  .post('/send-code', ...sendCodeHandlers)
  .post('/verify-code', ...verifyCodeHandlers)
  .get('/github', ...githubHandlers)
  .get('/github/callback', ...githubCallbackHandlers)
  .post('/sign-out', ...signOutHandlers)
  .post('/sign-out-all', ...signOutAllHandlers)
