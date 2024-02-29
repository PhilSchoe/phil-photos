import ImageCard from "./imageCard";

export default function ImageGallery() {
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

  return <div>{images}</div>;
}
