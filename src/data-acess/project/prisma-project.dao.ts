import { Project } from "@/lib/project";
import { ProjectDAO } from "./project.dao";
import { Prisma } from "@prisma/client";
import prisma from "@/db/prisma";
import { mapPrismaProjectToProject } from "./project-mapper";

export class PrismaProjectDAO implements ProjectDAO {
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
  createProject(project: Project): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
