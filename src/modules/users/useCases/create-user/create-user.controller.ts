import { Request, Response } from 'express'
import { logger } from '../../../../utils/logger'
import { CreateUserUseCase } from './create-user.usecase'
import { IUserRepository } from '../../repositories/user.repository'
import { IPasswordCrypto } from '../../../../infra/shared/crypto/password.crypto'

export class CreateUserController {
  constructor(
    private userRepository: IUserRepository,
    private passwordBcrypt: IPasswordCrypto
  ) {}

  async handle(req: Request, res: Response) {
    logger.info('User begin created')
    try {
      const data = req.body

      const useCase = new CreateUserUseCase(
        this.userRepository,
        this.passwordBcrypt
      )
      const result = await useCase.execute(data)

      return res.json(result)
    } catch (error: any) {
      logger.error(error.stack)
      return res.status(error.statusCode).json(error.message)
    }
  }
}
