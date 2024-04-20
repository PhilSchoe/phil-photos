"use server";

import prisma from "@/db/prisma";
import { revalidatePath } from "next/cache";
import objectstoreDAOInstance from "@/data-acess/objectstore.dao";

export async function uploadProjectAction(
  formData: FormData,
  objectstoreId: string
) {
  const title = formData.get("title") as string;

  const project = await prisma.project.create({
    data: {
      authorId: 1,
      title: title,
      images: {
        create: [{ source: "https://picsum.photos/200" }],
      },
    },
  });

  revalidatePath("/");
}

export async function getPutObjectUrlAction(filename: string): Promise<string> {
  try {
    const url = await objectstoreDAOInstance.getPutObjectUrl(filename);

    return url;
  } catch (error) {
    console.error(error);
    return error as string;
  }
}
