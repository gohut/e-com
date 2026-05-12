import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "E-Comm — Shop Fashion, Shoes & More",
  description: "India's best online fashion store. Shop shirts, jeans, shoes, and accessories at best prices.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
