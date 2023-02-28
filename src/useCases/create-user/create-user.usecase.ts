type UserRequest = {
  name: string
  username: string
  password: string
}

export class CreateUserUseCase {
  async execute(data: UserRequest) {
    if (!data.username || !data.password) {
      throw new Error('Username and password is required')
    }
  }
}
