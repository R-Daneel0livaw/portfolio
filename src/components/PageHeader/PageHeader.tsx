import { ReactNode } from "react";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  description: ReactNode;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.description}>{description}</div>
    </div>
  );
}