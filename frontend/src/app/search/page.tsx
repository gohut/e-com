import Footer from "@/components/footer/Footer";
import FilterSidebar from "@/components/filters/FilterSidebar";
import Navbar from "@/components/navbar/Navbar";
import ProductGrid from "@/components/product/ProductGrid";
import styles from "./search-page.module.css";

export default function SearchPage() {
  return (
    <div className={styles.searchPage}>
      <div className={styles.desktopNav}>
        <Navbar />
      </div>

      <header className={styles.mobileTopBar}>
        <button aria-label="Go back" className={styles.mobileIconBtn}>
          &lt;
        </button>
        <div className={styles.mobileBrandBlock}>
          <div className={styles.mobileBrandRow}>
            <svg className={styles.mobileBrandIcon} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="2" y="2" width="40" height="40" rx="8" stroke="#111" strokeWidth="2" />
              <path d="M11 16.5H33" stroke="#111" strokeWidth="2" strokeLinecap="round" />
              <path d="M11 27.5H33" stroke="#111" strokeWidth="2" strokeLinecap="round" />
              <path d="M16.5 11V33" stroke="#111" strokeWidth="2" strokeLinecap="round" />
              <path d="M27.5 11V33" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h1>linen</h1>
          </div>
          <p>1067 results</p>
        </div>
        <div className={styles.mobileActions}>
          <button aria-label="Search" className={styles.mobileIconBtn}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="#111" strokeWidth="2" />
              <path d="M20 20L16.65 16.65" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button aria-label="Cart" className={styles.mobileIconBtn}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="4" y="6" width="16" height="15" rx="2" stroke="#111" strokeWidth="2" />
              <path d="M9 9C9 7.3 10.3 6 12 6C13.7 6 15 7.3 15 9" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.scrollArea}>
          <section className={styles.mobilePromo}>
            <article className={styles.promoCard}>
              <h3>10% OFF</h3>
              <p>On first order above Rs.1400</p>
              <button>CODE : NEW10</button>
            </article>
            <article className={styles.promoCard}>
              <h3>10% OFF</h3>
              <p>On first order above Rs.1400</p>
              <button>CODE : NEW10</button>
            </article>
          </section>

          <div className={styles.content}>
            <div className={styles.sidebarWrap}>
              <div className={styles.sidebarSticky}>
                <FilterSidebar />
              </div>
            </div>
            <ProductGrid />
          </div>
        </div>
      </main>

      <div className={styles.desktopFooter}>
        <Footer />
      </div>

      <div className={styles.mobileBottomBar}>
        <button className={styles.mobileBottomBtn} aria-label="Filter">
          <span>?</span>
          <span>Filter</span>
        </button>
        <button className={styles.mobileBottomBtn} aria-label="Sort">
          <span>?</span>
          <span>Sort</span>
        </button>
      </div>
    </div>
  );
}
