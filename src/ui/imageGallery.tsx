import objectstoreDAOInstance from "@/data-acess/objectstore.dao";
import ImageCard from "./imageCard";
import styles from "./imageGallery.module.css";
import prisma from "@/db/prisma";

export default async function ImageGallery() {
  const images = [];

  for (let i = 0; i < 6; i++) {
    images.push(
      <ImageCard
        id={i}
        url={"https://picsum.photos/20" + i}
        title={"Title: " + i}
      />
    );
  }

  const projects = await prisma.project.findMany({ include: { images: true } });
  for (let project of projects) {
    const image = project.images[0];
    const url = await objectstoreDAOInstance.getGetObjectUrl(
      image.objectstoreId
    );

    images.push(<ImageCard id={project.id} title={project.title} url={url} />);
  }

  return <div className={styles.imageGallery}>{images}</div>;
}
