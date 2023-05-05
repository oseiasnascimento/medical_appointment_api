import { createUserController } from '../modules/users/useCases/create-user';
import { Router } from 'express'

const userRouter = Router()

userRouter.post("/users", async (req, res) => {
  await createUserController.handle(req, res)
})

export { userRouter } 
