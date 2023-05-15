import { createSpecialityController } from '../modules/speciality/usecases/create-speciality';
import { Router } from 'express'

const specialityRouter = Router()

specialityRouter.post("/specialities", async (req, res) => {
  await createSpecialityController.handle(req, res)
})

export { specialityRouter } 
