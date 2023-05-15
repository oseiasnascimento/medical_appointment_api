import { Speciality } from '../../entities/speciality.entity'
import { ISpecialityRepository } from '../speciality.repository'

export class SpecialityMemoryRepository implements ISpecialityRepository{
  speciality: Speciality[]

  private static instance: SpecialityMemoryRepository

  constructor() {
    this.speciality = []
  }

  static getInstance() {
    if (!SpecialityMemoryRepository.instance) {
      SpecialityMemoryRepository.instance = new SpecialityMemoryRepository()
    }
    return SpecialityMemoryRepository.instance
  }

  async findByName(name: string) {
    return this.speciality.find(speciality => speciality.name === name)
  }

  async findAll() {
    return this.speciality
  }

  async save(data: Speciality) {
    this.speciality.push(data)
    return data
  }
}
