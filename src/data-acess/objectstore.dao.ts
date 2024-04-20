import { MinioObjectStoreDAO } from "./minio-objectstore.dao";

export interface ObjectStoreDAO {
  getPutObjectUrl(filename: string): Promise<string>;
  getGetObjectUrl(filename: string): Promise<string>;
}

const objectstoreDAOInstance = new MinioObjectStoreDAO();
export default objectstoreDAOInstance;
