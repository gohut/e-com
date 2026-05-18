import styles from "./FilterSidebar.module.css";

const filters = [
  "Size",
  "Promotions",
  "Color",
  "Discount",
  "Design",
  "Gender",
  "Sleeve Length",
  "Fit",
  "Fabric",
];

export default function FilterSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <h2>Filters</h2>
        <button className={styles.clear}>Clear All</button>
      </div>

      <div className={styles.priceBlock}>
        <h3>Price</h3>
        <div className={styles.track}>
          <span className={styles.line} />
          <span className={`${styles.dot} ${styles.left}`} />
          <span className={`${styles.dot} ${styles.right}`} />
        </div>
        <p className={styles.range}>₹299 - ₹12999</p>
      </div>

      <div className={styles.list}>
        {filters.map((item) => (
          <div key={item} className={styles.row}>
            <span>{item}</span>
            <span>+</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
