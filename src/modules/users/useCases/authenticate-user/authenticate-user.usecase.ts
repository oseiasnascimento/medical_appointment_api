import { IUserRepository } from './../../repositories/user.repository';
import { CustomError } from './../../../../errors/custom.error';
import { IPasswordCrypto } from '../../../../infra/shared/crypto/password.crypto';

type AuthenticateRequest ={
  username: string,
  password: string
}

export class AuthenticateUserCase{

  constructor( 
    private userRepository: IUserRepository, 
    private passwordCrypto: IPasswordCrypto
  ){

  }

  async execute({username, password}: AuthenticateRequest){
    if (!username || !password){
      throw new CustomError("Invalid username or password", 401)    
    }

    const user = await this.userRepository.findByUsername(username)

    if (!user){
      throw new CustomError("Invalid username or password", 401)
    }

    const comparePasswordEquals = await this.passwordCrypto.comparePassword(password, user.password)

    if (!comparePasswordEquals){
      throw new CustomError("Invalid username or password", 401)
    }

    return user
  }
}