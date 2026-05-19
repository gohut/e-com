import Navbar from "@/components/navbar/Navbar";
import styles from "../page.module.css";

const privacyPolicyItems = [
  "At SNITCH we are committed to protecting your privacy and information.",
  "It is the policy of SNITCH to act in accordance with current legislation and to meet the current best practice on the Internet. We aim to be responsible, relevant and secure when using your data.",
  "We never give out any of your personal information to 3rd parties, such as your name, postcode, email address etc. If we feel there might be something of interest or use to you, we will inform you ourselves using the details you have given. We do not log personal data via cookies, and we do not link any of your personal data with third parties to build our customers demographic.",
  "We collect data for the following purposes: Technical administration of the website, to enhance your experience of the site, customer service and SNITCH promotion. If we wish to use your personal data for any new purposes, we will ask for your consent to such use in advance.",
  "We reserve the right to share your personal information if we are obliged to by law and to enable us to apply our terms and conditions and agreements. This includes enhancing information with other organizations for fraud and credit risk reduction.",
  "Unfortunately, no data transmission over the Internet is 100% secure. As a result, while we try to protect your personal information, SNITCH cannot guarantee the security of any information you transmit to us, and you do so at your own risk.",
  "At any time you wish to be completely removed from all our systems or if you just want to update any personal data we have about you or your business, then please contact us by any means.",
];

function MobileHeader() {
  return (
    <header className={styles.privacyMobileHeader}>
      <button className={styles.privacyMobileBackButton} type="button" aria-label="Go back">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 6l-6 6 6 6" />
        </svg>
      </button>
      <h1 className={styles.privacyMobileTitle}>Privacy Policy</h1>
    </header>
  );
}

function PrivacyPolicy() {
  return (
    <section className={`${styles.termsSection} ${styles.centeredPolicySection}`}>
      <h1 className={styles.termsTitle}>PRIVACY POLICY</h1>

      <div className={styles.policyBox}>
        {privacyPolicyItems.map((item) => (
          <p key={item} className={`${styles.termsParagraph} ${styles.centeredPolicyText}`}>
            {item}
          </p>
        ))}
      </div>

      <h2 className={styles.termsSubtitle}>FRAUD & SCAM AWARENESS</h2>

      <p className={`${styles.termsParagraph} ${styles.centeredPolicyText}`}>
        Snitch never contacts customers to request advance payments, extra
        charges, or any financial transaction after an order has been placed.
        Please exercise caution and do not engage with any such fraudulent
        calls, messages, or phishing attempts. If you encounter such activity,
        you are advised to immediately report the incident to the National Cyber
        Cell (Helpline: 1930) or lodge a complaint at
        https://cybercrime.gov.in/Webform/Helpline.aspx.
      </p>

      <p className={`${styles.termsParagraph} ${styles.centeredPolicyText}`}>
        Once a complaint is registered, you may also reach out to us via our
        Online Ordering Help at https://www.snitch.com/chatbot with your
        complaint reference number to help us serve you better.
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <div className={`${styles.page} ${styles.privacyPage}`}>
      <main className={`${styles.main} ${styles.privacyMain}`}>
        <Navbar />
        <MobileHeader />
        <PrivacyPolicy />
      </main>
    </div>
  );
}
