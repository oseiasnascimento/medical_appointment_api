import { hash } from 'bcryptjs'
import { IPasswordCrypto } from './password.crypto'

export class PasswordBcrypt implements IPasswordCrypto {
  hashPassword(password: string): Promise<string> {
    return hash(password, 10)
  }
}
