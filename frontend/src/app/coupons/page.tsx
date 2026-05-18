import Link from "next/link";
import AccountSidebar from "@/components/account-sidebar/AccountSidebar";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import styles from "./coupons-page.module.css";

const coupons = Array.from({ length: 10 }, (_, idx) => ({
  id: idx + 1,
  title: "15% Off",
  line1: "Upto 85% on min.",
  line2: "purchase of ₹399",
  code: "NORETURNX",
  expiry: "31 Dec 2026",
}));

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.copyIcon} aria-hidden="true">
      <path fill="currentColor" d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10V1Zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H10V7h9v14Z"/>
    </svg>
  );
}

export default function CouponsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.desktopOnly}>
        <Navbar />
      </div>

      <header className={styles.mobileHeader}>
        <button aria-label="Go back" className={styles.mobileBack}>
          &lt;
        </button>
        <h1>COUPONS</h1>
        <span />
      </header>

      <main className={styles.main}>
        <div className={styles.scrollArea}>
          <h1 className={styles.pageTitle}>COUPONS</h1>

          <div className={styles.toolbar}>
            <div className={styles.tabs}>
              <Link href="/gift-cards" className={styles.tabItem}>Giftcards</Link>
              <Link href="/coupons" className={`${styles.tabItem} ${styles.activeTab}`}>Coupons</Link>
            </div>

            <div className={styles.sortWrap}>
              <span>Sort by</span>
              <button className={styles.sortBtn}>
                Expiry Date
                <span>⌄</span>
              </button>
            </div>
          </div>

          <section className={styles.contentWrap}>
            <div className={styles.sidebarWrap}>
              <AccountSidebar activeItem="Gift Cards & Coupons" />
            </div>

            <section className={styles.couponsGrid}>
              {coupons.map((coupon) => (
                <article key={coupon.id} className={styles.couponCard}>
                  <div className={styles.couponImage}>
                    <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&h=800&q=80" alt="Coupon" />
                  </div>

                  <div className={styles.couponInfo}>
                    <h3>{coupon.title}</h3>
                    <p>{coupon.line1}</p>
                    <p>{coupon.line2}</p>

                    <div className={styles.codeRow}>
                      <span>Code: <strong>{coupon.code}</strong></span>
                      <CopyIcon />
                    </div>

                    <div className={styles.expiryRow}>
                      <span>Expiry: <strong>{coupon.expiry}</strong></span>
                    </div>

                    <div className={styles.viewRow}>
                      <span>View Products</span>
                      <span className={styles.arrow}>&gt;</span>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </section>
        </div>
      </main>

      <div className={styles.desktopOnly}>
        <Footer />
      </div>

      <div className={styles.mobileBottomBar}>
        <button className={styles.mobileBottomBtn}>
          <span>⎚</span>
          <span>Filter</span>
        </button>
        <button className={styles.mobileBottomBtn}>
          <span>↕</span>
          <span>Sort</span>
        </button>
      </div>
    </div>
  );
}
