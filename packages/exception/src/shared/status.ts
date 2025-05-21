export const status = {
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  tooManyRequests: 429,
  internalServerError: 500
} as const

export type Status = (typeof status)[keyof typeof status]
