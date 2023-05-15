import { Request, Response } from 'express'
import { CreateSpecialityUseCase } from './create-speciality.usecase'
import { ISpecialityRepository } from '../../repositories/speciality.repository'

export class CreateSpecialityController {
  constructor(private specialityRepository: ISpecialityRepository) {}

  async handle(req: Request, res: Response) {
    try {
      const data = req.body

      const useCase = new CreateSpecialityUseCase(this.specialityRepository)
      const result = await useCase.execute(data)

      return res.json(result)
    } catch (error: any) {
      return res.status(error.statusCode || 400).json(error.message)
    }
  }
}
