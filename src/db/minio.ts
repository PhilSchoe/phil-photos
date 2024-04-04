import * as Minio from "minio";

const config = {
  endPoint: "localhost",
  port: 9000,
  useSSL: false,
  accessKey: process.env.MINIO_ACCESS_KEY as string,
  secretKey: process.env.MINIO_SECRET_KEY as string,
};

declare global {
  // Only var works here
  var minioClient: Minio.Client;
}

let minioClient: Minio.Client;

if (process.env.NODE_ENV === "production") {
  minioClient = new Minio.Client(config);
} else {
  if (!global.minioClient) {
    global.minioClient = new Minio.Client(config);
  }
  minioClient = global.minioClient;
}

export default minioClient;
