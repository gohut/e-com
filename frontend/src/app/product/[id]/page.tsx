type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  return (
    <main style={{ padding: "24px" }}>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </main>
  );
}
