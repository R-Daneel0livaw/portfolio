import PageHeader from "../../components/PageHeader/PageHeader";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AboutMe.module.css";
import SignatureWithButton from "../../components/SignatureWithButton/SignatureWithButton";
import { useState } from "react";

interface SectionProps {
  title: string;
  content: string;
  defaultExpanded: boolean
}

const CollapsibleSection = ({ title, content, defaultExpanded }: SectionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.sectionSpacer}>
      <div className={styles.sectionHeadingContainer} onClick={toggleSection}>
        <FontAwesomeIcon
          icon={faCaretRight}
          className={`${styles.sectionHeadingArrow} ${
            isExpanded ? styles.expanded : ""
          }`}
        />
        <h2 className={styles.sectionHeading}>{title}</h2>
      </div>
      {isExpanded && <p className={styles.sectionContent}>{content}</p>}
    </section>
  );
};

export default function AboutMe() {
  return (
    <section id="about" className={styles.aboutContainer}>
      <div>
        <section id="introduction">
          <PageHeader
            title="Eric Hine"
            description={
              <p>
                Greetings! I'm a{" "}
                <span className={styles.highlight}>seasoned professional</span>{" "}
                in the <span className={styles.highlight}>tech industry</span>{" "}
                with a{" "}
                <span className={styles.highlight}>
                  passion for continuous learning
                </span>{" "}
                and a diverse range of interests.
              </p>
            }
          />
        </section>

        <section className={`${styles.sectionSpacer} ${styles.details}`}>
          <p className={styles.seeMore}>
            If you're interested in the details of my professional journey, feel
            free to explore the rest of my portfolio, as well as my{" "}
            <a
              href="your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn profile
            </a>
            . They're a comprehensive showcase of my work, experiences, and the
            professional milestones I've achieved.
          </p>
        </section>

        <CollapsibleSection
          title="Education and Professional Journey"
          content="I earned my Bachelor's degree in Computer Science, complemented by a minor in Mathematics, from the esteemed SUNY Brockport. With nearly 15 years of professional experience, my journey has been shaped by meaningful contributions to the Financial and Retirement industry. I've had the privilege of working with some of the world's largest retirement providers, gaining valuable insights and expertise along the way."
          defaultExpanded={true}
        />

        <CollapsibleSection
          title="Tech Enthusiast and Lifelong Learner"
          content="My enthusiasm for technology extends beyond the workplace. I'm not only a tech professional but also a dedicated lifelong learner. Whether it's staying abreast of the latest industry trends or delving into new programming languages, I find joy in the continuous evolution of the tech landscape."
          defaultExpanded={false}
        />

        <CollapsibleSection
          title="Freelance Web Development"
          content="In addition to my corporate experience, I've ventured into the realm of freelance web development. Building websites has been a rewarding journey, allowing me to leverage my skills and creativity to deliver impactful digital solutions."
          defaultExpanded={false}
        />

        <CollapsibleSection
          title="Hobbies: A Balanced Blend"
          content="Outside the world of coding and technology, I have a deep love for literature. You might find me engrossed in a good book or exploring the realms of knowledge through audiobooks. History, Philosophy, Logic, and Robotics are subjects that captivate my curiosity, and I'm always eager to delve into their depths."
          defaultExpanded={false}
        />
      </div>

      <footer className={styles.footerContainer}>
        <p className={styles.seeMore}>
          Thank you for visiting my corner of the web. I invite you to connect,
          share ideas, and explore the exciting intersections of technology,
          learning, and life.
        </p>
        <SignatureWithButton buttonText="Connect" />
      </footer>
    </section>
  );
}
