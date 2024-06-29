import { Project } from "@/lib/project";
import { ProjectDAO } from "./project.dao";
import { Prisma } from "@prisma/client";
import prisma from "@/db/prisma";
import {
  mapPrismaProjectToProject,
  mapProjectToPrismaProject,
} from "./project-mapper";

export class PrismaProjectDAO implements ProjectDAO {
  /**
   * Retrieves projects from the database, optionally including images.
   *
   * @param {boolean} includeImages - Whether to include images in the result. Default is false.
   * @return {Promise<Project[]>} A promise that resolves to an array of projects.
   */
  public async getProjects(includeImages: boolean = false): Promise<Project[]> {
    const projectInclude = { images: includeImages };

    const prismaProjects = await prisma.project.findMany({
      include: projectInclude,
    });

    return prismaProjects.map((prismaProject) =>
      mapPrismaProjectToProject(prismaProject, includeImages)
    );
  }

  /**
   * Retrieves a project by its ID, optionally including images.
   *
   * @param {number} projectId - The ID of the project to retrieve.
   * @param {boolean} [includeImages=false] - Whether to include images in the result.
   * @return {Promise<Project>} A promise that resolves to the retrieved project.
   * @throws {Error} If the project with the specified ID is not found.
   */
  public async getProjectById(
    projectId: number,
    includeImages: boolean = false
  ): Promise<Project> {
    // Define the include object for Prisma query
    const projectInclude: Prisma.ProjectInclude = { images: includeImages };

    // Retrieve the project from the database
    const prismaProject = await prisma.project.findUnique({
      where: { id: projectId },
      include: projectInclude,
    });

    // If the project is not found, throw an error
    if (!prismaProject) {
      throw new Error(`Project with ID ${projectId} not found.`);
    }

    // Map the Prisma project object to a standard project object and return it
    return mapPrismaProjectToProject(prismaProject, includeImages);
  }

  /**
   * Creates a new project in the database.
   *
   * @param {Project} project - The project to create.
   * @return {Promise<void>} A promise that resolves when the project is created.
   */
  public async createProject(project: Project): Promise<void> {
    const prismaProject: Prisma.ProjectUncheckedCreateInput =
      mapProjectToPrismaProject(project);

    await prisma.project.create({ data: prismaProject });
  }
}
