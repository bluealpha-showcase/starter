import { sha256 } from '@oslojs/crypto/sha2'
import { encodeHexLowerCase } from '@oslojs/encoding'

type Props = {
  token: string
}

export const encodeToken = ({ token }: Props) => {
  return encodeHexLowerCase(sha256(new TextEncoder().encode(token)))
}
