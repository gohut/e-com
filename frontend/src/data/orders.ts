export type OrderStatus = 'Ordered' | 'On the Way' | 'Delivered' | 'Cancelled' | 'Returned';

export interface OrderItem {
  id: string;
  orderId: string;
  brand: string;
  name: string;
  description: string;
  size: string;
  quantity: number;
  price: number;
  originalPrice: number;
  image: string;
  status: OrderStatus;
  orderedDate: string;
  deliveredDate?: string;
  rating?: number;
  category: string;
}

export interface Order {
  id: string;
  orderId: string;
  status: OrderStatus;
  statusDate: string;
  item: OrderItem;
  deliveryAddress: {
    name: string;
    plusCode: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    mobile: string;
  };
  paymentMethod: string;
  totalPrice: number;
  coins: number;
  updatesSentTo: string;
}

export const MOCK_ORDERS: Order[] = [
  {
    id: '1',
    orderId: '#13B746 @B5B7B63B6B301',
    status: 'Ordered',
    statusDate: 'Sat, 25 Apr, 4.00 PM',
    item: {
      id: 'item1',
      orderId: '#13B746',
      brand: 'Sky Bags',
      name: 'Buy Bewakoof Unisex Black & White Inevitable Gojo Printed Backpack - Backpacks for Unisex 24540550',
      description: 'Premium quality backpack with multiple compartments, padded laptop sleeve, and ergonomic shoulder straps.',
      size: '12L',
      quantity: 1,
      price: 899,
      originalPrice: 1299,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      status: 'Ordered',
      orderedDate: 'Sat, 25 Apr 2025',
      category: 'Bags',
    },
    deliveryAddress: {
      name: 'Lingeswaran K',
      plusCode: '7J2W2JC+2W',
      area: 'MYLERIPALAYAM',
      city: 'MYLERIPALAYAM',
      state: 'TAMIL NADU',
      pincode: '641032',
      mobile: '9487428892',
    },
    paymentMethod: 'Pay On Delivery',
    totalPrice: 899,
    coins: 800,
    updatesSentTo: '+91 9487428892',
  },
  {
    id: '2',
    orderId: '#13B746 @B5B7B63B6B301',
    status: 'Delivered',
    statusDate: 'Mon, 27 Apr, 6.00 PM',
    item: {
      id: 'item2',
      orderId: '#13B746',
      brand: 'NIKE',
      name: "Marvel's Spider-Man Racer Shoes for Boys | Lightweight Sole, Super Flexible, Comfortable, Indoor and Outdoor Slip On Lofer Shoes",
      description: "Premium athletic shoes with Spider-Man design, ultra-lightweight sole, and superior flexibility for all-day comfort.",
      size: '8,9 ,10 ,11',
      quantity: 1,
      price: 1260,
      originalPrice: 2499,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      status: 'Delivered',
      orderedDate: 'Fri, 4 Mar 2025',
      deliveredDate: 'Mon, 27 Apr 2025',
      category: 'Shoes',
    },
    deliveryAddress: {
      name: 'Linga',
      plusCode: '7J2W2JC+2W',
      area: 'MYLERIPALAYAM',
      city: 'MYLERIPALAYAM',
      state: 'TAMIL NADU',
      pincode: '641032',
      mobile: '9487428892',
    },
    paymentMethod: 'Pay On Delivery',
    totalPrice: 1260,
    coins: 1000,
    updatesSentTo: '+91 9487428892',
  },
  {
    id: '3',
    orderId: '#13B746 @B5B7B63B6B301',
    status: 'Cancelled',
    statusDate: 'Mon, 27 Apr, 6.00 PM',
    item: {
      id: 'item3',
      orderId: '#13B746',
      brand: 'Boat Stone 620',
      name: 'BoAt wireless speakers with powerful sound, deep bass & Bluetooth connectivity. Perfect for travel, parties & outdoor fun. Buy online at best price!',
      description: 'BoAt Stone 620 portable Bluetooth speaker with 10W stereo sound, IPX5 water resistance, and 7-hour playback.',
      size: 'Medium',
      quantity: 1,
      price: 1499,
      originalPrice: 2999,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      status: 'Cancelled',
      orderedDate: 'Mon, 27 Apr 2025',
      category: 'Electronics',
    },
    deliveryAddress: {
      name: 'Lingeswaran K',
      plusCode: '7J2W2JC+2W',
      area: 'MYLERIPALAYAM',
      city: 'MYLERIPALAYAM',
      state: 'TAMIL NADU',
      pincode: '641032',
      mobile: '9487428892',
    },
    paymentMethod: 'Pay On Delivery',
    totalPrice: 1499,
    coins: 0,
    updatesSentTo: '+91 9487428892',
  },
];

export const RECOMMENDED_ITEMS = [
  { id: 'r1', name: 'Socks', brand: '100% cotton sport so...', price: 299, originalPrice: 399, discount: 25, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop' },
  { id: 'r2', name: 'Shoe Clea...', brand: 'Be-At-Vibration Clot...', price: 279, originalPrice: 399, discount: 30, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop' },
  { id: 'r3', name: 'AROA Watc...', brand: 'Iron Spider Man logo...', price: 769, originalPrice: 1099, discount: 30, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
  { id: 'r4', name: 'Wallet', brand: 'Super Hero kiosk Print...', price: 355, originalPrice: 499, discount: 29, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop' },
];
