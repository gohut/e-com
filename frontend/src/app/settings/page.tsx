import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import styles from "./settings-page.module.css";

const overviewItems = [
  "Profile",
  "Orders",
  "Wishlist",
  "Addresses",
  "Gift Cards & Coupons",
  "Settings",
  "Preferences",
  "Terms and Conditions",
  "Cards & UPI",
];

const settingsItems = [
  "Privacy Policy",
  "About Us",
  "Delete Account",
  "Return/Exchange Policy",
];

export default function SettingsPage() {
  const mobileItems = [
    "Privacy Policy",
    "About Us",
    "User Preferences",
    "Logout",
    "Delete Account",
    "Terms & Conditions",
    "Return/Exchange Policy",
  ];

  return (
    <div className={styles.page}>
      <div className={styles.desktopOnly}>
        <Navbar />
      </div>

      <header className={styles.mobileHeader}>
        <button aria-label="Go back" className={styles.mobileBack}>
          &lt;
        </button>
        <h1>SETTINGS</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.layout}>
          <aside className={styles.leftPanel}>
            <h2>OVERVIEW</h2>
            <ul>
              {overviewItems.map((item) => (
                <li key={item} className={item === "Settings" ? styles.activeRow : ""}>
                  <span>{item}</span>
                  <span className={styles.arrow}>&gt;</span>
                </li>
              ))}
            </ul>

            <button className={styles.logoutBtn}>LOG OUT</button>
          </aside>

          <section className={styles.rightPanel}>
            <h2>SETTINGS</h2>
            <ul>
              {settingsItems.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                  <span className={styles.arrow}>&gt;</span>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className={styles.mobileListWrap}>
          <ul className={styles.mobileList}>
            {mobileItems.map((item) => (
              <li key={item}>
                <span>{item}</span>
                <span>&gt;</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <div className={styles.desktopOnly}>
        <Footer />
      </div>
    </div>
  );
}

