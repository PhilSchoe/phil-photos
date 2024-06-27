import { Project } from "@/lib/project";

export interface ProjectDAO {
  getProjects(includeImages: boolean): Promise<Project[]>;
  getProjectById(projectId: number, includeImages: boolean): Promise<Project>;
  createProject(project: Project): Promise<void>;
  // delete
}
