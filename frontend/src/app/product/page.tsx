import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ProductCard, { type Product } from "@/components/product/ProductCard";
import styles from "./product-page.module.css";

const relatedProducts: Product[] = [
  { id: 1, title: "100% Cotton Black Slim Fit Shirt", price: "₹999", originalPrice: "₹1999", image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=700&q=80" },
  { id: 2, title: "100% Cotton Collared Polo T Shirt", price: "₹649", originalPrice: "₹1199", image: "https://images.unsplash.com/photo-1593032465171-8bd0a8d0f93e?auto=format&fit=crop&w=700&q=80" },
  { id: 3, title: "100% Cotton Slim Fit Shirt", price: "₹629", originalPrice: "₹699", image: "https://images.unsplash.com/photo-1646176724329-8a12512df18b?q=80&w=1965&auto=format&fit=crop" },
  { id: 4, title: "Women Printed Shirt", price: "₹999", originalPrice: "₹1999", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80" },
  { id: 5, title: "Grey Stripes Slim Fit Luxe Shirt", price: "₹999", originalPrice: "₹1999", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=80" },
  { id: 6, title: "Slim Fit Striped Textured Shirt", price: "₹849", originalPrice: "₹1299", image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=700&q=80" },
];

const gallery = [
  "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&w=900&q=80",
];

const repeated = Array.from({ length: 12 }, (_, index) => ({ ...relatedProducts[index % relatedProducts.length], id: index + 100 }));

export default function ProductPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.topNav}>{["Belanser", "Shirts", "T-shirts", "Jeans", "Trouser", "Cargo Pants", "Shorts", "Joggers", "Plus-Size", "Shoes", "Accessories", "Perfumes"].map((item) => <span key={item}>{item}</span>)}</div>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.gallery}>{gallery.map((image, idx) => <div key={idx} className={styles.galleryItem}><img src={image} alt="White cotton shirt" /></div>)}</div>
          <aside className={styles.details}>
            <div className={styles.titleRow}><h1>White Cotton Linen Shirt</h1><button aria-label="Back">&lt;</button></div>
            <p className={styles.price}>₹1599 <span>₹1999</span></p>
            <p className={styles.inclusive}>inclusive of all taxes</p>
            <div className={styles.swatches}>{gallery.slice(0, 5).map((image, idx) => <img src={image} key={idx} alt="color option" />)}</div>
            <p className={styles.color}>Color: <strong>Blue</strong></p>
            <div className={styles.sizes}>{["XS", "S", "M", "L", "XL", "XXL"].map((size) => <button key={size}>{size}</button>)}</div>
            <button className={styles.primary}>ADD TO CART</button>
            <button className={styles.secondary}>BUY NOW</button>
            <div className={styles.delivery}><p>Check delivery options</p><div><input placeholder="Enter your pincode" /><button>check</button></div></div>
            <div className={styles.offers}><h3>Available offers</h3><div className={styles.offerGrid}><article><h4>MYDRESS5</h4><p>5% off on your first order and extra discount on prepaid orders.</p></article><article><h4>MYDRESS10</h4><p>10% off on orders above ₹1499 and free shipping on all orders.</p></article></div></div>
            <div className={styles.iconsRow}><span>?? 7 days</span><span>?? Easy return</span><span>?? Secure</span><span>? Quality check</span></div>
            <section className={styles.description}><h3>Product Details</h3><p>Tailored in breathable cotton-linen blend, this shirt features a clean structure, classic spread collar, and full sleeves. It is designed for all-day comfort and an elevated casual look.</p><h4>Size &amp; Fit</h4><p>Fit: Regular fit. Model is 6ft and wearing size M.</p><h4>Material &amp; Care</h4><p>Machine wash cold, do not bleach, warm iron if needed.</p></section>
          </aside>
        </section>
        <section className={styles.ratingsBlock}>
          <div className={styles.ratingLeft}><h3>Customer Ratings</h3><p className={styles.stars}>? ? ? ? ?</p><p className={styles.score}>4.6 / 5</p><p className={styles.count}>2689 global ratings</p></div>
          <div className={styles.ratingRight}>{[["5 Star", 88], ["4 Star", 68], ["3 Star", 22], ["2 Star", 10], ["1 Star", 6]].map(([label, value]) => <div key={label as string} className={styles.barRow}><span>{label as string}</span><div><i style={{ width: `${value}%` }} /></div></div>)}</div>
        </section>
        <section className={styles.reviews}><h3>Customer Reviews</h3>{[1, 2].map((item) => <article key={item} className={styles.reviewCard}><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80" alt="user" /><div><h4>Ganesh Keith</h4><p>?????</p><small>Reviewed on Jan 12, 2026</small><p>Great everyday shirt with breathable fabric and solid stitching. The fit is flattering and the quality feels premium for the price.</p></div></article>)}</section>
        <section className={styles.carouselSection}><h3>Customers also liked</h3><div className={styles.cardsGrid}>{repeated.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
        <section className={styles.carouselSection}><h3>Similar Products</h3><div className={styles.cardsGrid}>{repeated.map((product) => <ProductCard key={`similar-${product.id}`} product={product} />)}</div></section>
      </main>
      <Footer />
    </div>
  );
}
