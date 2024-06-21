import { Project } from "@/lib/project";
import { Prisma } from "@prisma/client";
import { Image } from "@/lib/image";

/**
 * Maps a Prisma project object to a standard project object.
 * If includeImages is set to false, the images array will be empty.
 *
 * @param {Prisma.ProjectGetPayload<{ include: { images: boolean } }>} prismaProject - The Prisma project object to be mapped.
 * @param {boolean} includeImages - Whether to include the images in the result.
 * @return {Project} The mapped project object.
 */
export function mapPrismaProjectToProject(
  prismaProject: Prisma.ProjectGetPayload<{ include: { images: boolean } }>,
  includeImages: boolean
): Project {
  const { id, authorId, title, images } = prismaProject;

  // Return the mapped project object.
  return {
    id,
    authorId,
    title,
    images: includeImages ? images : [],
  };
}
