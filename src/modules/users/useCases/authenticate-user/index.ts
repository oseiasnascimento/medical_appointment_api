import { PasswordBcrypt } from './../../../../infra/shared/crypto/password.bcrypt'
import { UserPrismaRepository } from './../../repositories/implementations/user.prisma.repository'
import { AuthenticateUserController } from './authenticate-user.controller'

const userPrismaRepository = new UserPrismaRepository()
const passwordBcrypt = new PasswordBcrypt()

const authenticateUserController = new AuthenticateUserController(
  userPrismaRepository,
  passwordBcrypt
)

export { authenticateUserController }
