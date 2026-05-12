'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_ORDERS } from '@/data/orders';
import StarRating from '@/components/orders/StarRating';
import styles from './review.module.scss';

export default function ReviewPage() {
  const params  = useParams<{ id: string }>();
  const router  = useRouter();
  const order   = MOCK_ORDERS.find((o) => o.id === params.id);

  const [rating,  setRating]  = useState(0);
  const [title,   setTitle]   = useState('');
  const [review,  setReview]  = useState('');
  const [images,  setImages]  = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [errors,  setErrors]  = useState<Record<string, string>>({});

  if (!order) return <p>Order not found.</p>;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!rating)            e.rating = 'Please select a rating';
    if (review.length < 10) e.review = 'Review must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>🏅</div>
        <h2>Review Submitted!</h2>
        <p>Thank you for your feedback. You&apos;ve earned reward points!</p>
        <Link href="/account/orders" className={styles.backBtn}>Back to Orders</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb}>
        <Link href="/account/orders">Orders</Link> <span>›</span>
        <Link href={`/account/orders/${params.id}`}>{order.item.brand}</Link> <span>›</span>
        <span>Write Review</span>
      </nav>

      <div className={styles.card}>
        {/* Product Summary */}
        <div className={styles.productRow}>
          <div className={styles.imageWrap}>
            <Image src={order.item.image} alt={order.item.name} fill style={{ objectFit: 'cover' }} unoptimized />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.brand}>{order.item.brand}</p>
            <p className={styles.name}>{order.item.name}</p>
            <p className={styles.size}>Size: <strong>{order.item.size}</strong></p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Star Rating */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Your Rating <span className={styles.required}>*</span></label>
            <div className={styles.ratingWrap}>
              <StarRating value={rating} onChange={setRating} size="lg" />
              <span className={styles.ratingText}>
                {rating === 1 ? 'Poor' : rating === 2 ? 'Fair' : rating === 3 ? 'Good' : rating === 4 ? 'Very Good' : rating === 5 ? 'Excellent!' : 'Tap to rate'}
              </span>
            </div>
            {errors.rating && <p className={styles.error}>{errors.rating}</p>}
          </div>

          {/* Title */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="review-title">Review Title</label>
            <input
              id="review-title" type="text" placeholder="Summarise your experience..."
              value={title} onChange={(e) => setTitle(e.target.value)}
              className={styles.input} maxLength={100}
            />
          </div>

          {/* Review Text */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="review-text">Your Review <span className={styles.required}>*</span></label>
            <textarea
              id="review-text" rows={5} placeholder="Tell others what you think about this product..."
              value={review} onChange={(e) => setReview(e.target.value)}
              className={`${styles.textarea} ${errors.review ? styles.errorField : ''}`}
              maxLength={1000}
            />
            <div className={styles.charCount}>{review.length}/1000</div>
            {errors.review && <p className={styles.error}>{errors.review}</p>}
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={() => router.back()} className={styles.cancelBtn}>Cancel</button>
            <button type="submit" className={styles.submitBtn}>Submit Review</button>
          </div>
        </form>
      </div>
    </div>
  );
}
