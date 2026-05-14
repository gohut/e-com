export default function DashboardGiftCardsPage() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Gift Cards</h1>
      <p>This is the gift cards route (`/dashboard/gift-cards`).</p>
    </main>
  );
}



"use client"
import styles from "./page.module.css";

type IconButtonProps = {
  label: string;
  children: React.ReactNode;
};

function IconButton({ label, children }: IconButtonProps) {
  return (
    <button className={styles.iconButton} type="button" aria-label={label}>
      {children}
    </button>
  );
}
function Navbar() {
  return (
    <header className={styles.navbar}>
      <button
        className={`${styles.iconButton} ${styles.hamburgerButton}`}
        type="button"
        aria-label="Open menu"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <div className={styles.brand}>
        <span className={styles.brandLogo} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M4 12h16M12 4v16M7 7l10 10M17 7L7 17" />
          </svg>
        </span>
        <span className={styles.brandName}>NAME</span>
      </div>

      <div className={styles.navActions}>
        <label className={styles.searchField}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6" />
            <path d="M20 20l-4.2-4.2" />
          </svg>
          <input type="search" placeholder="Search..." />
        </label>

        <IconButton label="Open profile">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 19c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5" />
          </svg>
        </IconButton>

        <IconButton label="Open cart">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 7h10l-1 11H8L7 7z" />
            <path d="M9 7a3 3 0 016 0" />
          </svg>
        </IconButton>
      </div>
    </header>
  );
}