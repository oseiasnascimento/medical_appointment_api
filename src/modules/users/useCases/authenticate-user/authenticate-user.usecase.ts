import { IUserRepository } from './../../repositories/user.repository';
import { CustomError } from './../../../../errors/custom.error';

type AuthenticateRequest ={
  username: string,
  password: string
}

export class AuthenticateUserCase{

  constructor( private userRepository: IUserRepository){

  }

  async execute({username, password}: AuthenticateRequest){
    if (!username || !password){
      throw new CustomError("Invalid username or password", 401)    
    }

    const user = await this.userRepository.findByUsername(username)

    if (!user){
      throw new CustomError("Invalid username or password", 401)
    }
  }
}