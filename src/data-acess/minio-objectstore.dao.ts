import { ObjectStoreDAO } from "./objectstore.dao";
import minioClient from "@/db/minio";

export class MinioObjectStoreDAO implements ObjectStoreDAO {
  async getPutObjectUrl(filename: string): Promise<string> {
    const url = await minioClient.presignedPutObject(
      process.env.MINIO_DEFAULT_BUCKET as string,
      filename
    );

    return url;
  }

  async getGetObjectUrl(filename: string): Promise<string> {
    const url = await minioClient.presignedGetObject(
      process.env.MINIO_DEFAULT_BUCKET as string,
      filename
    );

    return url;
  }
}
