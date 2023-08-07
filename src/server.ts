import express from 'express'
import { userRouter } from './routes/user.routes'
import { specialityRouter } from './routes/speciality.routes'

import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'

const app = express()

const hostname = 'localhost'//'127.0.0.1'
const port = 3333

app.use(express.json())

app.use("/docs",swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(userRouter)
app.use(specialityRouter)

app.get('/', (req, res) => {
  return res.send('Hello World')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
