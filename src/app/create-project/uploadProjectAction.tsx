"use server";

import { revalidatePath } from "next/cache";
import { ObjectStoreService, ProjectService } from "@/services";
import { Image } from "@/lib/image";

export async function uploadProjectAction(formData: FormData, image: Image) {
  const title = formData.get("title") as string;

  await ProjectService.createProject({
    authorId: 1,
    title: title,
    images: [
      {
        fileName: image.fileName,
        fileSize: image.fileSize,
        objectstoreId: image.objectstoreId,
      },
    ],
  });

  revalidatePath("/");
}

export async function getPutObjectUrlAction(filename: string): Promise<{
  objectstoreId: string;
  url: string;
}> {
  try {
    return ObjectStoreService.getPutObjectUrl(filename);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
