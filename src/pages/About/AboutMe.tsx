import PageHeader from "../../components/PageHeader/PageHeader";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AboutMe.module.css";
import SignatureWithButton from "../../components/SignatureWithButton/SignatureWithButton";
import { useState } from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

type ToggleFunction = (sectionTitle: string | null) => void;

interface SectionProps {
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: ToggleFunction;
}

const CollapsibleSection = ({
  title,
  content,
  isExpanded,
  onToggle,
}: SectionProps) => {
  const handleToggle = () => {
    onToggle(null);
  };

  return (
    <section className={styles.sectionSpacer}>
      <div className={styles.sectionHeadingContainer} onClick={handleToggle}>
        <FontAwesomeIcon
          icon={faCaretRight}
          className={`${styles.sectionHeadingArrow} ${
            isExpanded ? styles.expanded : ""
          }`}
        />
        <h2 className={styles.sectionHeading}>{title}</h2>
      </div>
      <div className={styles.contentContainer}>
        {isExpanded && <p className={styles.sectionContent}>{content}</p>}
      </div>
    </section>
  );
};

export default function AboutMe() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Section 1"
  );

  const handleToggle: ToggleFunction = (sectionTitle) => {
    setExpandedSection(sectionTitle === expandedSection ? null : sectionTitle);
  };

  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.information}>
        <div>
          <section id="introduction">
            <PageHeader
              title="Eric Hine"
              description={
                <p>
                  An{" "}
                  <span className={styles.highlight}>
                    experienced tech professional
                  </span>{" "}
                  with a passion for{" "}
                  <span className={styles.highlight}>continuous learning.</span>{" "}
                </p>
              }
            />
          </section>

          <section className={`${styles.sectionSpacer} ${styles.details}`}>
            <p className={styles.seeMore}>
              If you're interested in the details of my professional journey,
              feel free to explore the rest of my portfolio, as well as my{" "}
              <a
                href="https://www.linkedin.com/in/eric-hine-3b6b1a100/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedIn}
              >
                <i className={styles.linkedInIcon}>
                  <FontAwesomeIcon icon={faLinkedin} size="sm" />
                </i>
                LinkedIn Profile
              </a>
              . They're a comprehensive showcase of my work, experiences, and
              the professional milestones I've achieved.
            </p>
          </section>

          <CollapsibleSection
            title="Education and Professional Journey"
            content="I earned my Bachelor's degree in Computer Science, complemented by a minor in Mathematics, from the accredited SUNY Brockport. With nearly 15 years of professional experience, my journey has been shaped by meaningful contributions to the Financial and Retirement industry. I've had the privilege of working with some of the world's largest retirement providers, gaining valuable insights and expertise along the way."
            isExpanded={expandedSection === "Section 1"}
            onToggle={() => handleToggle("Section 1")}
          />

          <CollapsibleSection
            title="Tech Enthusiast and Lifelong Learner"
            content="My enthusiasm for technology extends beyond the workplace. I'm not only a tech professional but also a dedicated lifelong learner. Whether it's staying abreast of the latest industry trends or delving into new programming languages, I find joy in the continuous evolution of the tech landscape."
            isExpanded={expandedSection === "Section 2"}
            onToggle={() => handleToggle("Section 2")}
          />

          <CollapsibleSection
            title="Freelance Web Development"
            content="In addition to my corporate experience, I've ventured into the realm of freelance web development. Building websites has been a rewarding journey, allowing me to leverage my skills and creativity to deliver impactful digital solutions."
            isExpanded={expandedSection === "Section 3"}
            onToggle={() => handleToggle("Section 3")}
          />

          <CollapsibleSection
            title="Hobbies: A Balanced Blend"
            content="Outside the world of coding and technology, I have a deep love for literature. You might find me engrossed in a good book or exploring the realms of knowledge through audiobooks. History, Philosophy, Logic, and Robotics are subjects that captivate my curiosity, and I'm always eager to delve into their depths."
            isExpanded={expandedSection === "Section 4"}
            onToggle={() => handleToggle("Section 4")}
          />
        </div>

        <footer className={styles.footerContainer}>
          <p className={styles.seeMore}>
            Thank you for visiting my corner of the web. I invite you to
            connect, share ideas, and explore the exciting intersections of
            technology, learning, and life.
          </p>
          <SignatureWithButton
            buttonText="Connect"
            includeSignature={true}
            enabled={true}
          />
        </footer>
      </div>
      <SocialMedia />
    </section>
  );
}
