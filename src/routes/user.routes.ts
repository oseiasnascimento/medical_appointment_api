import { createUserController } from '../modules/users/useCases/create-user';
import { Router } from 'express'

const userRouter = Router()

userRouter.post("/users", createUserController.handle)

export { userRouter } 
