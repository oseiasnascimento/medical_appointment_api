import { CreateUserController } from './../useCases/create-user/create-user.controller';
import { Router } from 'express'

const userRouter = Router()

const createUserController = new CreateUserController()

userRouter.post("/users", createUserController.handle)

export { userRouter } 
