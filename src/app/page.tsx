import Image from "next/image";
import styles from "./page.module.css";
import ImageGallery from "../ui/imageGallery";
import { PrismaProjectDAO } from "@/data-acess/project/prisma-project.dao";
import ProjectService from "@/services/project-service";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageGallery />
    </main>
  );
}
