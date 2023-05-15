import { Speciality } from '../../entities/speciality.entity'
import { ISpecialityRepository } from '../../repositories/speciality.repository'

type SpecialtyRequest = {
  name: string
  description: string
}

export class CreateSpecialityUseCase {
  constructor(private specialtyRepository: ISpecialityRepository) {}

  async execute(data: SpecialtyRequest) {
    const speciality = new Speciality(data)

    const specialityCreated = await this.specialtyRepository.save(speciality)

    return specialityCreated
  }
}
