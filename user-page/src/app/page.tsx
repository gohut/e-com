import { Navbar } from "@/components/Navbar/Navbar";
import { ProductsSection } from "@/components/ProductsSection/ProductsSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.storeShell}>
      <Navbar />
      <ProductsSection />
    </main>
  );
}
