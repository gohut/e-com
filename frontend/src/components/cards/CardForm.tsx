'use client';
import { useState } from 'react';
import styles from './CardForm.module.scss';

function formatCardNumber(value: string) {
  return value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}

interface Props { onSuccess?: () => void; }

export default function CardForm({ onSuccess }: Props) {
  const [cardNum, setCardNum] = useState('');
  const [expiry, setExpiry]   = useState('');
  const [cvv, setCvv]         = useState('');
  const [errors, setErrors]   = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (cardNum.replace(/\s/g, '').length < 16) e.cardNum = 'Enter a valid 16-digit card number';
    if (expiry.length < 5) e.expiry = 'Enter valid expiry date';
    if (cvv.length < 3)    e.cvv    = 'Enter valid CVV';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) { onSuccess?.(); alert('Card added successfully!'); }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.inputGroup}>
        <div className={`${styles.inputWrap} ${errors.cardNum ? styles.error : ''}`}>
          <input
            type="text" placeholder="Card Number"
            value={cardNum} onChange={(e) => setCardNum(formatCardNumber(e.target.value))}
            inputMode="numeric" autoComplete="cc-number"
          />
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.cardIcon}>
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
        </div>
        {errors.cardNum && <p className={styles.errorMsg}>{errors.cardNum}</p>}
      </div>

      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <div className={`${styles.inputWrap} ${errors.expiry ? styles.error : ''}`}>
            <input
              type="text" placeholder="Valid Thru (MM/YY)"
              value={expiry} onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              inputMode="numeric" autoComplete="cc-exp"
            />
          </div>
          {errors.expiry && <p className={styles.errorMsg}>{errors.expiry}</p>}
        </div>
        <div className={styles.inputGroup}>
          <div className={`${styles.inputWrap} ${errors.cvv ? styles.error : ''}`}>
            <input
              type="password" placeholder="CVV" maxLength={4}
              value={cvv} onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
              inputMode="numeric" autoComplete="cc-csc"
            />
          </div>
          {errors.cvv && <p className={styles.errorMsg}>{errors.cvv}</p>}
        </div>
      </div>

      <button type="submit" className={styles.submitBtn}>ADD CARD</button>
    </form>
  );
}
