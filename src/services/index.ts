import { PrismaProjectDAO } from "@/data-acess/project/prisma-project.dao";
import ProjectService from "./project-service";
import { MinioObjectStoreDAO } from "@/data-acess/minio-objectstore.dao";
import ObjectStoreService from "./object-store-service";

ProjectService.init(new PrismaProjectDAO());
export { ProjectService };

ObjectStoreService.init(new MinioObjectStoreDAO());
export { ObjectStoreService };
