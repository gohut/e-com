import Navbar from "@/components/navbar/Navbar";
import styles from "../page.module.css";

const returnPolicyItems = [
  "Hassle-free returns within 7 days; specific conditions apply based on products and promotions.",
  "Prepaid order refunds are processed to the original payment method; COD orders receive a refund in the Kadai wallet.",
  "Issues with defective, incorrect, or damaged products must be reported within 24 hours of delivery.",
  "Items purchased during special sales with free product offers, like BOGO, are ineligible for returns.",
  "A reverse shipment fee up to Rs 100 can be charged for excessive returns, which will be deducted from the refund.",
  "For hygiene, items such as accessories, sunglasses, perfumes, masks, and innerwear are non-returnable.",
];

function MobileHeader() {
  return (
    <header className={styles.policyMobileHeader}>
      <button className={styles.policyMobileBackButton} type="button" aria-label="Go back">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 6l-6 6 6 6" />
        </svg>
      </button>
      <h1 className={styles.policyMobileTitle}>Policy</h1>
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
    <div className={`${styles.page} ${styles.policyPage}`}>
      <main className={`${styles.main} ${styles.policyMain}`}>
        <Navbar />
        <MobileHeader />
        <TermsAndConditions />
      </main>
    </div>
  );
}
