'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import { useCart } from '@/context/CartContext';
import { useCategory } from '@/context/CategoryContext';
import { categories } from '@/data/products';



export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pincode, setPincode] = useState('');
  const [pincodeModalOpen, setPincodeModalOpen] = useState(false);
  const pathname = usePathname();
  const { items, wishlistCount } = useCart();
  const { selectedCategory, createCategoryHref } = useCategory();

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className={styles.header}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <button
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileMenuOpen ? styles.open : ''} />
            <span className={mobileMenuOpen ? styles.open : ''} />
            <span className={mobileMenuOpen ? styles.open : ''} />
          </button>

          <Link href="/" className={styles.logo}>
            <span className={styles.logoGrid}>
              <span /><span /><span /><span />
            </span>
            <span className={styles.logoText}>E-COMM</span>
          </Link>

          <div className={styles.searchBar}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.searchIcon}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input type="text" placeholder="Search...." aria-label="Search products" />
          </div>

          <div className={styles.actions}>
            <Link href="/account/wishlist" className={styles.actionBtn} aria-label="Wishlist">
              <div style={{ position: 'relative' }}>
                <svg viewBox="0 0 64 64" aria-hidden="true" width="24" height="24">
                  <path d="M31.8 48.8C24.2 42.7 14 35.2 14 25.6c0-6.2 4.8-10.8 10.6-10.8 3.1 0 5.7 1.3 7.4 3.4 1.8-2.1 4.4-3.4 7.4-3.4C45.2 14.8 50 19.4 50 25.6c0 9.6-10.2 17.1-17.8 23.2Z" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
                {wishlistCount > 0 && (
                  <span style={{
                    position: 'absolute', top: '-6px', right: '-8px', background: 'red', color: 'white',
                    fontSize: '10px', fontWeight: 'bold', padding: '2px 5px', borderRadius: '10px', minWidth: '16px', textAlign: 'center'
                  }}>
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>
            <Link href="/account" className={styles.actionBtn} aria-label="My Account">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
            <Link href="/cart" className={`${styles.actionBtn} ${styles.cartBtn}`} aria-label="Cart">
              <div style={{ position: 'relative' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {cartItemCount > 0 && (
                  <span style={{
                    position: 'absolute', top: '-6px', right: '-8px', background: 'red', color: 'white',
                    fontSize: '10px', fontWeight: 'bold', padding: '2px 5px', borderRadius: '10px', minWidth: '16px', textAlign: 'center'
                  }}>
                    {cartItemCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>

        {/* Pincode Bar */}
        <div className={styles.pincodeBar}>
          <button className={styles.pincodeText} onClick={() => setPincodeModalOpen(true)}>
            <strong>Enter Pincode</strong>
            <span className={styles.pincodeSep}>&nbsp;-&nbsp;</span>
            <span className={styles.pincodeLink}>to check delivery</span>
          </button>
        </div>

        {/* Category Navigation */}
        <nav className={styles.categoryNav} aria-label="Product categories">
          <div className={styles.categoryList}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <Link
                  key={cat}
                  href={createCategoryHref(cat)}
                  className={`${styles.categoryItem} ${isActive ? styles.active : ''}`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMobileMenuOpen(false)}>
          <nav className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.mobileMenuHeader}>
              <span className={styles.logoText}>E-COMM</span>
              <button onClick={() => setMobileMenuOpen(false)} className={styles.closeBtn}>✕</button>
            </div>
            {categories.map((cat) => (
              <Link key={cat} href={createCategoryHref(cat)} className={styles.mobileMenuItem} onClick={() => setMobileMenuOpen(false)}>
                {cat}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Pincode Modal */}
      {pincodeModalOpen && (
        <div className={styles.pincodeOverlay} onClick={() => setPincodeModalOpen(false)}>
          <div className={styles.pincodeModal} onClick={(e) => e.stopPropagation()}>
            <h3>Check Delivery</h3>
            <input
              type="text" maxLength={6} placeholder="Enter 6-digit pincode"
              value={pincode} onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
              className={styles.pincodeInput}
            />
            <button className={styles.checkBtn} onClick={() => setPincodeModalOpen(false)}>Check</button>
          </div>
        </div>
      )}
    </>
  );
}
