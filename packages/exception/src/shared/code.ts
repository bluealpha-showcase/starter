export const code = {
  // Auth
  getGithubUserFailed: 'getGithubUserFailed',
  githubCallbackFailed: 'githubCallbackFailed',
  githubSignInFailed: 'githubSignInFailed',
  invalidGithubUser: 'invalidGithubUser',
  invalidState: 'invalidState',
  sendCodeExceeded: 'sendCodeExceeded',
  sendCodeFailed: 'sendCodeFailed',
  signOutFailed: 'signOutFailed',
  stateCookieNotFound: 'stateCookieNotFound',
  unauthorized: 'unauthorized',
  verifyCodeExceeded: 'verifyCodeExceeded',
  verifyCodeFailed: 'verifyCodeFailed',

  // User
  userNotFound: 'userNotFound',

  // Verification
  verificationExpired: 'verificationExpired',
  verificationNotFound: 'verificationNotFound'
} as const

export type Code = (typeof code)[keyof typeof code]
