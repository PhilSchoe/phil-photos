import { ObjectStoreDAO } from "../data-acess/objectstore.dao";
import { nanoid } from "nanoid";

export default class ObjectStoreService {
  private static objectStoreDAO: ObjectStoreDAO;

  public static init(objectStoreDAO: ObjectStoreDAO) {
    ObjectStoreService.objectStoreDAO = objectStoreDAO;
  }

  public static async getPutObjectUrl(
    filename: string
  ): Promise<{ objectstoreId: string; url: string }> {
    const objectstoreId = `${nanoid()}-${filename}`;
    const url = await ObjectStoreService.objectStoreDAO.getPutObjectUrl(
      objectstoreId
    );

    return { objectstoreId, url };
  }

  public static async getGetObjectUrl(objectstoreId: string) {
    return ObjectStoreService.objectStoreDAO.getGetObjectUrl(objectstoreId);
  }
}
