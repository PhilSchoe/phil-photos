"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import {
  getPutObjectUrlAction,
  uploadProjectAction,
} from "./uploadProjectAction";
import RestConnectionHandler from "@/data-acess/rest-connection-handler";
import { ImageItem } from "@/lib/image-item";

export default function createProject() {
  const [imageUrl, setImageUrl] = useState<string>("/vercel.svg");
  const [imageFile, setImageFile] = useState<File>();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImageUrl(fileReader.result as string);
    };

    setImageFile(event.target.files[0]);
    fileReader.readAsDataURL(event.target.files[0]);
  };

  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        if (imageFile == null) {
          alert("Error Uploading Project!");
          return;
        }

        getPutObjectUrlAction(imageFile.name, imageFile.size)
          .then((imageItem: ImageItem): Promise<ImageItem> => {
            RestConnectionHandler.put(imageItem.url, imageFile, imageFile.type);

            return Promise.resolve(imageItem);
          })
          .then((imageItem: ImageItem) => {
            uploadProjectAction(formData, imageItem).then(() => {
              form.reset();
              alert("Upload successful!");
            });
          })
          .catch((error: Error) => {
            console.error(error);
          });
      }}
    >
      <div className={styles.projectLayout}>
        <Image width={300} height={300} alt="Image" src={imageUrl} />
      </div>

      <div className={styles.uploadArea}>
        <div>Project Title: </div>
        <input type="text" name="title" />
        <div>Select Images:</div>
        <input type="file" accept="image/*" onChange={onFileChange} />
        <button type="submit">Create Project</button>
      </div>
    </form>
  );
}
