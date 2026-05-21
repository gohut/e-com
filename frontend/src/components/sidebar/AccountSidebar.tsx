'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './AccountSidebar.module.scss';

const NAV_ITEMS = [
  { label: 'PROFILE',               href: '/account/profile' },
  { label: 'ORDERS',                href: '/account/orders' },
  { label: 'WHISHLIST',             href: '/account/wishlist' },
  { label: 'ADDRESSES',             href: '/account/addresses' },
  { label: 'GIFT CARDS & Coupons',  href: '/account/gift-cards' },
  { label: 'SETTINGS',              href: '/account/settings' },
  { label: 'PREFERENCES',           href: '/account/preferences' },
  { label: 'TERMS AND CONDITIONS',  href: '/account/terms' },
  { label: 'Cards & UPI',           href: '/account/cards' },
];

interface Props { onClose?: () => void; }

export default function AccountSidebar({ onClose }: Props) {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.overview}>
        <Link href="/account" className={styles.overviewLink} onClick={onClose}>OVERVIEW</Link>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              onClick={onClose}
            >
              <span>{item.label}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.chevron}>
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          );
        })}
      </nav>

      <div className={styles.logoutSection}>
        <button className={styles.logoutBtn}>LOG OUT</button>
      </div>
    </aside>
  );
}
