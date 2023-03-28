import { Request, Response } from 'express'
import { logger } from '../../utils/logger'
import { CreateUserUseCase } from './create-user.usecase'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    logger.info('User begin created')
    try {
      const data = req.body

      const useCase = new CreateUserUseCase()
      const result = await useCase.execute(data)

      return res.json(result)
    } catch (error: any) {
      logger.error(error.stack)
      return res.status(400).json(error.message)
    }
  }
}
