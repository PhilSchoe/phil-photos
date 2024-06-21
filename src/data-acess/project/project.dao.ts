import { Project } from "@/lib/project";

export interface ProjectDAO {
  getProjectById(projectId: number, includeImages: boolean): Promise<Project>;
  createProject(project: Project): Promise<void>;
  // delete
}
