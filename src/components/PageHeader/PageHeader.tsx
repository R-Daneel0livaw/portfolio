import { ReactNode } from "react";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  description: ReactNode;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div>
      <h1 className={styles.name}>{title}</h1>
      <div className={styles.dedication}>
        {description}
      </div>
    </div>
  );
}