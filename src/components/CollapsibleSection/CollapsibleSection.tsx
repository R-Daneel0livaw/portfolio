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

export default function CollapsibleSection(props: PropsWithChildren<CollapsibleSectionProps>) {

  const handleToggle = () => {
    props.onToggle();
  };

  const ContainerElement = props.containerElement as keyof JSX.IntrinsicElements;

  return (
    <section className={props.containerClassName}>
      <div className={styles.sectionHeadingContainer} onClick={handleToggle}>
        <FontAwesomeIcon
          icon={faCaretRight}
          className={`${styles.sectionHeadingArrow} ${
            props.isExpanded ? styles.expanded : ''
          }`}
        />
        <h2 className={`${styles.sectionHeading} ${props.headingClassName}`}>{props.title}</h2>
      </div>
      {props.isExpanded && <ContainerElement className={`${styles.sectionContent} ${props.contentClassName}`}>{props.content}</ContainerElement>}
    </section>
  );
}