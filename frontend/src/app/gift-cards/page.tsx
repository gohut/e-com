import Link from "next/link";
import AccountSidebar from "@/components/account-sidebar/AccountSidebar";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import styles from "./gift-cards-page.module.css";

type GiftCard = {
  amount: string;
  title: string;
  price: string;
};

type Section = {
  name: string;
  color: string;
  cards: GiftCard[];
};

const sections: Section[] = [
  {
    name: "BIRTHDAY CARDS",
    color: "#86bbe6",
    cards: [
      { amount: "500", title: "Happy Birthday Gift Cards", price: "₹500" },
      { amount: "₹1000", title: "Happy Birthday Gift Card", price: "₹1000" },
      { amount: "₹5000", title: "Birthday Special Gift Card", price: "₹5000" },
    ],
  },
  {
    name: "VALENTINE CARDS",
    color: "#efabad",
    cards: [
      { amount: "₹700", title: "Valentine Gift Card", price: "₹700" },
      { amount: "₹2000", title: "Couple's Special Card", price: "₹2000" },
      { amount: "₹5000", title: "Couple's Favorite Card", price: "₹5000" },
    ],
  },
  {
    name: "FAMILY CARDS",
    color: "#91ed71",
    cards: [
      { amount: "₹5,000", title: "Family Gift Card", price: "₹5,000" },
      { amount: "₹7,000", title: "Family Special Card", price: "₹7,000" },
      { amount: "₹10,000", title: "Family's Favorite Card", price: "₹10,000" },
    ],
  },
];

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.giftIcon}>
      <path fill="currentColor" d="M20 7h-2.18a3 3 0 0 0 .18-1 3 3 0 0 0-5.5-1.66A3 3 0 0 0 7 6c0 .35.06.69.18 1H5a1 1 0 0 0-1 1v3h8V8h2v3h8V8a1 1 0 0 0-1-1ZM9 6a1 1 0 1 1 2 0c0 .35-.16.68-.43.9L9 8.2V6Zm6 0v2.2l-1.57-1.3A1.2 1.2 0 0 1 13 6a1 1 0 1 1 2 0ZM4 13v6a1 1 0 0 0 1 1h7v-7H4Zm10 7h7a1 1 0 0 0 1-1v-6h-8v7Z"/>
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.heartIcon}>
      <path d="M12 21s-6.7-4.35-9.2-7.8A5.53 5.53 0 0 1 2 10a5 5 0 0 1 9.2-2.7A5 5 0 0 1 20.4 10a5.53 5.53 0 0 1-.8 3.2C17 16.65 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GiftCardTile({ card, color }: { card: GiftCard; color: string }) {
  return (
    <article className={styles.card} style={{ borderColor: color }}>
      <div className={styles.cardTop} style={{ backgroundColor: color }}>
        <div className={styles.cardAmounts}>
          <span>{card.amount}</span>
          <span>kadai</span>
        </div>

        <div className={styles.cardBrand}>
          <span>GIFT</span>
          <GiftIcon />
          <span>CARD</span>
        </div>

        <p>www.dresskadai.com</p>
      </div>

      <div className={styles.cardBottom}>
        <div>
          <h4>{card.title}</h4>
          <p>{card.price}</p>
        </div>
        <button aria-label="Add to wishlist" className={styles.wishBtn}>
          <HeartIcon />
        </button>
      </div>
    </article>
  );
}

export default function GiftCardsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.desktopOnly}>
        <Navbar />
      </div>

      <header className={styles.mobileHeader}>
        <button aria-label="Go back" className={styles.mobileBack}>
          &lt;
        </button>
        <h1>GIFT CARDS</h1>
        <span />
      </header>

      <main className={styles.main}>
        <div className={styles.scrollArea}>
          <h1 className={styles.pageTitle}>GIFT CARDS</h1>

          <div className={styles.toolbar}>
            <div className={styles.tabs}>
              <Link href="/gift-cards" className={`${styles.tabItem} ${styles.activeTab}`}>Giftcards</Link>
              <Link href="/coupons" className={styles.tabItem}>Coupons</Link>
            </div>

            <div className={styles.sortWrap}>
              <span>Sort by</span>
              <button className={styles.sortBtn}>
                Relevance
                <span>⌄</span>
              </button>
            </div>
          </div>

          <section className={styles.contentWrap}>
            <div className={styles.sidebarWrap}>
              <AccountSidebar activeItem="Gift Cards & Coupons" />
            </div>

            <div className={styles.sections}>
              {sections.map((section) => (
                <section key={section.name} className={styles.group}>
                  <h3>{section.name}</h3>
                  <div className={styles.cardsGrid}>
                    {section.cards.map((card) => (
                      <GiftCardTile key={`${section.name}-${card.title}`} card={card} color={section.color} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>
        </div>
      </main>

      <div className={styles.desktopOnly}>
        <Footer />
      </div>

      <div className={styles.mobileBottomBar}>
        <button className={styles.mobileBottomBtn}>
          <span>⎚</span>
          <span>Filter</span>
        </button>
        <button className={styles.mobileBottomBtn}>
          <span>↕</span>
          <span>Sort</span>
        </button>
      </div>
    </div>
  );
}
