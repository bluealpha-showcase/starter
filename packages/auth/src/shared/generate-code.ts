import { type RandomReader, generateRandomString } from '@oslojs/crypto/random'
import { codeAlphabet, codeLength } from '#shared'

export const generateCode = () => {
  const random: RandomReader = {
    read: bytes => crypto.getRandomValues(bytes)
  }
  return generateRandomString(random, codeAlphabet, codeLength)
}
