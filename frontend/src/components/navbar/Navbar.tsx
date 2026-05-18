import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <button aria-label="Open menu" className={styles.menu}>
          <span />
          <span />
          <span />
        </button>

        <div className={styles.brand}>
          <svg className={styles.brandIcon} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="2" y="2" width="40" height="40" rx="8" stroke="#111" strokeWidth="2" />
            <path d="M11 16.5H33" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            <path d="M11 27.5H33" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            <path d="M16.5 11V33" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            <path d="M27.5 11V33" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className={styles.brandText}>NAME</span>
        </div>

        <div className={styles.right}>
          <div className={styles.search}>
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="#111" strokeWidth="2" />
              <path d="M20 20L16.65 16.65" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>Search.....</span>
          </div>

          <button aria-label="Profile" className={styles.iconBtn}>
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.5 12 16.5 10 16.5 7.5C16.5 5 14.5 3 12 3C9.5 3 7.5 5 7.5 7.5C7.5 10 9.5 12 12 12Z" stroke="#111" strokeWidth="2" />
              <path d="M4 21C4.8 17.8 7.5 16 12 16C16.5 16 19.2 17.8 20 21" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <button aria-label="Cart" className={styles.iconBtn}>
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="6" width="16" height="15" rx="2" stroke="#111" strokeWidth="2" />
              <path d="M9 9C9 7.3 10.3 6 12 6C13.7 6 15 7.3 15 9" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
