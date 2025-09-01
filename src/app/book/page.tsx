import styles from "./book.module.css";

export default function BookPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>עמוד הזמנת תור 📅</h1>

      <div className={styles.row}>
        <span className={styles.label}>בחר מדריך:</span>
        <button className={styles.btn}>מדריך 1</button>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>בחר שירות:</span>
        <button className={styles.btn}>שיעור ניסיון</button>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>בחר תאריך:</span>
        <button className={styles.btn}>1 בספטמבר</button>
      </div>
    </main>
  );
}
