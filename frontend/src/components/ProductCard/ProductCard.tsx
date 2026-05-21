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
  const { moveToCart, toggleWishlist, wishlistItems } = useCart();
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    moveToCart(product);
    onAddToCart(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product);
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
        <button
          type="button"
          className={`${styles.wishlistBtn} ${isWishlisted ? styles.wishlisted : ''}`}
          onClick={handleToggleWishlist}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M20.25 8.55c0 5.2-8.25 10.2-8.25 10.2S3.75 13.75 3.75 8.55A4.65 4.65 0 0 1 12 5.65a4.65 4.65 0 0 1 8.25 2.9Z" />
          </svg>
        </button>
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
