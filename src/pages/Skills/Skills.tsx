import PageHeader from "../../components/PageHeader/PageHeader";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Skills.module.css";
import { useState } from "react";

export default function Skills() {
  const [activeButtons, setActiveButtons] = useState<string[]>([
    "programming",
    "web",
    "database",
    "cloud",
    "devops",
  ]);

  const handleButtonClick = (target: string) => {
    if (activeButtons.includes(target)) {
      setActiveButtons(activeButtons.filter((button) => button !== target));
    } else {
      setActiveButtons([...activeButtons, target]);
    }
  };

  return (
    <section id="skills">
      <PageHeader
        title="Skills"
        description={
          <p>
            Below I showcase my expertise and skills essential for delivering{" "}
            <span className={styles.highlight}>high-quality projects</span> and{" "}
            <span className={styles.highlight}>leading successful teams.</span>
          </p>
        }
      />

      <div className={styles.buttonList}>
        <button
          className={`${styles.skillButton} ${styles.selected}`}
          data-target="programming"
          onClick={() => handleButtonClick("programming")}
        >
          <FontAwesomeIcon icon={faCheck} />
          Programming
        </button>
        <button
          className={`${styles.skillButton} ${styles.selected}`}
          data-target="web"
          onClick={() => handleButtonClick("web")}
        >
          <FontAwesomeIcon icon={faCheck} />
          Web
        </button>
        <button
          className={`${styles.skillButton} ${styles.selected}`}
          data-target="database"
          onClick={() => handleButtonClick("database")}
        >
          <FontAwesomeIcon icon={faCheck} />
          Database
        </button>
        <button
          className={`${styles.skillButton} ${styles.selected}`}
          data-target="cloud"
          onClick={() => handleButtonClick("cloud")}
        >
          <FontAwesomeIcon icon={faCheck} />
          Cloud
        </button>
        <button
          className={`${styles.skillButton} ${styles.selected}`}
          data-target="devops"
          onClick={() => handleButtonClick("devops")}
        >
          <FontAwesomeIcon icon={faCheck} />
          DevOps
        </button>
      </div>

      <div className={styles.buttonList}>
        <button
          className={styles.skillButton}
          data-target="backend"
          onClick={() => handleButtonClick("backend")}
        >
          Backend
        </button>
        <button
          className={styles.skillButton}
          data-target="emerging"
          onClick={() => handleButtonClick("emerging")}
        >
          Emerging
        </button>
        <button
          className={styles.skillButton}
          data-target="soft-skills"
          onClick={() => handleButtonClick("soft-skills")}
        >
          Soft Skills
        </button>
      </div>

      {activeButtons.includes("programming") && (
        <>
          <h3>Programming Languages</h3>
          <ul>
            <li>Java</li>
            <li>C/C++/C#</li>
            <li>Python</li>
            <li>R</li>
            <li>JavaScript/TypeScript</li>
          </ul>
        </>
      )}

      {activeButtons.includes("web") && (
        <>
          <h3>Web Technologies</h3>
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Vue</li>
            <li>HTML5/CSS3</li>
          </ul>
        </>
      )}

      {activeButtons.includes("backend") && (
        <>
          <h3>Backend Technologies</h3>
          <ul>
            <li>Spring Boot</li>
            <li>ASP.NET</li>
            <li>NodeJS</li>
          </ul>
        </>
      )}

      {activeButtons.includes("database") && (
        <>
          <h3>Database Management</h3>
          <ul>
            <li>SQL (Oracle, PostgreSQL, MySQL)</li>
            <li>NoSQL (MongoDB, Neo4j, Cassandra)</li>
          </ul>
        </>
      )}

      {activeButtons.includes("cloud") && (
        <>
          <h3>Cloud Platforms</h3>
          <ul>
            <li>AWS</li>
            <li>Azure</li>
          </ul>
        </>
      )}

      {activeButtons.includes("devops") && (
        <>
          <h3>DevOps</h3>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>OpenShift</li>
            <li>Jenkins</li>
            <li>CI/CD Pipelines</li>
          </ul>
        </>
      )}

      {activeButtons.includes("emerging") && (
        <>
          <h3>Emerging Technologies</h3>
          <ul>
            <li>Blockchain</li>
            <li>Machine Learning</li>
            <li>Internet of Things (IoT)</li>
          </ul>
        </>
      )}

      {activeButtons.includes("soft-skills") && (
        <>
          <h3>Soft Skills</h3>
          <ul>
            <li>Team leadership</li>
            <li>Mentorship</li>
            <li>Effective Communication</li>
            <li>Analytical Thinking</li>
            <li>Adaptability</li>
          </ul>
        </>
      )}
    </section>
  );
}