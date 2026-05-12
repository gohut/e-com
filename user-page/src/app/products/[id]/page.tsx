import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton/AddToCartButton";
import { Navbar } from "@/components/Navbar/Navbar";
import { products } from "@/data/products";
import styles from "./page.module.scss";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main className={styles.productShell}>
      <Navbar />
      <section className={styles.productDetail}>
        <div className={styles.detailImage}>
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 760px) 100vw, 420px" priority />
        </div>
        <div>
          <p>{product.category}</p>
          <h1>{product.name}</h1>
          <strong>Rs {product.price}</strong>
          <del>Rs {product.oldPrice}</del>
          <AddToCartButton product={product} />
        </div>
      </section>
    </main>
  );
}
