import styles from "./AccountSidebar.module.css";

type AccountSidebarProps = {
  activeItem: string;
};

const sidebarItems = [
  "Profile",
  "Orders",
  "Wishlist",
  "Addresses",
  "Gift Cards & Coupons",
  "Settings",
  "Preferences",
  "Terms and Conditions",
  "Cards & UPI",
];

export default function AccountSidebar({ activeItem }: AccountSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <h2>OVERVIEW</h2>
      <ul>
        {sidebarItems.map((item) => (
          <li key={item} className={item === activeItem ? styles.activeRow : ""}>
            <span>{item}</span>
            <span className={styles.arrow}>&gt;</span>
          </li>
        ))}
      </ul>
      <button className={styles.logoutBtn}>LOG OUT</button>
    </aside>
  );
}
