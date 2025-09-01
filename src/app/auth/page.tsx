export default function AuthPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "grid", gap: "16px", textAlign: "center" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 600 }}>בחרי תפקיד</h1>
        <a href="/dashboard/teacher" style={{ border: "1px solid #ddd", padding: "8px 12px", borderRadius: 8, textDecoration: "none", color: "inherit" }}>
          כניסת מורה
        </a>
        <a href="/dashboard/student" style={{ border: "1px solid #ddd", padding: "8px 12px", borderRadius: 8, textDecoration: "none", color: "inherit" }}>
          כניסת תלמיד
        </a>
      </div>
    </main>
  );
}
