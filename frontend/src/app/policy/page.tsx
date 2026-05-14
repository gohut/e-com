import styles from "../page.module.css";

type IconButtonProps = {
  label: string;
  children: React.ReactNode;
};

const returnPolicyItems = [
  "Hassle-free returns within 7 days; specific conditions apply based on products and promotions.",
  "Prepaid order refunds are processed to the original payment method; COD orders receive a refund in the Kadai wallet.",
  "Issues with defective, incorrect, or damaged products must be reported within 24 hours of delivery.",
  "Items purchased during special sales with free product offers, like BOGO, are ineligible for returns.",
  "A reverse shipment fee up to Rs 100 can be charged for excessive returns, which will be deducted from the refund.",
  "For hygiene, items such as accessories, sunglasses, perfumes, masks, and innerwear are non-returnable.",
];


function IconButton({ label, children }: IconButtonProps) {
  return (
    <button className={styles.iconButton} type="button" aria-label={label}>
      {children}
    </button>
  );
}

function Navbar() {
  return (
    <header className={styles.navbar}>
      <button
        className={`${styles.iconButton} ${styles.hamburgerButton}`}
        type="button"
        aria-label="Open menu"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <div className={styles.brand}>
        <span className={styles.brandLogo} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M4 12h16M12 4v16M7 7l10 10M17 7L7 17" />
          </svg>
        </span>
        <span className={styles.brandName}>NAME</span>
      </div>

      <div className={styles.navActions}>
        <label className={styles.searchField}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6" />
            <path d="M20 20l-4.2-4.2" />
          </svg>
          <input type="search" placeholder="Search..." />
        </label>

        <IconButton label="Open profile">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 19c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5" />
          </svg>
        </IconButton>

        <IconButton label="Open cart">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 7h10l-1 11H8L7 7z" />
            <path d="M9 7a3 3 0 016 0" />
          </svg>
        </IconButton>
      </div>
    </header>
  );
}

function TermsAndConditions() {
  return (
    <section className={styles.termsSection}>
      <h1 className={styles.termsTitle}>Return & Exchange Policy</h1>
      <ol className={styles.termsList}>
        {returnPolicyItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <h1 className={styles.termsTitle}>FOR KadaiX MEMBERS</h1>
      <p className={styles.termsParagraph}>
        By using or visiting KADAI platforms, you expressly consent to the Terms and conditions and our Privacy Policy and
        to KADAI processing of Personal Information for the purposes given under the Terms &amp; Conditions and this Privacy
        Policy, subject to the local laws, in the following ways: to create a personalized account containing your contact
        information, email-id, address, bank details etc based on information you provide or imported from other sites or
        applications, or any information provided by third parties; to contact you about any Website updates, informational
        and service-related communications, including important security updates; to inform you of other services available
        from KADAI or its affiliates; to enable you to provide feedback, and contact KADAI customer service in case of any
        problem with the services or emergency; to conduct surveys, make promotions, advertise and to provide the results
        thereof; to help your friends, contacts, and potential customers find your profile and connect with you; to detect,
        investigate and prevent activities that may violate our policies and are illegal.
      </p>

    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <TermsAndConditions />
      </main>
    </div>
  );
}
