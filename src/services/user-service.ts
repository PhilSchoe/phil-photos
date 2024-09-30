import { UserDAO } from "@/data-acess/user/user.dao";
import { User } from "@/lib/user";

export default class UserService {
  private static userDAO: UserDAO;

  public static init(userDAO: UserDAO) {
    UserService.userDAO = userDAO;
  }

  public static async createUser(user: User): Promise<User> {
    return await UserService.userDAO.createUser(user);
  }
}
