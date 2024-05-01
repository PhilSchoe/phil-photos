"use client";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";
import Button from "@/ui/components/button/button";

export default function Header() {
  const router = useRouter();

  return (
    <div className={`${styles.headerContent} ${styles.headerBorder}`}>
      <Button
        title="Create Project"
        type="button"
        onClick={() => router.push("/create-project")}
      />
      <div className={styles.title}>Phil-Photos</div>
      <div>
        <Button title="Sign In" type="button" onClick={() => {}} />
        <Button title="Sign Up" type="button" onClick={() => {}} />
      </div>
    </div>
  );
}
