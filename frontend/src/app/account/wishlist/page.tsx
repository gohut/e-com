'use client';

import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import styles from './wishlist.module.scss';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlistItems } = useCart();

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>MY WISHLIST ({wishlistItems.length})</h1>
      
      {wishlistItems.length === 0 ? (
        <div className={styles.emptyState}>
          <p>Your wishlist is empty.</p>
          <Link href="/" className={styles.continueBtn}>
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {wishlistItems.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={() => {}} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
