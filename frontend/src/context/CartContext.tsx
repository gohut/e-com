"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "@/data/products";

export type CartItem = Product & {
  quantity: number;
};

type CartTotals = {
  totalItems: number;
  totalPrice: number;
  productDiscount: number;
  couponDiscount: number;
  grandTotal: number;
};

type CartContextValue = {
  items: CartItem[];
  wishlistItems: Product[];
  totals: CartTotals;
  couponApplied: boolean;
  wishlistCount: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  moveToCart: (product: Product, quantity?: number) => void;
  moveToWishlist: (product: Product) => void;
  toggleWishlist: (product: Product) => void;
  applyCoupon: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "fashion-cart-items";
const COUPON_KEY = "fashion-cart-coupon";
const WISHLIST_KEY = "fashion-wishlist-items";

const starterItems = products.slice(0, 3).map((product, index) => ({
  ...product,
  quantity: index === 1 ? 2 : 1,
}));

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(starterItems);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [couponApplied, setCouponApplied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    window.queueMicrotask(() => {
      const storedItems = window.localStorage.getItem(STORAGE_KEY);
      const storedCoupon = window.localStorage.getItem(COUPON_KEY);
      const storedWishlist = window.localStorage.getItem(WISHLIST_KEY);

      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }

      if (storedWishlist) {
        setWishlistItems(JSON.parse(storedWishlist));
      }

      setCouponApplied(storedCoupon === "true");
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistItems));
  }, [hydrated, wishlistItems]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(COUPON_KEY, String(couponApplied));
  }, [couponApplied, hydrated]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }

      return [...currentItems, { ...product, quantity }];
    });
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }

    setItems((currentItems) => currentItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
  }, [removeItem]);

  const moveToCart = useCallback((product: Product, quantity = 1) => {
    addItem(product, quantity);
    setWishlistItems((currentItems) => currentItems.filter((item) => item.id !== product.id));
  }, [addItem]);

  const moveToWishlist = useCallback((product: Product) => {
    removeItem(product.id);
    setWishlistItems((currentItems) => {
      if (currentItems.some((item) => item.id === product.id)) {
        return currentItems;
      }

      const wishlistProduct: Product = {
        id: product.id,
        name: product.name,
        price: product.price,
        oldPrice: product.oldPrice,
        image: product.image,
        category: product.category,
      };

      return [wishlistProduct, ...currentItems];
    });
  }, [removeItem]);

  const toggleWishlist = useCallback((product: Product) => {
    setWishlistItems((currentItems) => {
      const isInWishlist = currentItems.some((item) => item.id === product.id);
      if (isInWishlist) {
        return currentItems.filter((item) => item.id !== product.id);
      }
      return [{ ...product }, ...currentItems];
    });
  }, []);

  const totals = useMemo(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.oldPrice * item.quantity, 0);
    const sellingTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const productDiscount = totalPrice - sellingTotal;
    const couponDiscount = couponApplied && sellingTotal >= 1200 ? 200 : 0;

    return {
      totalItems,
      totalPrice,
      productDiscount,
      couponDiscount,
      grandTotal: Math.max(0, sellingTotal - couponDiscount),
    };
  }, [couponApplied, items]);

  const value = useMemo(
    () => ({
      items,
      wishlistItems,
      totals,
      couponApplied,
      wishlistCount: wishlistItems.length,
      addItem,
      removeItem,
      updateQuantity,
      moveToCart,
      moveToWishlist,
      toggleWishlist,
      applyCoupon: () => setCouponApplied(true),
    }),
    [addItem, couponApplied, items, moveToCart, moveToWishlist, toggleWishlist, removeItem, totals, updateQuantity, wishlistItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
