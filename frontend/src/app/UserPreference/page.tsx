import type { ReactNode } from "react";
import styles from "../page.module.css";

type IconButtonProps = {
  label: string;
  children: ReactNode;
};

const sideMenuItems = [
  "OVERVIEW",
  "PROFILE",
  "ORDERS",
  "WHISHLIST",
  "ADDRESSES",
  "REFUNDS",
  "GIFT CARDS",
  "RATE AND REVIEW",
  "SETTINGS",
  "SHOPS NEAR ME",
  "SWITCH TO PLUS STORE",
  "CREATE AND EARN",
];

const preferenceGroups = [
  {
    title: "BASIC PREFERENCES",
    items: ["Size", "Color", "Price Range", "Brand", "Category", "Sub - Category"],
  },
  {
    title: "FIT & STYLE PREFERENCES",
    items: ["Fit", "Sleeve", "Length", "Neck Type", "Pattern", "Occasion"],
  },
  {
    title: "MATERIAL & COMFORT PREFERENCES",
    items: ["Fabric", "Strechability", "Season"],
  },
];

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
          <input type="search" placeholder="Search...." />
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

function MobileHeader() {
  return (
    <header className={styles.mobilePreferenceHeader}>
      <button className={styles.mobilePreferenceBackButton} type="button" aria-label="Go back">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <h1 className={styles.mobilePreferenceHeaderTitle}>GIFT CARDS</h1>
    </header>
  );
}

function UserPreference() {
  return (
    <section className={styles.userPreferenceSection}>
      <div className={styles.userPreferenceLayout}>
        <aside className={styles.userPreferenceSidebar}>
          {sideMenuItems.map((item, index) => (
            <button key={item} type="button" className={styles.userPreferenceNavItem}>
              <span className={index === 0 ? styles.userPreferenceActive : undefined}>{item}</span>
              {index === 0 ? null : <span aria-hidden="true">&#8250;</span>}
            </button>
          ))}
        </aside>

        <div className={styles.userPreferenceContent}>
          <h1 className={styles.userPreferenceTitle}>USER PREFERENCES</h1>

          {preferenceGroups.map((group) => (
            <section key={group.title} className={styles.userPreferenceGroup}>
              <h2 className={styles.userPreferenceGroupTitle}>{group.title}</h2>
              <div className={styles.userPreferenceRows}>
                {group.items.map((item) => (
                  <button key={item} type="button" className={styles.userPreferenceRow}>
                    <span>{item}</span>
                    <span aria-hidden="true">+</span>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={`${styles.page} ${styles.userPreferencePage}`}>
      <main className={`${styles.main} ${styles.userPreferenceMain}`}>
        <Navbar />
        <MobileHeader />
        <UserPreference />
      </main>
    </div>
  );
}
