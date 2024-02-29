import { ImageItem } from "../lib/imageItem";
import Image from "next/image";

export default function ImageCard({ url, title }: ImageItem) {
  return (
    <div>
      <Image src={url} alt="Card Image" width="200" height="200" />
      <div>{title}</div>
    </div>
  );
}
