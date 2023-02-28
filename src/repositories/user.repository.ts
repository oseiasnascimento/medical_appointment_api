import { User } from "../entities/user.entity";

export class UserRepository{

  users: User[] = [];

  async findByUsername(username:string){

  }
}