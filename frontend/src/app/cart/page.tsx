import Navbar from "@/components/navbar/Navbar";
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
