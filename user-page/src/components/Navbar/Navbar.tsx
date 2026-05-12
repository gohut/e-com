"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";
import { useCategory } from "@/context/CategoryContext";
import { categories } from "@/data/products";
import styles from "./Navbar.module.scss";

const createActions = (isWishlistPage: boolean, isCartPage: boolean): Array<{ label: string; href?: string; icon: ReactNode }> => [
  {
    label: "Search",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="6.25" />
        <path d="m15.2 15.2 5 5" />
      </svg>
    ),
  },
  {
    label: "Account",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="7.5" r="4" />
        <path d="M4.75 20.25c1.2-4.1 4-6.15 7.25-6.15s6.05 2.05 7.25 6.15" />
      </svg>
    ),
  },
  {
    label: "Cart",
    href: "/cart",
    icon: isCartPage ? (
      <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "#000000", stroke: "none" }}>
        <rect x="4" y="5.5" width="16" height="16" rx="2.2" />
        <path d="M8.7 8.3a3.3 3.3 0 0 1 6.6 0" fill="none" stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M9 13c.7 1.1 1.7 1.6 3 1.6s2.3-.5 3-1.6" fill="none" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="6.2" width="14" height="15" rx="2" />
        <path d="M8.8 8.6a3.2 3.2 0 0 1 6.4 0" />
        <path d="M9 13c.7 1.05 1.7 1.55 3 1.55s2.3-.5 3-1.55" />
      </svg>
    ),
  },
  {
    label: "Wishlist",
    href: "/",
    icon: isWishlistPage ? (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        style={{ width: 24, height: 24, fill: "none", stroke: "none" }}
      >
        <circle cx="32" cy="32" r="32" fill="#f5365b" />
        <path
          d="M31.8 48.8C24.2 42.7 14 35.2 14 25.6c0-6.2 4.8-10.8 10.6-10.8 3.1 0 5.7 1.3 7.4 3.4 1.8-2.1 4.4-3.4 7.4-3.4C45.2 14.8 50 19.4 50 25.6c0 9.6-10.2 17.1-17.8 23.2Z"
          fill="#ffffff"
        />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.25 8.55c0 5.2-8.25 10.2-8.25 10.2S3.75 13.75 3.75 8.55A4.65 4.65 0 0 1 12 5.65a4.65 4.65 0 0 1 8.25 2.9Z" />
      </svg>
    ),
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { selectedCategory, createCategoryHref } = useCategory();
  const isCartPage = pathname === "/cart";
  const actions = createActions(pathname === "/", isCartPage);

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <button
          className={styles.menuButton}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <Link className={styles.logo} href="/" aria-label="Wishlist store home">
          <svg className={styles.logoMark} viewBox="0 0 44 44" aria-hidden="true">
            <path d="M22 3v38" />
            <path d="M3 22h38" />
            <path d="M22 13.5C22 7.7 18.6 4 14.9 4s-6.8 3-6.8 6.8 3.4 6.8 8.7 6.8H22" />
            <path d="M22 13.5C22 7.7 25.4 4 29.1 4s6.8 3 6.8 6.8-3.4 6.8-8.7 6.8H22" />
            <path d="M22 30.5c0 5.8-3.4 9.5-7.1 9.5s-6.8-3-6.8-6.8 3.4-6.8 8.7-6.8H22" />
            <path d="M22 30.5c0 5.8 3.4 9.5 7.1 9.5s6.8-3 6.8-6.8-3.4-6.8-8.7-6.8H22" />
          </svg>
          <span className={styles.logoText}>NAME</span>
        </Link>

        <div className={styles.actions} aria-label="Store actions">
          {actions.map((action) =>
            action.href ? (
              <Link key={action.label} href={action.href} aria-label={action.label}>
                {action.icon}
              </Link>
            ) : (
              <button key={action.label} type="button" aria-label={action.label}>
                {action.icon}
              </button>
            ),
          )}
        </div>
      </div>

      <nav className={`${styles.categoryNav} ${isOpen ? styles.open : ""}`} aria-label="Product categories">
        {categories.map((category) => (
          <Link
            key={category}
            className={selectedCategory === category ? styles.activeCategory : ""}
            href={createCategoryHref(category)}
            aria-current={selectedCategory === category ? "page" : undefined}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {category}
          </Link>
        ))}
      </nav>
    </header>
  );
}
