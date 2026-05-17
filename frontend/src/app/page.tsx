"use client"
import type { ReactNode } from "react";
import styles from "./page.module.css";

type IconButtonProps = {
  label: string;
  children: ReactNode;
};

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

function MobileHeader() {
  return (
    <header className={styles.homeMobileHeader}>
      <button className={styles.homeMobileBackButton} type="button" aria-label="Go back">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 6l-6 6 6 6" />
        </svg>
      </button>
      <h1 className={styles.homeMobileTitle}>Policy</h1>
    </header>
  );
}

function TermsAndConditions() {
  return (
    <section className={styles.termsSection}>
      <h1 className={styles.termsTitle}>INTRODUCTION AND OVERVIEW OF KADAI</h1>

      <p className={styles.termsParagraph}>
        This policy applies to all the KADAI platforms (the “Site” or “Web Site” or “Mobile Application” or “App” or “Us” or “We” or “Social Media Platforms”), which is operated and owned by Kadai Apparels Pvt. Ltd., marketed and/or managed by Kadai Apparels Pvt. Ltd. It is KADAI&apos;s policy to comply with general laws for protecting user information and bank details shared for the purpose of availing KADAI services. This regulates the processing of information relating to you and grants you various rights in respect of your personal data.
Any Images, Data or Files Uploaded on the website must not be used without the consent of the authorized personnel of the brand.
The Web Site contains links to other websites over which we have no control. KADAI is not responsible for the privacy policies or practices of other web sites to which you choose to link from Kadai.com. We encourage you to review the privacy policies of those other web sites so you can understand how they collect, use and share your information. 
      </p>


      <h1 className={styles.termsTitle}>PRIVACY POLICY</h1>

      <p className={styles.termsParagraph}>
        This Privacy Policy is intended for all Users of Kadai.com. KADAI is dedicated to respecting and protecting the privacy of our Users. All information User provides, such as phone number, home address, current location, e-mail addresses or any additional personal information found on the site, will be used solely to support User relationship with KADAI. KADAI strives to develop innovative methods to serve Users even better. KADAI is designed to operate efficiently while keeping the user&apos;s privacy in mind.
This Privacy Policy outlines the types of personal information that KADAI gathers from its users and takes steps to safeguard it. In order to provide a personalized browsing experience, KADAI may collect information from you, which may include technical or other related information from the device used to access KADAI platforms including without limitation to your current location.
By registering or using or visiting KADAI platforms, you explicitly accept, without limitation or qualification, the collection, use and transfer of the personal information provided by you in the manner described in the Terms & Conditions and Privacy Policy. Kindly read the Terms & Conditions and the Privacy Policy carefully as it affects your rights and liabilities under law. If you do not accept the Terms and Conditions and this Privacy Policy, PLEASE DO NOT USE KADAI SERVICES.
KADAI reserves the right to take any rightful legal action against the customer if any fraudulent activity is identified such as multiple usage & abuse of coupon code, wrong claims for orders etc.
      </p>


      <h1 className={styles.termsTitle}>Fraud & Scam Awareness</h1>

      <p className={styles.termsParagraph}>
        Kadai never contacts customers to request advance payments, extra charges, or any financial transaction after an order has been placed. Please exercise caution and do not engage with any such fraudulent calls, messages, or phishing attempts. If you encounter such activity, you are advised to immediately report the incident to the National Cyber Cell (Helpline: 1930) or lodge a complaint at https://cybercrime.gov.in/Webform/Helpline.aspx. Once a complaint is registered, you may also reach out to us via our Online Ordering Help at https://www.Kadai.com/chatbot with your complaint reference number to help us serve you better.
      </p>


      <h1 className={styles.termsTitle}>User’s Consent</h1>

       <p className={styles.termsParagraph}>
        By using or visiting KADAI platforms, you expressly consent to the Terms and conditions and our Privacy Policy and to KADAI processing of Personal Information for the purposes given under the Terms & Conditions and this Privacy Policy, subject to the local laws, in the following ways:
to create a personalized account containing your contact information, email-id, address, bank details etc based on information you provide or imported from other sites or applications, or any information provided by third parties;
to contact you about any Website updates, informational and service-related communications, including important security updates;
to inform you of other services available from KADAI or its affiliates;
to enable you to provide feedback, and contact KADAI customer service in case of any problem with the services or emergency;
to conduct surveys, make promotions, advertise and to provide the results thereof;
to help your friends, contacts, and potential customers find your profile and connect with you;
to detect, investigate and prevent activities that may violate our policies and are illegal.
      </p>


      <h1 className={styles.termsTitle}>Contact</h1>

       <p className={styles.termsParagraph}>
       For questions or concerns relating to privacy, feel free to contact us at:
Address: 1/1, St. Johns Church Road, Bhartinagar, Bangalore - 560005Whatsapp: +91 6364430801
      </p>


      <h1 className={styles.termsTitle}>Disclaimer</h1>

       <p className={styles.termsParagraph}>
        WE RESERVE THE RIGHT TO CHANGE THE TERMS AND PRIVACY POLICY FROM TIME TO TIME AS WE DEEM FIT, WITHOUT ANY PRIOR INTIMATION TO YOU. YOUR CONTINUED USE OF THE WEB SITE SIGNIFIES YOUR ACCEPTANCE OF ANY AMENDMENT TO THESE TERMS. YOU ARE THEREFORE ADVISED TO READ THE PRIVACY POLICY ON A REGULAR BASIS. IN CASE YOU DISAGREE WITH ANY OF THE TERMS AND PRIVACY POLICIES OR ANY AMENDMENTS THEREAFTER, YOU MAY TERMINATE YOUR USE OF THIS WEBSITE IMMEDIATELY.
WE FOLLOW GENERALLY ACCEPTED STANDARDS TO PROTECT THE PERSONAL INFORMATION SUBMITTED TO US, INCLUDING THE USE OF SERVICES FROM THIRD PARTY SERVICE PROVIDERS. THEREFORE, WHILE WE STRIVE TO USE COMMERCIALLY ACCEPTABLE MEANS TO PROTECT YOUR PERSONAL INFORMATION, WE CANNOT GUARANTEE ABSOLUTE SECURITY AND THEREBY USAGE IN A MANNER THAT IS INCONSISTENT WITH THIS PRIVACY POLICY.
      </p>
      
    </section>
    
  
  );
}

export default function Home() {
  return (
    <div className={`${styles.page} ${styles.homePage}`}>
      <main className={`${styles.main} ${styles.homeMain}`}>
        <Navbar />
        <MobileHeader />
        <TermsAndConditions />
      </main>
    </div>
  );
}
