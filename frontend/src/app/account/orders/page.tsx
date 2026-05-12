'use client';
import { useState } from 'react';
import Link from 'next/link';
import OrderCard from '@/components/orders/OrderCard';
import { MOCK_ORDERS } from '@/data/orders';
import styles from './orders.module.scss';

export default function OrdersPage() {
  const [search, setSearch] = useState('');

  const filtered = MOCK_ORDERS.filter((o) => {
    return !search || o.item.name.toLowerCase().includes(search.toLowerCase()) || o.item.brand.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.page}>
      <div className={styles.headerRow}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/account">My Accounts</Link>
          <span>›</span>
          <span className={styles.current}>Your Orders</span>
        </nav>

        <div className={styles.searchWrap}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text" placeholder="Search your orders.."
            value={search} onChange={(e) => setSearch(e.target.value)}
            aria-label="Search orders"
          />
        </div>
      </div>

      <div className={styles.layout}>
        <section className={styles.ordersList} aria-label="Your orders">
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <span>📦</span>
              <p>No orders found</p>
              <Link href="/" className={styles.shopBtn}>Start Shopping</Link>
            </div>
          ) : (
            filtered.map((order) => <OrderCard key={order.id} order={order} />)
          )}
        </section>
      </div>
    </div>
  );
}

