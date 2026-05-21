import Navbar from "@/components/navbar/Navbar";
import { ProductsSection } from "@/components/ProductsSection/ProductsSection";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <Navbar />
      <ProductsSection />
    </main>
  );
}
