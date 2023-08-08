import { Request, Response } from "express";
import { AuthenticateUserCase } from "./authenticate-user.usecase";
import { IUserRepository } from "../../repositories/user.repository";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";

export class AuthenticateUserController {

  constructor( 
    private userRepository: IUserRepository, 
    private passwordCrypto: IPasswordCrypto
  ){}
  
  async handle(request: Request, response: Response){
    try {
      const data = request.body;

      const authenticateUseCase = new AuthenticateUserCase(this.userRepository, this.passwordCrypto)

      const result = await authenticateUseCase.execute(data)

      return response.json(result)

    } catch (err: any) {  
      return response.status(err.statusCode).json({
        error: err.message
      })
    }
  }
}