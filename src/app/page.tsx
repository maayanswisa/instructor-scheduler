import Link from "next/link";
import styles from "./home.module.css";


export default function Home() {
  return (
    <main className={styles.container}>


      <h1 className="text-3xl font-bold">ברוכים הבאים לאתר ניהול תורים 🎉</h1>
      <Link href="/book" className="rounded-md border px-4 py-2 hover:bg-black/5">לעמוד ההזמנה →</Link>

    </main>
  );
}
