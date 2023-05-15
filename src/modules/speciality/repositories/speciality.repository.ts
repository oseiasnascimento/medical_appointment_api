import { Speciality } from '../entities/speciality.entity'

export interface ISpecialityRepository {
  findByUsername(name: string): Promise<Speciality | undefined>
  save(data: Speciality): Promise<Speciality>
}
