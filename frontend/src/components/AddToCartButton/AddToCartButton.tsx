"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

type AddToCartButtonProps = {
  product: Product;
  className?: string;
};

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const router = useRouter();
  const { moveToCart } = useCart();

  const handleClick = () => {
    moveToCart(product);
    router.push("/cart");
  };

  return (
    <button className={className} type="button" onClick={handleClick}>
      MOVE TO CART
    </button>
  );
}
