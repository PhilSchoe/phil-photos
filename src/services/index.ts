import { PrismaProjectDAO } from "@/data-acess/project/prisma-project.dao";
import ProjectService from "./project-service";

ProjectService.init(new PrismaProjectDAO());
export { ProjectService };
