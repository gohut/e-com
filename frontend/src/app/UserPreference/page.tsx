import Navbar from "@/components/navbar/Navbar";
import styles from "../page.module.css";

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
