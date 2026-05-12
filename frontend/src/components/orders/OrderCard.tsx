'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Order } from '@/data/orders';
import StarRating from './StarRating';
import ReviewModal from './ReviewModal';
import styles from './OrderCard.module.scss';

function StatusIcon({ status }: { status: string }) {
  if (status === 'Delivered') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.statusCheckIcon}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.statusBagIcon}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

const STATUS_LABEL: Record<string, string> = {
  Ordered: 'Ordered', 'On the Way': 'On the Way',
  Delivered: 'Delivered', Cancelled: 'Cancelled', Returned: 'Returned',
};

interface Props { order: Order; }

export default function OrderCard({ order }: Props) {
  const { item, status, statusDate, id } = order;
  const [showReviewModal, setShowReviewModal] = useState(false);

  return (
    <>
      <div className={styles.card}>
      {/* Status Header */}
      <div className={styles.statusHeader}>
        <div className={styles.statusLeft}>
          <StatusIcon status={status} />
          <div>
            <p className={styles.statusLabel}>{STATUS_LABEL[status] || status}</p>
            <p className={styles.statusDate}>on {statusDate}</p>
          </div>
        </div>
      </div>

      {/* Product Row */}
      <Link href={`/account/orders/${id}`} className={styles.productRow}>
        <div className={styles.imageWrap}>
          <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} unoptimized />
        </div>
        <div className={styles.info}>
          <p className={styles.brand}>{item.brand}</p>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.size}><strong>Size</strong> - {item.size}</p>
        </div>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.arrow}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      </Link>

      {/* Review Row */}
      <div className={styles.reviewRow}>
        <div className={styles.reviewLeft}>
          <div className={styles.starsAndMedal}>
            <span className={styles.rewardIcon}>🏅</span>
            <StarRating value={item.rating ?? 0} readonly size="sm" />
          </div>
          <div className={styles.rewardText}>
            Rate &amp; Review to win <strong>Rewards</strong>
          </div>
        </div>
        <button className={styles.writeReview} onClick={() => setShowReviewModal(true)}>
          Write Review
        </button>
      </div>
    </div>
    {showReviewModal && <ReviewModal order={order} onClose={() => setShowReviewModal(false)} />}
    </>
  );
}

