import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { PropsWithChildren } from 'react';
import styles from "./CollapsibleSection.module.css";

interface CollapsibleSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  containerClassName?: string; 
}

export default function CollapsibleSection({title,
  isExpanded,
  onToggle,
  containerClassName,
  children
}: PropsWithChildren<CollapsibleSectionProps>) {

  const handleToggle = () => {
    onToggle();
  };

  return (
    <section className={containerClassName}>
      <div className={styles.sectionHeadingContainer} onClick={handleToggle}>
        <FontAwesomeIcon
          icon={faCaretRight}
          className={`${styles.sectionHeadingArrow} ${
            isExpanded ? styles.expanded : ''
          }`}
        />
        <h2 className={styles.sectionHeading}>{title}</h2>
      </div>
      {isExpanded && children}
      {/* {isExpanded && <ContainerElement className={`${styles.sectionContent} ${contentClassName}`}>{content}</ContainerElement>} */}
    </section>
  );
}