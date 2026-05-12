"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useCart, type CartItem } from "@/context/CartContext";
import { products, type Product } from "@/data/products";
import styles from "./page.module.scss";

const RECOMMENDED_PER_PAGE = 5;

function formatPrice(value: number) {
  return `₹ ${value}`;
}

function CartRow({ item }: { item: CartItem }) {
  const { moveToWishlist, removeItem, updateQuantity } = useCart();
  const [removing, setRemoving] = useState(false);

  const removeWithAnimation = (onRemove: () => void) => {
    setRemoving(true);
    window.setTimeout(onRemove, 180);
  };

  return (
    <article className={`${styles.cartItem} ${removing ? styles.removing : ""}`}>
      <div className={styles.itemImage}>
        <Image src={item.image} alt={item.name} fill sizes="(max-width: 680px) 110px, 146px" />
      </div>

      <div className={styles.itemInfo}>
        <div>
          <h2>{item.name}</h2>
          <label className={styles.qtyLabel}>
            QTY
            <select value={item.quantity} onChange={(event) => updateQuantity(item.id, Number(event.target.value))}>
              {Array.from({ length: 8 }, (_, index) => index + 1).map((quantity) => (
                <option key={quantity} value={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
          </label>
          <p>Not eligible for coupon</p>
        </div>

        <div className={styles.itemBottom}>
          <button type="button" onClick={() => removeWithAnimation(() => moveToWishlist(item))}>
            Move to WishList
          </button>
          <del>{formatPrice(item.oldPrice)}</del>
          <strong>{formatPrice(item.price)}</strong>
        </div>
      </div>

      <button
        className={styles.minusButton}
        type="button"
        aria-label={`Remove ${item.name}`}
        onClick={() => removeWithAnimation(() => removeItem(item.id))}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 12h8" />
        </svg>
      </button>

      <label className={styles.selectItem}>
        <input
          type="checkbox"
          checked
          onChange={() => removeWithAnimation(() => removeItem(item.id))}
          aria-label={`Remove ${item.name} from cart`}
        />
        <span />
      </label>
    </article>
  );
}

function CouponCard() {
  const { applyCoupon, couponApplied } = useCart();

  return (
    <section className={styles.couponCard} aria-label="Coupon">
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <path d="M6 12h32v20H6z" />
        <path d="M14 12v20M30 12v20M18 27 27 17M18.5 18.5h.01M26.5 26.5h.01" />
      </svg>
      <div>
        <p>
          <span>Save ₹200 with</span>
          <strong>NEW10</strong>
          <button type="button" onClick={applyCoupon}>
            {couponApplied ? "Applied" : "Apply"}
          </button>
        </p>
        <button className={styles.viewCoupons} type="button" onClick={applyCoupon}>
          View Coupons and Gift Cards
          <span>⌄</span>
        </button>
      </div>
    </section>
  );
}

function PriceDetails() {
  const { totals } = useCart();

  return (
    <aside className={styles.priceCard}>
      <h2>PRICE DETAILS</h2>
      <dl>
        <div>
          <dt>Total Items</dt>
          <dd>{totals.totalItems}</dd>
        </div>
        <div>
          <dt>Total Price</dt>
          <dd>{formatPrice(totals.totalPrice)}</dd>
        </div>
        <div>
          <dt>Product Discount</dt>
          <dd>{formatPrice(totals.productDiscount)}</dd>
        </div>
        <div>
          <dt>Coupon Discount</dt>
          <dd>{formatPrice(totals.couponDiscount)}</dd>
        </div>
      </dl>
      <div className={styles.grandTotal}>
        <span>Grand Total</span>
        <strong>{formatPrice(totals.grandTotal)}</strong>
      </div>
      <button type="button">PAY {formatPrice(totals.grandTotal)}</button>
    </aside>
  );
}

function WorthAddingCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className={styles.recommendCard}>
      <div className={styles.recommendImage}>
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 760px) 46vw, 160px" />
      </div>
      <h3>{product.name}</h3>
      <p>
        <span>{formatPrice(product.price)}</span>
        <del>{formatPrice(product.oldPrice)}</del>
      </p>
      <button type="button" onClick={() => addItem(product)}>
        MOVE TO CART
      </button>
    </article>
  );
}

export function CartPage() {
  const { items } = useCart();
  const [page, setPage] = useState(1);
  const recommendedProducts = useMemo(() => products.filter((product) => !items.some((item) => item.id === product.id)), [items]);
  const totalPages = Math.max(1, Math.ceil(recommendedProducts.length / RECOMMENDED_PER_PAGE));
  const visibleProducts = recommendedProducts.slice((page - 1) * RECOMMENDED_PER_PAGE, page * RECOMMENDED_PER_PAGE);

  return (
    <div className={styles.cartContent}>
      <section className={styles.cartGrid}>
        <div className={styles.cartList}>
          <h1>YOUR CART</h1>
          {items.length ? (
            items.map((item) => <CartRow key={item.id} item={item} />)
          ) : (
            <div className={styles.emptyCart}>Your Cart is Empty</div>
          )}
        </div>

        <div className={styles.summaryColumn}>
          <CouponCard />
          <PriceDetails />
        </div>
      </section>

      <section className={styles.worthAdding}>
        <div className={styles.dealTitle}>
          <strong>DEALS</strong>
          <div>
            <h2>Worth Adding</h2>
            <p>Pick any one these items</p>
          </div>
        </div>

        <div className={styles.stealDeals}>STEAL DEALS</div>
        <div className={styles.recommendGrid}>
          {visibleProducts.map((product) => (
            <WorthAddingCard key={product.id} product={product} />
          ))}
        </div>

        <div className={styles.recommendPager} aria-label="Worth Adding pagination">
          <button type="button" disabled={page === 1} onClick={() => setPage((current) => Math.max(1, current - 1))}>
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              className={pageNumber === page ? styles.activePage : ""}
              type="button"
              aria-current={pageNumber === page ? "page" : undefined}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
