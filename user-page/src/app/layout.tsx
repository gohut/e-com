import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { CategoryProvider } from "@/context/CategoryContext";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Wishlist Store",
  description: "Responsive ecommerce wishlist page built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <CategoryProvider>{children}</CategoryProvider>
        </CartProvider>
      </body>
    </html>
  );
}
