import RestConnectionHandler from "@/data-acess/rest-connection-handler";
import {
  getPutObjectUrlAction,
  uploadProjectAction,
} from "./uploadProjectAction";

export async function uploadProjectClientAction(
  imageFile: File,
  formData: FormData
) {
  try {
    const imageItem = await getPutObjectUrlAction(
      imageFile.name,
      imageFile.size
    );

    const response = await RestConnectionHandler.put(
      imageItem.url,
      imageFile,
      imageFile.type
    );

    if (!response.ok) {
      throw new Error("Image upload failed! Project creation is aborted!");
    }

    await uploadProjectAction(formData, imageItem);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
