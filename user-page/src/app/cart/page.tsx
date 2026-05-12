import { Navbar } from "@/components/Navbar/Navbar";
import { CartPage } from "./CartPage";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <main className={styles.cartShell}>
      <Navbar />
      <CartPage />
    </main>
  );
}
