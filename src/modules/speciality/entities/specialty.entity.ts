import { randomUUID } from 'crypto'

type ISpecialty = {
  name: string
  description: string
}

export class Specialty {
  id: string
  name: string
  description: string
  createdAt: Date

  constructor({ name, description }: ISpecialty) {
    this.name = name
    this.description = description
    this.createdAt = new Date
    this.id = randomUUID()
  }
  
  static create(prosp: ISpecialty){
    const specialty = new Specialty(prosp)
    return specialty
  }
}
