import Hello_world from "./components/Hello_world";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hello_world />
    </div>
  );
}
