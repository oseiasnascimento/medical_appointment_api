import bcrypt from 'bcryptjs'
import { IPasswordCrypto } from './password.crypto'

export class PasswordBcrypt implements IPasswordCrypto {
  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
  }

  async comparePassword(password: string, hashPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashPassword)
  }

}
