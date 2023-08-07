export interface IPasswordCrypto {
  hashPassword(password: string): Promise<string>
  comparePassword(password: string, hashPassword: string ): Promise<boolean>
}
