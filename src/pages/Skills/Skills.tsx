import PageHeader from "../../components/PageHeader/PageHeader";
import {
  faCheck,
  faChevronRight,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Skills.module.css";
import React, { useState } from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

export default function Skills() {
  const [activePersonaButton, setActivePersonaButton] = useState("full");

  const [activeSections, setActiveSections] = useState<{
    [key: string]: number;
  }>(getDefaultActiveState());

  const [inactiveSections, setInactiveSections] = useState<{
    [key: string]: number;
  }>(getDefaultInactiveState());

  const [rotation, setRotation] = useState(0);

  const handlePersonaButtonClick = (
    target: string,
    buttonsToEnable: string[]
  ) => {
    const allActivities = [...Object.keys(getDefaultActiveState()), ...Object.keys(getDefaultInactiveState())].filter(i => !buttonsToEnable.includes(i));

    const include: { [key: string]: number } = buttonsToEnable.reduce<{
      [key: string]: number;
    }>((acc, currentValue, index) => {
      acc[currentValue] = index;
      return acc;
    }, {});

    const exclude: { [key: string]: number } = allActivities.reduce<{
      [key: string]: number;
    }>((acc, currentValue, index) => {
      acc[currentValue] = index;
      return acc;
    }, {});


    setActivePersonaButton(target);
    setInactiveSections(exclude);
    setActiveSections(include);
  };

  function getDefaultActiveState() {
    return {
      programming: 0,
      backend: 1,
      web: 2,
      database: 3,
      cloud: 4,
      devops: 5,
    };
  }
 
  function getDefaultInactiveState() {
    return {
      UX: 0,
      "data visualization": 1,
      "big data": 2,
      "machine learning": 3,
      leadership: 4,
      "soft skills": 5,
    };
  }

  const handleActiveButtonClick = (target: string) => {
    if (activeSections[target] !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [target]: _, ...rest } = activeSections;
      setActiveSections(rest);
      setInactiveSections({
        ...inactiveSections,
        [target]: Object.keys(inactiveSections).length,
      });
    }
  };

  const handleInactiveButtonClick = (target: string) => {
    if (inactiveSections[target] !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [target]: _, ...rest } = inactiveSections;
      setInactiveSections(rest);
      setActiveSections({
        ...activeSections,
        [target]: Object.keys(activeSections).length,
      });
    }
  };

  const handleReset = () => {
    setRotation(rotation + 360);
    setActiveSections(getDefaultActiveState());
    setInactiveSections(getDefaultInactiveState());
    setActivePersonaButton("full")
  };

  return (
    <section id="skills" className={styles.skillsContainer}>
      <div className={styles.information}>
        <PageHeader
          title="Skills"
          description={
            <p>
              Essential for delivering{" "}
              <span className={styles.highlight}>high-quality projects</span>{" "}
              and{" "}
              <span className={styles.highlight}>
                leading successful teams.
              </span>
            </p>
          }
        />

        <p className={styles.spacer}>
          I'm dedicated to staying abreast of the latest advancements in the
          tech world, ensuring my skills are always up to date. Don't hesitate
          to reach out even if your desired technology isn't listed here; my
          extensive experience enables me to quickly adapt and contribute
          effectively to any project.
        </p>

        <div className={styles.personaContainer}>
          <div className={styles.buttonList}>
            <button
              className={`${styles.skillButton} ${
                activePersonaButton === "full" && styles.selected
              }`}
              data-target="full"
              onClick={() =>
                handlePersonaButtonClick("full", [
                  "programming",
                  "backend",
                  "web",
                  "database",
                  "cloud",
                  "devops",
                ])
              }
            >
              {activePersonaButton === "full" && (
                <FontAwesomeIcon icon={faCheck} />
              )}
              Full-Stack
            </button>
            <button
              className={`${styles.skillButton} ${
                activePersonaButton === "front" && styles.selected
              }`}
              data-target="front"
              onClick={() =>
                handlePersonaButtonClick("front", [
                  "web",
                  "database",
                  "UX",
                  "cloud",
                ])
              }
            >
              {activePersonaButton === "front" && (
                <FontAwesomeIcon icon={faCheck} />
              )}
              Frontend
            </button>
            <button
              className={`${styles.skillButton} ${
                activePersonaButton === "design" && styles.selected
              }`}
              data-target="design"
              onClick={() => handlePersonaButtonClick("design", ["UX", "web"])}
            >
              {activePersonaButton === "design" && (
                <FontAwesomeIcon icon={faCheck} />
              )}
              Design
            </button>
            <button
              className={`${styles.skillButton} ${
                activePersonaButton === "data" && styles.selected
              }`}
              data-target="data"
              onClick={() =>
                handlePersonaButtonClick("data", [
                  "programming",
                  "data visualization",
                  "big data",
                  "machine learning",
                  "database",
                ])
              }
            >
              {activePersonaButton === "data" && (
                <FontAwesomeIcon icon={faCheck} />
              )}
              Data Analysis
            </button>
            <button
              className={`${styles.skillButton} ${
                activePersonaButton === "management" && styles.selected
              }`}
              data-target="management"
              onClick={() =>
                handlePersonaButtonClick("management", [
                  "leadership",
                  "soft skills",
                ])
              }
            >
              {activePersonaButton === "management" && (
                <FontAwesomeIcon icon={faCheck} />
              )}
              Management
            </button>
            <button
              className={`${styles.skillButton} ${
                activePersonaButton === "all" && styles.selected
              }`}
              data-target="all"
              onClick={() =>
                handlePersonaButtonClick("all", [
                  "programming",
                  "backend",
                  "web",
                  "database",
                  "cloud",
                  "devops",
                  "data visualization",
                  "big data",
                  "machine learning",
                  "UX",
                  "leadership",
                  "soft skills",
                ])
              }
            >
              {activePersonaButton === "all" && (
                <FontAwesomeIcon icon={faCheck} />
              )}
              All
            </button>
          </div>
          <i className={styles.personaReset}>
            <FontAwesomeIcon
              icon={faArrowsRotate}
              size="lg"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.3s ease",
                color: "#3d5268",
              }}
              onClick={handleReset}
            />
          </i>
        </div>

        <hr className={styles.buttonSectionSplit} />

        <div className={styles.buttonList}>
          {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            Object.entries(activeSections).map(([section, _]) => (
              <button
                className={`${styles.skillButton} ${styles.selected}`}
                data-target={section}
                onClick={() => handleActiveButtonClick(section)}
              >
                <FontAwesomeIcon icon={faCheck} />
                {section}
              </button>
            ))
          }
        </div>

        <div className={styles.buttonList}>
          {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            Object.entries(inactiveSections).map(([section, _]) => (
              <button
                className={styles.skillButton}
                data-target={section}
                onClick={() => handleInactiveButtonClick(section)}
              >
                {section}
              </button>
            ))
          }
        </div>

        <div>
          {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            Object.entries(activeSections).map(([section, _]) => (
              <React.Fragment key={section}>
                 {section === "programming" && (
                   <div className={styles.skillActivityContainer}>
                    <div>
                       <FontAwesomeIcon
                        icon={faChevronRight}
                         style={{ color: "#3d5268" }}
                       />
                       <h3>
                         Programming Languages
                       </h3>
                     </div>
                     <ul className={styles.skillActivityList}>
                       <li>Java</li>
                       <li>C/C++/C#</li>
                       <li>Python</li>
                       <li>R</li>
                       <li>JavaScript/TypeScript</li>
                     </ul>
                   </div>
                 )}
              </React.Fragment>
            ))
          }
        </div>
      </div>
      <SocialMedia />
    </section>
  );
}