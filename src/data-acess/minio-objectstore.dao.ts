import { ObjectStoreDAO } from "./objectstore.dao";
import minioClient from "@/db/minio";

export class MinioObjectStoreDAO implements ObjectStoreDAO {
  public async getPutObjectUrl(objectstoreId: string): Promise<string> {
    const url = await minioClient.presignedPutObject(
      process.env.MINIO_DEFAULT_BUCKET as string,
      objectstoreId
    );

    return url;
  }

  public async getGetObjectUrl(objectstoreId: string): Promise<string> {
    const url = await minioClient.presignedGetObject(
      process.env.MINIO_DEFAULT_BUCKET as string,
      objectstoreId
    );

    return url;
  }
}
