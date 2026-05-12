'use client';
import { useState } from 'react';
import { CASHBACK_OFFERS, MOCK_CARDS } from '@/data/cards';
import CardForm from '@/components/cards/CardForm';
import styles from './cards.module.scss';

export default function CardsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [cards, setCards] = useState(MOCK_CARDS);
  const [showForm, setShowForm] = useState(false);

  const offer = CASHBACK_OFFERS[activeSlide];

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>ADD YOUR CARD</h1>

      {/* Cashback Banner Carousel */}
      <div className={styles.carouselWrap}>
        <div className={styles.cashbackBanner}>
          <div className={styles.bannerIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={28} height={28}>
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
            </svg>
          </div>
          <div>
            <p className={styles.cashbackPercent}>{offer.percent}% Assured CashBack</p>
            <p className={styles.cashbackDesc}>{offer.description}</p>
          </div>
        </div>
        {/* Dots */}
        <div className={styles.dots}>
          {CASHBACK_OFFERS.map((_, i) => (
            <button
              key={i} aria-label={`Offer ${i + 1}`}
              className={`${styles.dot} ${i === activeSlide ? styles.dotActive : ''}`}
              onClick={() => setActiveSlide(i)}
            />
          ))}
        </div>
      </div>

      {/* Info text */}
      <p className={styles.infoText}>
        Please Ensure your card can be used for online transactions{' '}
        <a href="#" className={styles.knowMore}>Know More</a>
      </p>

      {/* Saved Cards */}
      {cards.length > 0 && (
        <div className={styles.savedSection}>
          <h2 className={styles.sectionTitle}>Saved Cards</h2>
          <div className={styles.savedList}>
            {cards.map((card) => (
              <div key={card.id} className={styles.savedCard}>
                <div className={styles.cardChip}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={24} height={24}>
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <div className={styles.cardDetails}>
                  <p className={styles.cardBrand}>{card.brand}</p>
                  <p className={styles.cardNum}>•••• •••• •••• {card.last4}</p>
                  <p className={styles.cardExpiry}>Expires {card.expiryMonth}/{card.expiryYear}</p>
                </div>
                <button
                  className={styles.removeCardBtn}
                  onClick={() => setCards((prev) => prev.filter((c) => c.id !== card.id))}
                >Remove</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Form */}
      {!showForm ? (
        <button className={styles.addCardToggle} onClick={() => setShowForm(true)}>+ Add New Card</button>
      ) : (
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>New Card Details</h2>
          <CardForm onSuccess={() => setShowForm(false)} />
          <button className={styles.cancelAddBtn} onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
