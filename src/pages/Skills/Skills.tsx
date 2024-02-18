import PageHeader from "../../components/PageHeader/PageHeader";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Skills.module.css";
import { useState } from "react";
import React from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

export default function Skills() {
  const [activeSections, setActiveSections] = useState<{
    [key: string]: number;
  }>({
    programming: 0,
    web: 1,
    database: 2,
    cloud: 3,
    devops: 4,
  });

  const [inactiveSections, setInactiveSections] = useState<{
    [key: string]: number;
  }>({
    backend: 0,
    emerging: 1,
    'soft skills': 2,
  });

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

  return (
    <section id="skills" className={styles.skillsContainer}>
      <div className={styles.information}>
        <PageHeader
          title="Skills"
          description={
            <p>
              Below I showcase my expertise and skills essential for delivering{" "}
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

        <div className={styles.skillsGrid}>
          {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            Object.entries(activeSections).map(([section, _]) => (
              <React.Fragment key={section}>
                {section === "programming" && (
                  <div>
                    <div className={styles.skillHeadingContainer}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#3d5268" }}
                      />
                      <h3 className={styles.skillHeading}>
                        Programming Languages
                      </h3>
                    </div>
                    <ul className={styles.skillList}>
                      <li>Java</li>
                      <li>C/C++/C#</li>
                      <li>Python</li>
                      <li>R</li>
                      <li>JavaScript/TypeScript</li>
                    </ul>
                  </div>
                )}

                {section === "web" && (
                  <div>
                    <div className={styles.skillHeadingContainer}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#3d5268" }}
                      />
                      <h3 className={styles.skillHeading}>Web Technologies</h3>
                    </div>
                    <ul className={styles.skillList}>
                      <li>React</li>
                      <li>Angular</li>
                      <li>Vue</li>
                      <li>HTML5/CSS3</li>
                    </ul>
                  </div>
                )}

                {section === "backend" && (
                  <div>
                    <div className={styles.skillHeadingContainer}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#3d5268" }}
                      />
                      <h3 className={styles.skillHeading}>
                        Backend Technologies
                      </h3>
                    </div>
                    <ul className={styles.skillList}>
                      <li>Spring Boot</li>
                      <li>ASP.NET</li>
                      <li>NodeJS</li>
                    </ul>
                  </div>
                )}

                {section === "database" && (
                  <div>
                    <div className={styles.skillHeadingContainer}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#3d5268" }}
                      />
                      <h3 className={styles.skillHeading}>
                        Database Management
                      </h3>
                    </div>
                    <ul className={styles.skillList}>
                      <li>SQL (Oracle, PostgreSQL, MySQL)</li>
                      <li>NoSQL (MongoDB, Neo4j, Cassandra)</li>
                    </ul>
                  </div>
                )}

                {section === "cloud" && (
                  <div>
                    <div className={styles.skillHeadingContainer}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#3d5268" }}
                      />
                      <h3 className={styles.skillHeading}>Cloud Platforms</h3>
                    </div>
                    <ul className={styles.skillList}>
                      <li>AWS</li>
                      <li>Azure</li>
                    </ul>
                  </div>
                )}

                {section === "devops" && (
                  <div>
                    <div className={styles.skillHeadingContainer}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#3d5268" }}
                      />
                      <h3 className={styles.skillHeading}>DevOps</h3>
                    </div>
                    <ul className={styles.skillList}>
                      <li>Docker</li>
                      <li>Kubernetes</li>
                      <li>OpenShift</li>
                      <li>Jenkins</li>
                      <li>CI/CD Pipelines</li>
                    </ul>
                  </div>
                )}

                {section === "emerging" && (
                  <div>
                    <div className={styles.skillHeadingContainer}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#3d5268" }}
                      />
                      <h3 className={styles.skillHeading}>
                        Emerging Technologies
                      </h3>
                    </div>
                    <ul className={styles.skillList}>
                      <li>Blockchain</li>
                      <li>Machine Learning</li>
                      <li>Internet of Things (IoT)</li>
                    </ul>
                  </div>
                )}

                {section === "soft-skills" && (
                  <div>
                    <div className={styles.skillHeadingContainer}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#3d5268" }}
                      />
                      <h3 className={styles.skillHeading}>Soft Skills</h3>
                    </div>
                    <ul className={styles.skillList}>
                      <li>Team leadership</li>
                      <li>Mentorship</li>
                      <li>Effective Communication</li>
                      <li>Analytical Thinking</li>
                      <li>Adaptability</li>
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
