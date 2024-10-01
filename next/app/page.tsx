"use client";

import HelloMui from "./components/HelloMui";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HelloMui />
    </div>
  );
}
