"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useCart } from "@/context/CartContext";
import { useCategory } from "@/context/CategoryContext";
import { categories, type Product } from "@/data/products";
import styles from "./ProductsSection.module.scss";

const PRODUCTS_PER_PAGE = 6;
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function ProductsSection() {
  const { wishlistItems, wishlistCount } = useCart();
  const { selectedCategory } = useCategory();
  const [currentPage, setCurrentPage] = useState(1);
  const [cartMessage, setCartMessage] = useState("");

  const filteredProducts = useMemo(
    () => wishlistItems.filter((product) => selectedCategory === "Discover" || product.category === selectedCategory),
    [selectedCategory, wishlistItems],
  );
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const visibleProducts = useMemo(() => {
    const start = (safePage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, safePage]);

  const addToCart = (product: Product) => {
    setCartMessage(`${product.name} added to cart`);
  };

  return (
    <section className={styles.productsSection} id="discover">
      <div className={styles.categoryAnchors} aria-hidden="true">
        {categories.slice(1).map((category) => (
          <span key={category} id={slugify(category)} />
        ))}
      </div>
      <div className={styles.headingRow}>
        <h1>Wish Picks ({wishlistCount})</h1>
        {cartMessage ? <p role="status">{cartMessage}</p> : null}
      </div>

      {visibleProducts.length ? (
        <div className={styles.productGrid}>
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      ) : (
        <div className={styles.noProducts}>
          No Products Found{wishlistCount === 0 ? ". Move products back from your cart to see them here." : "."}
        </div>
      )}

      {filteredProducts.length > PRODUCTS_PER_PAGE ? (
        <div className={styles.pagination} aria-label="Product pagination">
          <button type="button" onClick={() => setCurrentPage((page) => Math.max(1, page - 1))} disabled={safePage === 1}>
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              className={page === safePage ? styles.activePage : ""}
              type="button"
              aria-current={page === safePage ? "page" : undefined}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            disabled={safePage === totalPages}
          >
            Next
          </button>
        </div>
      ) : null}
    </section>
  );
}
