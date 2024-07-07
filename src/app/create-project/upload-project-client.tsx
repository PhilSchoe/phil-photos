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
    // Use object store service to get put-object-url for image

    const { objectstoreId, url } = await getPutObjectUrlAction(imageFile.name);

    // Use image service to upload image

    const response = await RestConnectionHandler.put(
      url,
      imageFile,
      imageFile.type
    );

    if (!response.ok) {
      throw new Error("Image upload failed! Project creation is aborted!");
    }

    const image = {
      fileName: imageFile.name,
      fileSize: imageFile.size,
      objectstoreId: objectstoreId,
      url: url,
    };

    // Use project service in react server action to upload project

    await uploadProjectAction(formData, image);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
