import { User } from '../../entities/user.entity'
import { IUserRepository } from '../user.repository'

export class UserMemoryRepository implements IUserRepository{
  users: User[]

  private static instance: UserMemoryRepository

  constructor() {
    this.users = []
  }

  static getInstance() {
    if (!UserMemoryRepository.instance) {
      UserMemoryRepository.instance = new UserMemoryRepository()
    }
    return UserMemoryRepository.instance
  }

  async findByUsername(username: string) {
    return this.users.find(user => user.username === username)
  }

  async findAll() {
    return this.users
  }

  async save(data: User) {
    this.users.push(data)
    return data
  }
}
