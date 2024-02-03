import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./NavItem.module.css";

interface NavItemProps {
  to: string;
  icon: IconDefinition;
  children: ReactNode;
}

export default function NavItem({ icon, to, children }: NavItemProps) {
  return (
    <li className={styles.navItem}>
      <i className={styles.navItemIcon}>
        <FontAwesomeIcon icon={icon} />
      </i>
      <Link to={to}>{children}</Link>
    </li>
  );
}