"use server";

import { revalidatePath } from "next/cache";
import { ObjectStoreService, ProjectService } from "@/services";
import { ImageItem } from "@/lib/image-item";

export async function uploadProjectAction(
  formData: FormData,
  imageItem: ImageItem
) {
  const title = formData.get("title") as string;

  await ProjectService.createProject({
    authorId: 1,
    title: title,
    images: [
      {
        fileName: imageItem.fileName,
        fileSize: imageItem.fileSize,
        objectstoreId: imageItem.objectstoreId,
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
