import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <h4 className={styles.heading}>Online Shopping</h4>
          <ul className={styles.list}>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home</li>
            <li>Beauty</li>
            <li>GenZ</li>
            <li>Gift Cards</li>
            <li>Insider</li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Customer Policies</h4>
          <ul className={styles.list}>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&amp;C</li>
            <li>Terms of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Experience Our App On Mobile</h4>
          <div className={styles.storeButtons}>
            <div className={styles.storeBtn}>Get it on Google Play</div>
            <div className={styles.storeBtn}>Download on the App Store</div>
          </div>
          <div className={styles.contact}>
            <h4 className={styles.heading}>Contact Us</h4>
            <p className={styles.socials}>f X ig yt</p>
          </div>
        </div>

        <div className={styles.badges}>
          <div className={styles.badgeRow}>
            <div className={styles.badgeCircle}>ORIGINAL</div>
            <p>
              <strong>100% ORIGINAL</strong> gaurantee for all the products at mydresskadai.com
            </p>
          </div>

          <div className={styles.badgeRow}>
            <div className={styles.badgeSquare}>14</div>
            <p>
              <strong>Return Within 14 Days</strong> of recieving your order
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
