'use client';
import { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import AccountSidebar from '@/components/sidebar/AccountSidebar';
import styles from './account-layout.module.scss';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        {/* Mobile sidebar toggle */}
        <button className={styles.mobileMenuTrigger} onClick={() => setSidebarOpen(true)} aria-label="Open account menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <span>Account Menu</span>
        </button>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className={styles.mobileOverlay} onClick={() => setSidebarOpen(false)}>
            <div className={styles.mobileSidebar} onClick={(e) => e.stopPropagation()}>
              <AccountSidebar onClose={() => setSidebarOpen(false)} />
            </div>
          </div>
        )}

        {/* Desktop sidebar */}
        <div className={styles.desktopSidebar}>
          <AccountSidebar />
        </div>

        {/* Main content */}
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
