import { createUserController } from '../modules/users/useCases/create-user';
import { authenticateUserController } from '../modules/users/useCases/authenticate-user';
import { Router } from 'express'

const userRouter = Router()

userRouter.post("/users", async (req, res) => {
  await createUserController.handle(req, res)
})

userRouter.post("/login", async (req, res) => {
  await authenticateUserController.handle(req, res)
})

export { userRouter } 
