import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MOCK_ORDERS } from '@/data/orders';
import styles from './track.module.scss';

interface Props { params: Promise<{ id: string }> }

const TRACK_STEPS = [
  { key: 'Ordered',     label: 'Order Placed',     icon: '📋', desc: 'Your order has been confirmed' },
  { key: 'Shipped',     label: 'Shipped',           icon: '📦', desc: 'Your order has been shipped' },
  { key: 'On the Way',  label: 'Out for Delivery',  icon: '🚚', desc: 'Your order is out for delivery' },
  { key: 'Delivered',   label: 'Delivered',         icon: '✅', desc: 'Your order has been delivered' },
];

const STATUS_STEP_INDEX: Record<string, number> = {
  Ordered: 0, Shipped: 1, 'On the Way': 2, Delivered: 3, Cancelled: -1, Returned: -1,
};

export default async function TrackOrderPage({ params }: Props) {
  const { id } = await params;
  const order = MOCK_ORDERS.find((o) => o.id === id);
  if (!order) notFound();

  const currentStep = STATUS_STEP_INDEX[order.status] ?? 0;
  const isCancelled = order.status === 'Cancelled' || order.status === 'Returned';

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb}>
        <Link href="/account/orders">Orders</Link> <span>›</span>
        <Link href={`/account/orders/${id}`}>{order.item.brand}</Link> <span>›</span>
        <span>Track Order</span>
      </nav>

      <div className={styles.card}>
        {/* Product */}
        <div className={styles.productRow}>
          <div className={styles.imageWrap}>
            <Image src={order.item.image} alt={order.item.name} fill style={{ objectFit: 'cover' }} unoptimized />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.brand}>{order.item.brand}</p>
            <p className={styles.name}>{order.item.name}</p>
            <p className={styles.orderId}>Order ID: {order.orderId}</p>
          </div>
        </div>

        {/* Status */}
        <div className={styles.statusSection}>
          {isCancelled ? (
            <div className={styles.cancelledState}>
              <span>❌</span>
              <div>
                <p className={styles.cancelledLabel}>Order {order.status}</p>
                <p className={styles.cancelledDate}>on {order.statusDate}</p>
              </div>
            </div>
          ) : (
            <div className={styles.stepper}>
              {TRACK_STEPS.map((step, idx) => {
                const done    = idx <= currentStep;
                const current = idx === currentStep;
                return (
                  <div key={step.key} className={`${styles.step} ${done ? styles.done : ''} ${current ? styles.current : ''}`}>
                    <div className={styles.stepLeft}>
                      <div className={styles.stepIcon}>{step.icon}</div>
                      {idx < TRACK_STEPS.length - 1 && <div className={`${styles.connector} ${done && idx < currentStep ? styles.connectorDone : ''}`} />}
                    </div>
                    <div className={styles.stepContent}>
                      <p className={styles.stepLabel}>{step.label}</p>
                      <p className={styles.stepDesc}>{step.desc}</p>
                      {current && <p className={styles.stepDate}>{order.statusDate}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Delivery Address */}
        <div className={styles.deliverySection}>
          <h3 className={styles.sectionTitle}>Delivery Address</h3>
          <div className={styles.addressCard}>
            <p className={styles.addrName}>{order.deliveryAddress.name}</p>
            <p className={styles.addrLine}>{order.deliveryAddress.area}, {order.deliveryAddress.city}</p>
            <p className={styles.addrLine}>{order.deliveryAddress.state} - {order.deliveryAddress.pincode}</p>
            <p className={styles.addrLine}>📱 {order.deliveryAddress.mobile}</p>
          </div>
        </div>

        <div className={styles.footer}>
          <Link href={`/account/orders/${id}`} className={styles.detailsBtn}>View Order Details</Link>
        </div>
      </div>
    </div>
  );
}
