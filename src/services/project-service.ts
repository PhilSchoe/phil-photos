import { ProjectDAO } from "@/data-acess/project/project.dao";
import { Project } from "@/lib/project";

export default class ProjectService {
  private static projectDAO: ProjectDAO;

  public static init(projectDAO: ProjectDAO) {
    ProjectService.projectDAO = projectDAO;
  }

  public static async createProject(project: Project): Promise<void> {
    ProjectService.projectDAO.createProject(project);
  }

  public static async getProjects(
    includeImages: boolean = false
  ): Promise<Project[]> {
    return ProjectService.projectDAO.getProjects(includeImages);
  }
}
