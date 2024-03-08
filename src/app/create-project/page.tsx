"use client";

import { FormEventHandler, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function createProject() {
  const [imageUrl, setImageUrl] = useState<string>("/vercel.svg");

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImageUrl(fileReader.result as string);
    };

    fileReader.readAsDataURL(event.target.files[0]);
  };

  // TODO: Check type for submit event
  const onSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get("title");

    console.log(title);
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
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
