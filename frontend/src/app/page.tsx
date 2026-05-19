import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import styles from "./home-page.module.css";

type Tile = {
  title: string;
  image: string;
};

type Product = {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  image: string;
};

const topNavItems = [
  "Discover",
  "Shirtz",
  "T-Shirts",
  "Jeans",
  "Dress",
  "Cargo Pants",
  "Shoes",
  "Overshirt",
  "Plus-Size",
  "Shorts",
  "Sunglasses",
  "Perfumes",
];

const featured: Tile[] = [
  { title: "MAXI DRESSES", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=80" },
  { title: "STREET WEAR", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80" },
  { title: "BAGGY FITS", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80" },
  { title: "SUMMER FITS", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80" },
];

const occasional: Tile[] = [
  { title: "Effortless Everyday Fits", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=400&q=80" },
  { title: "Cozy Layers", image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=400&q=80" },
  { title: "Breezy Summer", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80" },
  { title: "Street Ready", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80" },
  { title: "Sharp Looks", image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=400&q=80" },
  { title: "Elegant Steps", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" },
  { title: "Formal Staples", image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=400&q=80" },
];

const products: Product[] = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  title: [
    "Modern Cotton Shirt",
    "Relaxed Slim Fit Tee",
    "Women Printed Shirt",
    "Linen Stripe Shirt",
    "Polo Cotton T-Shirt",
    "Black Slim Fit Shirt",
    "Vintage Printed Shirt",
    "Oversized Cotton Tee",
  ][index % 8],
  price: ["Rs 999", "Rs 1299", "Rs 899", "Rs 1499"][index % 4],
  oldPrice: ["1399", "1899", "1199", "2099"][index % 4],
  image: [
    "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1603252109360-909baaf261c7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80",
  ][index % 8],
}));

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <div className={styles.noticeBar}>Enter Hoodies to unlock deals</div>

      <div className={styles.topNav}>
        {topNavItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <section className={styles.hero}>
        <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1300&q=80" alt="Handbag hero" />
        <div className={styles.heroText}>
          <h1>HANDBAGS</h1>
          <p>Min. 60% off</p>
          <button type="button">Explore</button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>FEATURED CATEGORIES</h2>
        <div className={styles.featuredGrid}>
          {featured.map((item) => (
            <article key={item.title} className={styles.featuredCard}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>OCCASSIONAL WEARS</h2>
        <div className={styles.occasionGrid}>
          {occasional.map((item) => (
            <article key={item.title} className={styles.occasionCard}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>SHOP YOUR SIZE</h2>
        <div className={styles.banner}>
          <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1600&q=80" alt="Shop your size banner" />
          <div>
            <p>Last chance!</p>
            <h3>UP TO 30% OFF*</h3>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>SHOP YOUR SIZE</h2>
        <div className={styles.sizeCards}>
          {[
            "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80",
          ].map((src, idx) => (
            <img key={idx} src={src} alt="Size promo" />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>NEW AND POPULAR</h2>
        <div className={styles.chips}>
          {["ALL", "SHIRT", "T-SHIRT", "JEANS", "TROUSERS", "PERFUMES", "SHORTS"].map((chip) => (
            <button key={chip} type="button">{chip}</button>
          ))}
        </div>

        <div className={styles.productGrid}>
          {products.map((product) => (
            <article key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>
                {product.price} <span>{product.oldPrice}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
