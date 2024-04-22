"use server";

import prisma from "@/db/prisma";
import { revalidatePath } from "next/cache";
import objectstoreDAOInstance from "@/data-acess/objectstore.dao";
import { nanoid } from "nanoid";
import { ImageItem } from "@/lib/image-item";

export async function uploadProjectAction(
  formData: FormData,
  imageItem: ImageItem
) {
  const title = formData.get("title") as string;

  await prisma.project.create({
    data: {
      authorId: 1,
      title: title,
      images: {
        create: [
          {
            fileName: imageItem.fileName,
            fileSize: imageItem.fileSize,
            objectstoreId: imageItem.objectstoreId,
          },
        ],
      },
    },
  });

  revalidatePath("/");
}

export async function getPutObjectUrlAction(
  fileName: string,
  fileSize: number
): Promise<ImageItem> {
  try {
    const objectstoreId = `${nanoid()}-${fileName}`;
    const url = await objectstoreDAOInstance.getPutObjectUrl(objectstoreId);

    return {
      fileName,
      fileSize,
      objectstoreId,
      url,
    };
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
