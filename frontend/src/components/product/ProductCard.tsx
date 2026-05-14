type ProductCardProps = {
  name: string;
};

export default function ProductCard({ name }: ProductCardProps) {
  return <article>{name}</article>;
}
