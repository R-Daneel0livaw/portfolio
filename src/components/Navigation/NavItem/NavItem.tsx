import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./NavItem.module.css";
import { NavItemProps } from "../../../types";

export default function NavItem({
  icon,
  to,
  children,
  currentPage,
}: NavItemProps) {
  const isActive = currentPage === to;

  return (
    <Link to={to} className={styles.navLink}>
      <li
        className={`${styles.navItem} ${isActive ? styles.activeNavItem : ""}`}
      >
        <i className={styles.navItemIcon}>
          <FontAwesomeIcon icon={icon} />
        </i>
        <p>{children}</p>
      </li>
    </Link>
  );
}