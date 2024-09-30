import { User } from "@/lib/user";

export interface UserDAO {
  createUser(user: User): Promise<User>;
}
