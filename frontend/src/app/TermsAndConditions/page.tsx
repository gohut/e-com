import Navbar from "@/components/navbar/Navbar";
import styles from "../page.module.css";

function TermsAndConditions() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <button className={styles.backButton} type="button" aria-label="Go back">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 6l-6 6 6 6" />
            </svg>
          </button>
          <h1 className={styles.aboutTitle}>Terms &amp; Conditions</h1>
        </div>

        <div className={styles.contentWrapper}>
          <h2 className={styles.termsTitle}>INTRODUCTION AND OVERVIEW OF KADAI</h2>
          <p className={styles.aboutText}>
            This policy applies to all the KADAI platforms (the "Site" or "Web Site" or
            "Mobile Application" or "App" or "Us" or "We" or "Social Media Platforms"),
            which is operated and owned by Kadai Apparels Pvt. Ltd., marketed and/or managed
            by Kadai Apparels Pvt. Ltd. It is KADAI&apos;s policy to comply with general laws for
            protecting user information and bank details shared for the purpose of availing
            KADAI services. This regulates the processing of information relating to you and
            grants you various rights in respect of your personal data.
          </p>
          <p className={styles.aboutText}>
            Any Images, Data or Files Uploaded on the website must not be used without the
            consent of the authorized personnel of the brand.
          </p>
          <p className={styles.aboutText}>
            The Web Site contains links to other websites over which we have no control. KADAI
            is not responsible for the privacy policies or practices of other web sites to
            which you choose to link from Kadai.com. We encourage you to review the privacy
            policies of those other web sites so you can understand how they collect, use and
            share your information.
          </p>

          <h2 className={styles.termsTitle}>PRIVACY POLICY</h2>
          <p className={styles.aboutText}>
            This Privacy Policy is intended for all Users of Kadai.com. KADAI is dedicated to
            respecting and protecting the privacy of our Users. All information User provides,
            such as phone number, home address, current location, e-mail addresses or any
            additional personal information found on the site, will be used solely to support
            User relationship with KADAI. KADAI strives to develop innovative methods to serve
            Users even better. KADAI is designed to operate efficiently while keeping the
            user&apos;s privacy in mind.
          </p>
          <p className={styles.aboutText}>
            This Privacy Policy outlines the types of personal information that KADAI gathers
            from its users and takes steps to safeguard it. In order to provide a personalized
            browsing experience, KADAI may collect information from you, which may include
            technical or other related information from the device used to access KADAI
            platforms including without limitation to your current location.
          </p>
          <p className={styles.aboutText}>
            By registering or using or visiting KADAI platforms, you explicitly accept,
            without limitation or qualification, the collection, use and transfer of the
            personal information provided by you in the manner described in the Terms &amp;
            Conditions and Privacy Policy. Kindly read the Terms &amp; Conditions and the Privacy
            Policy carefully as it affects your rights and liabilities under law. If you do
            not accept the Terms and Conditions and this Privacy Policy, PLEASE DO NOT USE
            KADAI SERVICES.
          </p>
          <p className={styles.aboutText}>
            KADAI reserves the right to take any rightful legal action against the customer if
            any fraudulent activity is identified such as multiple usage &amp; abuse of coupon
            code, wrong claims for orders etc.
          </p>

          <h2 className={styles.termsTitle}>FRAUD &amp; SCAM AWARENESS</h2>
          <p className={styles.aboutText}>
            Kadai never contacts customers to request advance payments, extra charges, or any
            financial transaction after an order has been placed. Please exercise caution and
            do not engage with any such fraudulent calls, messages, or phishing attempts. If
            you encounter such activity, you are advised to immediately report the incident to
            the National Cyber Cell (Helpline: 1930) or lodge a complaint at
            https://cybercrime.gov.in/Webform/Helpline.aspx. Once a complaint is registered,
            you may also reach out to us via our Online Ordering Help at
            https://www.Kadai.com/chatbot with your complaint reference number to help us
            serve you better.
          </p>

          <h2 className={styles.termsTitle}>USER&apos;S CONSENT</h2>
          <p className={styles.aboutText}>
            By using or visiting KADAI platforms, you expressly consent to the Terms and
            conditions and our Privacy Policy and to KADAI processing of Personal Information
            for the purposes given under the Terms &amp; Conditions and this Privacy Policy,
            subject to the local laws, in the following ways:
          </p>
          <ul className={styles.termsList}>
            <li>to create a personalized account containing your contact information, email-id, address, bank details etc based on information you provide or imported from other sites or applications, or any information provided by third parties;</li>
            <li>to contact you about any Website updates, informational and service-related communications, including important security updates;</li>
            <li>to inform you of other services available from KADAI or its affiliates;</li>
            <li>to enable you to provide feedback, and contact KADAI customer service in case of any problem with the services or emergency;</li>
            <li>to conduct surveys, make promotions, advertise and to provide the results thereof;</li>
            <li>to help your friends, contacts, and potential customers find your profile and connect with you;</li>
            <li>to detect, investigate and prevent activities that may violate our policies and are illegal.</li>
          </ul>

          <h2 className={styles.termsTitle}>CONTACT</h2>
          <p className={styles.aboutText}>For questions or concerns relating to privacy, feel free to contact us at:</p>
          <p className={styles.aboutText}>Address: 1/1, St. Johns Church Road, Bhartinagar, Bangalore - 560005</p>
          <p className={styles.aboutText}>Whatsapp: +91 6364430801</p>

          <h2 className={styles.termsTitle}>DISCLAIMER</h2>
          <p className={styles.aboutText}>
            WE RESERVE THE RIGHT TO CHANGE THE TERMS AND PRIVACY POLICY FROM TIME TO TIME AS
            WE DEEM FIT, WITHOUT ANY PRIOR INTIMATION TO YOU. YOUR CONTINUED USE OF THE WEB
            SITE SIGNIFIES YOUR ACCEPTANCE OF ANY AMENDMENT TO THESE TERMS. YOU ARE THEREFORE
            ADVISED TO READ THE PRIVACY POLICY ON A REGULAR BASIS. IN CASE YOU DISAGREE WITH
            ANY OF THE TERMS AND PRIVACY POLICIES OR ANY AMENDMENTS THEREAFTER, YOU MAY
            TERMINATE YOUR USE OF THIS WEBSITE IMMEDIATELY.
          </p>
          <p className={styles.aboutText}>
            WE FOLLOW GENERALLY ACCEPTED STANDARDS TO PROTECT THE PERSONAL INFORMATION
            SUBMITTED TO US, INCLUDING THE USE OF SERVICES FROM THIRD PARTY SERVICE PROVIDERS.
            THEREFORE, WHILE WE STRIVE TO USE COMMERCIALLY ACCEPTABLE MEANS TO PROTECT YOUR
            PERSONAL INFORMATION, WE CANNOT GUARANTEE ABSOLUTE SECURITY AND THEREBY USAGE IN A
            MANNER THAT IS INCONSISTENT WITH THIS PRIVACY POLICY.
          </p>
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
        <TermsAndConditions />
      </main>
    </div>
  );
}
