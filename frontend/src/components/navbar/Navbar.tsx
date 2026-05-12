'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';

const CATEGORIES = [
  { name: 'Discover', href: '/' },
  { name: 'Shirts', href: '/category/shirts' },
  { name: 'T-Shirts', href: '/category/t-shirts' },
  { name: 'Jeans', href: '/category/jeans' },
  { name: 'Trousers', href: '/category/trousers' },
  { name: 'Cargo Pants', href: '/category/cargo-pants' },
  { name: 'Shoes', href: '/category/shoes' },
  { name: 'Overshirt', href: '/category/overshirt' },
  { name: 'Plus-Size', href: '/category/plus-size' },
  { name: 'Shorts', href: '/category/shorts' },
  { name: 'Sunglasess', href: '/category/sunglasses' },
  { name: 'Perfumes', href: '/category/perfumes' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [pincode, setPincode] = useState('');
  const [pincodeModalOpen, setPincodeModalOpen] = useState(false);
  const pathname = usePathname();

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

          <div className={`${styles.searchBar} ${searchOpen ? styles.searchVisible : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.searchIcon}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input type="text" placeholder="Search...." aria-label="Search products" />
          </div>

          <div className={styles.actions}>
            <button className={styles.actionBtn} onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <Link href="/account" className={styles.actionBtn} aria-label="My Account">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
            <Link href="/cart" className={`${styles.actionBtn} ${styles.cartBtn}`} aria-label="Cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
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
            {CATEGORIES.map((cat) => {
              const isActive = pathname === cat.href || (cat.href === '/' && pathname === '/');
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className={`${styles.categoryItem} ${isActive ? styles.active : ''}`}
                >
                  {cat.name}
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
            {CATEGORIES.map((cat) => (
              <Link key={cat.name} href={cat.href} className={styles.mobileMenuItem} onClick={() => setMobileMenuOpen(false)}>
                {cat.name}
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
