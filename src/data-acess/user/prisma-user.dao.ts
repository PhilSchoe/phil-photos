import { User } from "@/lib/user";
import { Prisma } from "@prisma/client";
import { UserDAO } from "./user.dao";
import { mapPrismaUserToUser, mapUserToPrismaUser } from "./user-mapper";

export class PrismaUserDAO implements UserDAO {
  public async createUser(user: User): Promise<User> {
    const prismaUser = mapUserToPrismaUser(user);

    const returnedPrismaUser = await prisma.user.create({ data: prismaUser });

    return mapPrismaUserToUser(returnedPrismaUser);
  }
}
