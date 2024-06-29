import objectstoreDAOInstance from "@/data-acess/objectstore.dao";
import ImageCard from "./imageCard";
import styles from "./imageGallery.module.css";
import ProjectService from "@/services/project-service";

export default async function ImageGallery() {
  const images = [];

  for (let i = 0; i < 6; i++) {
    images.push(
      <ImageCard
        url={"https://picsum.photos/20" + i}
        fileName={"Title: " + i}
        fileSize={0}
        objectstoreId=""
      />
    );
  }

  const projects = await ProjectService.getProjects(true);

  for (let project of projects) {
    const image = project.images[0];
    const url = await objectstoreDAOInstance.getGetObjectUrl(
      image.objectstoreId
    );

    images.push(
      <ImageCard
        fileName={project.title}
        url={url}
        fileSize={image.fileSize}
        objectstoreId={image.objectstoreId}
      />
    );
  }

  return <div className={styles.imageGallery}>{images}</div>;
}
