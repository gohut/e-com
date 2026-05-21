export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  category: string;
};

export const categories = [
  "Discover",
  "Shirts",
  "T-Shirts",
  "Jeans",
  "Trousers",
  "Cargo Pants",
  "Shoes",
  "Overshirt",
  "Plus-Size",
  "Shorts",
  "Sunglasses",
  "Perfumes",
];

export const products: Product[] = [
  {
    id: 1,
    name: "100% Cotton Slim Fit Shirt",
    price: 629,
    oldPrice: 699,
    category: "Shirts",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=520&q=80",
  },
  {
    id: 2,
    name: "100% Cotton Slim Fit Shirt",
    price: 629,
    oldPrice: 699,
    category: "Plus-Size",
    image:
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=520&q=80",
  },
  {
    id: 3,
    name: "100% Cotton Slim Fit Shirt",
    price: 629,
    oldPrice: 699,
    category: "Overshirt",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=520&q=80",
  },
  {
    id: 4,
    name: "100% Cotton Slim Fit Shirt",
    price: 629,
    oldPrice: 699,
    category: "Blazers",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=520&q=80",
  },
  {
    id: 5,
    name: "100% Cotton Slim Fit Shirt",
    price: 629,
    oldPrice: 699,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?auto=format&fit=crop&w=520&q=80",
  },
  {
    id: 6,
    name: "100% Cotton Slim Fit Shirt",
    price: 629,
    oldPrice: 699,
    category: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=520&q=80",
  },
  {
    id: 7,
    name: "Premium Relaxed Linen Shirt",
    price: 749,
    oldPrice: 999,
    category: "Shirts",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=520&q=80",
  },
  {
    id: 8,
    name: "Classic Dark Denim Jeans",
    price: 899,
    oldPrice: 1199,
    category: "Jeans",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=520&q=80",
  },
  {
    id: 9,
    name: "Everyday Tailored Trousers",
    price: 799,
    oldPrice: 1099,
    category: "Trousers",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=520&q=80",
  },
  {
    id: 10,
    name: "Streetwear Cargo Pants",
    price: 999,
    oldPrice: 1299,
    category: "Cargo Pants",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=520&q=80",
  },
  {
    id: 11,
    name: "Minimal White Sneakers",
    price: 1199,
    oldPrice: 1599,
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=520&q=80",
  },
  {
    id: 12,
    name: "Round Frame Sunglasses",
    price: 499,
    oldPrice: 699,
    category: "Sunglasses",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=520&q=80",
  },
];
