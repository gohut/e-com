import ProductCard, { type Product } from "./ProductCard";
import styles from "./ProductGrid.module.css";

const products: Product[] = [
  {
    id: 1,
    title: "100% Cotton Black Slim Fit Shirt",
    price: "₹999",
    originalPrice: "₹1999",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    title: "100% Cotton Slim Fit Shirt",
    price: "₹629",
    originalPrice: "₹699",
    image:
      "https://images.unsplash.com/photo-1646176724329-8a12512df18b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Women Printed Shirt",
    price: "₹999",
    originalPrice: "₹1999",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    title: "Grey Stripes Slim Fit Luxe Shirt",
    price: "₹999",
    originalPrice: "₹1999",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=80",
  },
];

const repeated = Array.from({ length: 12 }, (_, index) => ({
  ...products[index % products.length],
  id: index + 1,
}));

export default function ProductGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div>
          <h1 className={styles.title}>Search Results - "Shirts"</h1>
          <p className={styles.subtitle}>1908 results found</p>
        </div>
        <button aria-label="Collapse filters" className={styles.back}>
          &lt;
        </button>
      </div>

      <div className={styles.grid}>
        {repeated.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
