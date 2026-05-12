'use client';
import { useState } from 'react';
import styles from './StarRating.module.scss';

interface Props {
  value?: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function StarRating({ value = 0, onChange, readonly = false, size = 'md' }: Props) {
  const [hovered, setHovered] = useState(0);
  const display = hovered || value;

  return (
    <div className={`${styles.stars} ${styles[size]}`} aria-label={`Rating: ${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`${styles.star} ${display >= star ? styles.filled : ''}`}
          onClick={() => !readonly && onChange?.(star)}
          onMouseEnter={() => !readonly && setHovered(star)}
          onMouseLeave={() => !readonly && setHovered(0)}
          disabled={readonly}
          aria-label={`${star} star`}
        >
          <svg viewBox="0 0 24 24" fill={display >= star ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      ))}
    </div>
  );
}
