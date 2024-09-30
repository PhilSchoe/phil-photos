"use server";

import { lucia } from "@/auth/auth";
import { UserService } from "@/services";
import { hash } from "@node-rs/argon2";
import { ActionResult } from "next/dist/server/app-render/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signup(formData: FormData): Promise<ActionResult> {
  const username = formData.get("username");

  console.log("Username");
  console.log(username);

  // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
  // keep in mind some database (e.g. mysql) are case insensitive
  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 //||
    //!/^[a-z0-9_-]+$/.test(username)
  ) {
    console.log("Invalid username");
    return {
      error: "Invalid username",
    };
  }
  const password = formData.get("password");

  console.log("Password");
  console.log(password);

  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: "Invalid password",
    };
  }

  const passwordHash = await hash(password, {
    // recommended minimum parameters
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  const user = await UserService.createUser({
    name: username,
    email: "test@test.de",
    password: passwordHash,
  });

  const userId = String(user.id);

  console.log("UserID");
  console.log(userId);

  const session = await lucia.createSession(user.id as any, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/");
}
