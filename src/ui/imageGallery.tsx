import ImageCard from "./imageCard";
import styles from "./imageGallery.module.css";
import { ObjectStoreService, ProjectService } from "@/services";

export default async function ImageGallery() {
  const images = [];

  for (let i = 0; i < 6; i++) {
    images.push(
      <ImageCard
        url={"https://picsum.photos/20" + i}
        projectName={"Title: " + i}
        key={"Title: " + i}
      />
    );
  }

  const projects = await ProjectService.getProjects(true);

  for (let project of projects) {
    const image = project.images[0];
    const url = await ObjectStoreService.getGetObjectUrl(image.objectstoreId);

    images.push(
      <ImageCard projectName={project.title} url={url} key={project.id} />
    );
  }

  return <div className={styles.imageGallery}>{images}</div>;
}
