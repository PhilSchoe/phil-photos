import { User } from "@/lib/user";
import { Prisma } from "@prisma/client";

export function mapUserToPrismaUser(
  user: User
): Prisma.UserUncheckedCreateInput {
  const { name, email, password } = user;
  return {
    name: name,
    email: email,
    password_hash: password ? password : "",
  };
}

export function mapPrismaUserToUser(
  prismaUser: Prisma.UserGetPayload<{ include: {} }>
): User {
  const { id, name, email } = prismaUser;
  return {
    id: id,
    name: name,
    email: email,
  };
}
