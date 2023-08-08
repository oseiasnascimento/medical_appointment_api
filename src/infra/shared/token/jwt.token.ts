import { sign } from 'jsonwebtoken';

import { User } from "../../../modules/users/entities/user.entity";
import { IToken } from "./token";

export class JWTToken implements IToken{
  create(user: User): string {
    throw new Error("Method not implemented.");
  }

}