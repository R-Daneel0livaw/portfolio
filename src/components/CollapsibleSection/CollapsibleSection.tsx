import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { PropsWithChildren, ReactNode } from 'react';
import styles from "./CollapsibleSection.module.css";

interface CollapsibleSectionProps {
  title: string;
  content: ReactNode; 
  isExpanded: boolean;
  onToggle: () => void;
  containerElement?: keyof JSX.IntrinsicElements;
  containerClassName?: string; 
  headingClassName?: string; 
  contentClassName?: string; 
}

export default function CollapsibleSection({title,
  content,
  isExpanded,
  onToggle,
  containerElement,
  containerClassName,
  headingClassName,
  contentClassName,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children
}: PropsWithChildren<CollapsibleSectionProps>) {

  const handleToggle = () => {
    onToggle();
  };

  const ContainerElement = containerElement as keyof JSX.IntrinsicElements;

  return (
    <section className={containerClassName}>
      <div className={styles.sectionHeadingContainer} onClick={handleToggle}>
        <FontAwesomeIcon
          icon={faCaretRight}
          className={`${styles.sectionHeadingArrow} ${
            isExpanded ? styles.expanded : ''
          }`}
        />
        <h2 className={`${styles.sectionHeading} ${headingClassName}`}>{title}</h2>
      </div>
      {isExpanded && <ContainerElement className={`${styles.sectionContent} ${contentClassName}`}>{content}</ContainerElement>}
    </section>
  );
}