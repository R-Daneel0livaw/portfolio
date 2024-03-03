import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { PropsWithChildren, useEffect, useState } from 'react';
import styles from "./CollapsibleSection.module.css";

interface CollapsibleSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  containerClassName?: string; 
}

export default function CollapsibleSection({title,
  isExpanded: propExpanded,
//   onToggle,
  children
}: PropsWithChildren<CollapsibleSectionProps>) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (propExpanded !== undefined) {
      setExpanded(propExpanded);
    }
  }, [propExpanded]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  console.log("in", propExpanded, children);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionHeadingContainer} onClick={handleToggle}>
        <FontAwesomeIcon
          icon={faCaretRight}
          className={`${styles.sectionHeadingArrow} ${
            expanded ? styles.expanded : ""
          }`}
        />
        <h2 className={styles.sectionHeading}>{title}</h2>
      </div>
      {expanded && <div className={styles.contentContainer}>{children}</div>}
    </section>
  );
}