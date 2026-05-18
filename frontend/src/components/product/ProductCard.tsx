import styles from "./ProductCard.module.css";

export type Product = {
  id: number;
  title: string;
  price: string;
  originalPrice: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.priceRow}>
          <span className={styles.price}>{product.price}</span>
          <span className={styles.original}>{product.originalPrice}</span>
        </div>
      </div>
    </article>
  );
}
