import { Image } from "./image";

export interface Project {
  id?: number;
  authorId: number;
  title: string;
  images: Image[];
}
