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

    const minioDefaultBucket = process.env.MINIO_DEFAULT_BUCKET as string;

    if (!minioDefaultBucket) {
      throw new Error("Missing MINIO default bucket!");
    }

    global.minioClient
      .bucketExists(minioDefaultBucket)
      .then((exists: boolean) => {
        if (exists) {
          console.log(
            `Default MINIO Bucket ${minioDefaultBucket} is existing!`
          );
        } else {
          console.log(`Creating default MINIO Bucket ${minioDefaultBucket}!`);
          global.minioClient.makeBucket(minioDefaultBucket, "eu-central-1");
        }
      });
  }
  minioClient = global.minioClient;
}

export default minioClient;
