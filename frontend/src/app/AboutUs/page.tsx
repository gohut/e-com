import Navbar from "@/components/navbar/Navbar";
import styles from "../page.module.css";

const aboutUsContent = [
  "At SNITCH we are committed to protecting your privacy and information.",
  "It is the policy of SNITCH to act in accordance with current legislation and to meet the current best practice on the Internet. We aim to be responsible, relevant and secure when using your data.",
  "We never give out any of your personal information to 3rd parties, such as your name, postcode, email address etc. If we feel there might be something of interest or use to you, we will inform you ourselves using the details you have given. We do not log personal data via cookies, and we do not link any of your personal data with third parties to build our customers’ demographic.",
  "We collect data for the following purposes: Technical administration of the website, to enhance your experience of the site, customer service and SNITCH promotion. If we wish to use your personal data for any new purposes, we will ask for your consent to such use in advance.",
  "We reserve the right to share your personal information if we are obliged to by law and to enable us to apply our terms and conditions and agreements. This includes exchanging information with other organizations for fraud and credit risk reduction.",
  "Unfortunately, no data transmission over the Internet is 100% secure. As a result, while we try to protect your personal information, SNITCH cannot guarantee the security of any information you transmit to us, and you do so at your own risk.",
  "If at any time you wish to be completely removed from all our systems or if you just want to update any personal data we have about you or your business, then please contact us by any means.",
];

function AboutUs() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <button className={styles.backButton} type="button" aria-label="Go back">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 6l-6 6 6 6" />
            </svg>
          </button>
          <h1 className={styles.aboutTitle}>About Us</h1>
        </div>

        <div className={styles.contentWrapper}>
          {aboutUsContent.map((item) => (
            <p key={item} className={styles.aboutText}>
              {item}
            </p>
          ))}
        </div>

        <div className={styles.footerInfo}>
          
          <div className={styles.addressBox}>
            <h3>SNITCH APPARELS PRIVATE LIMITED</h3>

            <p>Registered Office Address</p>

            <p>
              No 1/1, 1st, 2nd, 3rd, 4th, 5th Floors, St. Johns
              <br />
              Church Road, Bharathinagar, Fraser Town,
              <br />
              Bangalore North, Karnataka, India – 560005
            </p>

            <p>CIN: U18109KA2022PTC163969</p>
          </div>

          <div className={styles.contactBox}>
            <h3>Grievance Contact details:</h3>

            <p>Name: Naveen Jain</p>

            <p>Designation: Lead Head</p>

            <p>Email: grievance@snitch.com</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={`${styles.page} ${styles.aboutPage}`}>
      <main className={`${styles.main} ${styles.aboutMain}`}>
        <Navbar />
        <AboutUs />
      </main>
    </div>
  );
}
