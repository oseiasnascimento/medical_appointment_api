export interface IPasswordCrypto {
  hashPassword(password: string): Promise<string>
}
