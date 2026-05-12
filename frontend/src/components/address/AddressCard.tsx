'use client';
import { Address } from '@/data/addresses';
import styles from './AddressCard.module.scss';

interface Props {
  address: Address;
  onEdit?: (id: string) => void;
  onRemove?: (id: string) => void;
  onSetDefault?: (id: string) => void;
}

export default function AddressCard({ address, onEdit, onRemove }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <p className={styles.name}>{address.name}</p>
        <span className={`${styles.label} ${styles[`label_${address.label}`]}`}>{address.label}</span>
      </div>
      <div className={styles.addressLines}>
        <p>{address.plusCode}</p>
        <p>{address.area}</p>
        <p>{address.city} - {address.pincode}</p>
        <p>{address.state}</p>
      </div>
      <p className={styles.mobile}><strong>MOBILE:</strong> {address.mobile}</p>
      {address.isDefault && (
        <div className={styles.actions}>
          <button className={styles.editBtn} onClick={() => onEdit?.(address.id)}>EDIT</button>
          <button className={styles.removeBtn} onClick={() => onRemove?.(address.id)}>REMOVE</button>
        </div>
      )}
    </div>
  );
}
