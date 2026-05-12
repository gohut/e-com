export type AddressLabel = 'HOME' | 'COLLEGE' | 'WORK' | 'OTHER';

export interface Address {
  id: string;
  name: string;
  plusCode: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  mobile: string;
  label: AddressLabel;
  isDefault: boolean;
}

export const MOCK_ADDRESSES: Address[] = [
  {
    id: 'addr1',
    name: 'GOWTHAM K',
    plusCode: '7J2W2JC+2W',
    area: 'MYLERIPALAYAM',
    city: 'MYLERIPALAYAM',
    state: 'TAMIL NADU',
    pincode: '641032',
    mobile: '9487428892',
    label: 'HOME',
    isDefault: true,
  },
  {
    id: 'addr2',
    name: 'GOWTHAM',
    plusCode: '7J2W2JC+3W',
    area: 'KARPAGAM COLLEGE OF ENGINEERING',
    city: 'MYLERIPALAYAM',
    state: 'TAMIL NADU',
    pincode: '641032',
    mobile: '9487428892',
    label: 'COLLEGE',
    isDefault: false,
  },
];
