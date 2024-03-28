"use server";

import prisma from "@/db/prisma";

export async function uploadProjectAction(formData: FormData) {
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
}
