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
  children
}: PropsWithChildren<CollapsibleSectionProps>) {
//   const [expanded, setExpanded] = useState(propExpanded !== undefined ? propExpanded : false);
//   console.log(propExpanded, expanded);


//   useEffect(() => {
//     if (propExpanded !== undefined) {
//         // console.log("huh?");
//         // console.log(propExpanded);
//       setExpanded(propExpanded);
//     }
//   }, [propExpanded]);

  const handleToggle = () => {
    onToggle();
    // setExpanded(!expanded);
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionHeadingContainer} onClick={handleToggle}>
        <FontAwesomeIcon
          icon={faCaretRight}
          className={`${styles.sectionHeadingArrow} ${
            isExpanded ? styles.expanded : ""
          }`}
        />
        <h2 className={styles.sectionHeading}>{title}</h2>
      </div>
      {isExpanded && <div className={styles.contentContainer}>{children}</div>}
    </section>
  );
}