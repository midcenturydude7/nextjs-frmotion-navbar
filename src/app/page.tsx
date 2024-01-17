import Navbar from "./components/navbar/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div>
        <h1>welcome stranger.</h1>
        <p>click on that burger menu.</p>
      </div>
    </main>
  );
}
