import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { moveToCart } = useCart();

  const handleAddToCart = () => {
    moveToCart(product);
    onAddToCart(product);
  };

  return (
    <article className={styles.card}>
      <Link className={styles.imageWrap} href={`/products/${product.id}`} aria-label={`View ${product.name}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 420px) 100vw, (max-width: 760px) 50vw, (max-width: 1180px) 33vw, 16vw"
        />
      </Link>
      <div className={styles.details}>
        <h3>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className={styles.price}>
          <span>Rs {product.price}</span>
          <del>Rs {product.oldPrice}</del>
        </p>
      </div>
      <button className={styles.cartButton} type="button" onClick={handleAddToCart}>
        MOVE TO CART
      </button>
    </article>
  );
}
