import { encodeBase32LowerCaseNoPadding } from '@oslojs/encoding'

export const generateToken = () => {
  const bytes = new Uint8Array(20)
  crypto.getRandomValues(bytes)
  return encodeBase32LowerCaseNoPadding(bytes)
}
