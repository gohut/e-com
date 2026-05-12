export interface SavedCard {
  id: string;
  last4: string;
  brand: 'Visa' | 'Mastercard' | 'Rupay' | 'Amex';
  expiryMonth: string;
  expiryYear: string;
  holderName: string;
}

export const MOCK_CARDS: SavedCard[] = [
  { id: 'card1', last4: '4242', brand: 'Visa', expiryMonth: '12', expiryYear: '27', holderName: 'LINGESWARAN K' },
];

export const CASHBACK_OFFERS = [
  { id: 'cb1', percent: 7.5, description: 'on a minimum spend of ₹100. T&C' },
  { id: 'cb2', percent: 5.0, description: 'on orders above ₹500. T&C' },
  { id: 'cb3', percent: 10.0, description: 'on first card transaction. T&C' },
];
