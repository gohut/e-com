import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MOCK_ORDERS, RECOMMENDED_ITEMS } from '@/data/orders';
import StarRating from '@/components/orders/StarRating';
import styles from './order-detail.module.scss';

interface Props { params: Promise<{ id: string }> }

export default async function OrderDetailPage({ params }: Props) {
  const { id } = await params;
  const order = MOCK_ORDERS.find((o) => o.id === id);
  if (!order) notFound();

  const { item, status, statusDate, deliveryAddress, paymentMethod, totalPrice, coins, orderId, updatesSentTo } = order;

  const statusConfig: Record<string, { color: string; icon: string; label: string }> = {
    Ordered:     { color: '#F2994A', icon: '📦', label: 'Ordered' },
    'On the Way':{ color: '#2F80ED', icon: '🚚', label: 'On the Way' },
    Delivered:   { color: '#27AE60', icon: '✅', label: 'Deliveried' },
    Cancelled:   { color: '#828282', icon: '❌', label: 'Cancelled' },
    Returned:    { color: '#828282', icon: '↩️', label: 'Returned' },
  };

  const cfg = statusConfig[status] || statusConfig['Ordered'];

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/">Home</Link> <span>›</span>
        <Link href="/account">Profile</Link> <span>›</span>
        <Link href="/account/orders">Your Orders</Link> <span>›</span>
        <span className={styles.current}>Order Detail</span>
      </nav>

      <div className={styles.layout}>
        {/* Help Button */}
        <div className={styles.helpRow}>
          <button className={styles.helpBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={16} height={16}>
              <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Help
          </button>
        </div>

        {/* Product Card */}
        <div className={styles.productCard}>
          <div className={styles.productImageWrap}>
            <Image src={item.image} alt={item.name} fill style={{ objectFit: 'contain' }} unoptimized />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.brand}>{item.brand}</p>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.meta}><span>Size(s)</span> {item.size} &nbsp;&nbsp; <span>Quantity</span> {item.quantity}</p>
            <p className={styles.orderId}>Order ID : {orderId}</p>
          </div>
        </div>

        {/* Status Banner */}
        <div className={styles.statusBanner} style={{ borderLeft: `4px solid ${cfg.color}` }}>
          <div className={styles.statusLeft}>
            <span className={styles.statusEmoji}>{cfg.icon}</span>
            <div>
              <p className={styles.statusLabel} style={{ color: cfg.color }}>{cfg.label}</p>
              <p className={styles.statusDate}>on {statusDate}</p>
            </div>
          </div>
          {status === 'Delivered' && (
            <div className={styles.deliveredBadge}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#27AE60" strokeWidth="2.5" width={32} height={32}>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
          )}
          <Link href={`/account/orders/${id}/track`} className={styles.trackLink}>Track Order →</Link>
        </div>

        {/* Rating Section */}
        <div className={styles.ratingSection}>
          <div className={styles.ratingLeft}>
            <span className={styles.rewardEmoji}>🏅</span>
            <StarRating value={item.rating ?? 0} readonly size="md" />
          </div>
          <Link href={`/account/orders/${id}/review`} className={styles.writeReview}>Write Review</Link>
        </div>
        <p className={styles.ratingSubtext}>Rate &amp; Review to win <strong>Rewards</strong></p>

        {/* Recommended Items */}
        <div className={styles.recommended}>
          <h3 className={styles.sectionTitle}>Items that go well with this item</h3>
          <div className={styles.recList}>
            {RECOMMENDED_ITEMS.map((rec) => (
              <Link key={rec.id} href="#" className={styles.recItem}>
                <div className={styles.recImageWrap}>
                  <Image src={rec.image} alt={rec.name} fill style={{ objectFit: 'cover' }} unoptimized />
                </div>
                <button className={styles.wishlistBtn} aria-label="Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={14} height={14}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
                <p className={styles.recName}>{rec.name}</p>
                <p className={styles.recBrand}>{rec.brand}</p>
                <div className={styles.recPricing}>
                  <span className={styles.recPrice}>₹{rec.price}</span>
                  <span className={styles.recOriginal}>₹{rec.originalPrice}</span>
                  <span className={styles.recDiscount}>{rec.discount}% off</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Delivery Address */}
        <div className={styles.infoSection}>
          <h3 className={styles.sectionTitle}>Delivery To</h3>
          <div className={styles.deliveryCard}>
            <div className={styles.deliveryRow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={16} height={16}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
              <p className={styles.deliveryName}>{deliveryAddress.name}</p>
            </div>
            <div className={styles.deliveryRow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={16} height={16}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <p className={styles.deliveryAddr}>
                {deliveryAddress.plusCode}, {deliveryAddress.area}, {deliveryAddress.city} - {deliveryAddress.pincode}, {deliveryAddress.state}
              </p>
            </div>
          </div>
        </div>

        {/* Coins */}
        <div className={styles.coinsSection}>
          <span>🪙</span>
          <p>You&apos;ll receive a total of <strong className={styles.coinsAmt}>₹{coins}</strong></p>
        </div>

        {/* Order Summary */}
        <div className={styles.summarySection}>
          <div className={styles.summaryRow}>
            <span>Total Order Price</span>
            <span className={styles.totalPrice}>₹{totalPrice.toFixed(2)} ∨</span>
          </div>
          <div className={styles.paymentMethod}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={16} height={16}>
              <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            <span>{paymentMethod}</span>
          </div>
          <p className={styles.soldBy}>Items Sold By : Stunnyand</p>
          <button className={styles.invoiceBtn}>Get Invoice</button>
        </div>

        {/* Updates */}
        <div className={styles.updatesSection}>
          <div className={styles.updateRow}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={16} height={16}>
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
            </svg>
            <span>Updates Sent to</span>
            <strong>{updatesSentTo}</strong>
          </div>
        </div>

        {/* Order Details */}
        <div className={styles.orderMeta}>
          <h3 className={styles.sectionTitle}>Order Details</h3>
          <div className={styles.metaGrid}>
            <div><p className={styles.metaLabel}>Ordered On:</p><p className={styles.metaValue}>{item.orderedDate}</p></div>
            <div><p className={styles.metaLabel}>Order Id:</p><p className={styles.metaValue}>{orderId}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
