import PageHeader from "../../components/PageHeader/PageHeader";
import {
  faCheck,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Skills.module.css";
import React, { useState } from "react";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";

export default function Skills() {
  const [currentPersona, setCurrentPersona] = useState<string>("Full-Stack Developer");
  const [activePersonaButton, setActivePersonaButton] = useState("full");

  const [activeSections, setActiveSections] = useState<{
    [key: string]: number;
  }>(getDefaultActiveState());

  const [inactiveSections, setInactiveSections] = useState<{
    [key: string]: number;
  }>(getDefaultInactiveState());

  const [rotation, setRotation] = useState(0);

  const [expandedActivities, setExpandedActivities] = useState<string[]>([Object.keys(getDefaultActiveState())[0]]);

  type Skill = string;

  interface Experience {
    shortName: string;
    longName: string;
    skills: Skill[];
  }

  type Persona = string;

  const experienceMap: Map<Persona, Experience[]> = new Map([
    [
      "Full-Stack Developer",
      [
        { shortName: "Programming", longName: "Programming Languages", skills: ["Java", "C/C++/C#", "Python", "R", "Go", "Groovy", "PHP", "JavaScript", "TypeScript"] },
        { shortName: "Backend", longName: "Backend Technologies", skills: ["Spring", ".NET", "NodeJS"] },
        { shortName: "Web", longName: "Web Technologies", skills: ["React", "Angular", "Vue", "Webpack", "Vite", "HTML5/CSS3"] },
        { shortName: "Database", longName: "Database Management", skills: ["SQL", "NoSQL", "Vector", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Cassandra"] },
        { shortName: "Cloud", longName: "Cloud Platforms", skills: ["AWS", "Azure"] },
        { shortName: "DevOps", longName: "DevOps", skills: ["Docker", "Kubernetes", "OpenShift", "Jenkins", "CI/CD Pipelines", "Git"] },
      ],
    ],
    [
      "Frontend Developer",
      [
        { shortName: "Web", longName: "Web Technologies", skills: ["React", "Angular", "Vue", "Webpack", "Vite", "HTML5/CSS3"] },
        { shortName: "Database", longName: "Database Management", skills: ["SQL", "NoSQL", "Vector", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Cassandra"] },
        { shortName: "UI/UX", longName: "UI/UX", skills: ["Figma", "Sketch", "Adobe Photoshop", "Tailwind", "Bootstrap", "Material UI", "Accessibility"] },
        { shortName: "Cloud", longName: "Cloud Platforms", skills: ["AWS", "Azure"] },
      ],
    ],
    [
      "Designer",
      [
        { shortName: "UI/UX", longName: "UI/UX", skills: ["Figma", "Sketch", "Adobe Photoshop", "Tailwind", "Bootstrap", "Material UI", "Accessibility"] },
        { shortName: "Web", longName: "Web Technologies", skills: ["React", "Angular", "Vue", "Webpack", "Vite", "HTML5/CSS3"] },
      ],
    ],
    [
      "Data Analyst",
      [
        { shortName: "Programming", longName: "Programming Languages", skills: ["Java", "C/C++/C#", "Python", "R", "Go", "Groovy", "PHP", "JavaScript", "TypeScript"] },
        { shortName: "Data Visualization", longName: "Data Visualization", skills: ["Tableau", "Power BI", "Seaborn"] },
        { shortName: "Big Data", longName: "Big Data Technologies", skills: ["Hadoop", "Spark"] },
        { shortName: "Machine Learning", longName: "Machine Learning", skills: ["Scikit-learn", "Amazon SageMaker", "Tensor-Flow", "Keras", "CARET"] },
        { shortName: "Database", longName: "Database Management", skills: ["SQL", "NoSQL", "Vector", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Cassandra"] },
      ],
    ],
    [
      "Manager",
      [
        { shortName: "Leadership", longName: "Leadership and Commnuication", skills: ["Team Leadership", "Mentorship", "Effective Commnuication", "Analytical Thinking"] },
        { shortName: "Soft Skills", longName: "Soft Skills", skills: ["Collaboration", "Time Management", "Adaptability", "Resource Planning"] },
      ],
    ],
    [
      "All",
      [
        { shortName: "Programming", longName: "Programming Languages", skills: ["Java", "C/C++/C#", "Python", "R", "Go", "Groovy", "PHP", "JavaScript", "TypeScript"] },
        { shortName: "Backend", longName: "Backend Technologies", skills: ["Spring", ".NET", "NodeJS"] },
        { shortName: "Web", longName: "Web Technologies", skills: ["React", "Angular", "Vue", "Webpack", "Vite", "HTML5/CSS3"] },
        { shortName: "Database", longName: "Database Management", skills: ["SQL", "NoSQL", "Vector", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Cassandra"] },
        { shortName: "Cloud", longName: "Cloud Platforms", skills: ["AWS", "Azure"] },
        { shortName: "DevOps", longName: "DevOps", skills: ["Docker", "Kubernetes", "OpenShift", "Jenkins", "CI/CD Pipelines", "Git"] },
        { shortName: "Data Visualization", longName: "Data Visualization", skills: ["Tableau", "Power BI", "Seaborn"] },
        { shortName: "Big Data", longName: "Big Data Technologies", skills: ["Hadoop", "Spark"] },
        { shortName: "Machine Learning", longName: "Machine Learning", skills: ["Scikit-learn", "Amazon SageMaker", "Tensor-Flow", "Keras", "CARET"] },
        { shortName: "UI/UX", longName: "UI/UX", skills: ["Figma", "Sketch", "Adobe Photoshop", "Tailwind", "Bootstrap", "Material UI", "Accessibility"] },
        { shortName: "Leadership", longName: "Leadership and Commnuication", skills: ["Team Leadership", "Mentorship", "Effective Commnuication", "Analytical Thinking"] },
        { shortName: "Soft Skills", longName: "Soft Skills", skills: ["Collaboration", "Time Management", "Adaptability", "Resource Planning"] },
      ],
    ],
  ]);


  const handlePersonaButtonClick = (
    target: string,
    buttonsToEnable: string[]
  ) => {
    const allActivities = [
      ...Object.keys(getDefaultActiveState()),
      ...Object.keys(getDefaultInactiveState()),
    ].filter((i) => !buttonsToEnable.includes(i));

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
    setExpandedActivities([Object.keys(include)[0]]);
  };

  type ToggleFunction = (sectionTitle: string) => void;

  const handleToggle: ToggleFunction = (sectionTitle) => {
    console.log(sectionTitle);
    setExpandedActivities(prevArray => {
      const index = prevArray.indexOf(sectionTitle);
      if (index !== -1) {
        const newArray = [...prevArray.slice(0, index), ...prevArray.slice(index + 1)];
        return newArray;
      } else {
        return [...prevArray, sectionTitle];
      }
    });
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
    setActivePersonaButton("full");
    setCurrentPersona("Full-Stack Developer")
    setExpandedActivities([Object.keys(getDefaultActiveState())[0]]);
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
          <p className={styles.identifier}>I'm a </p>
          <div className={styles.buttonList}>
          {Array.from(experienceMap.keys()).map((persona: string, index: number) => (
             <button key={index} className={`${styles.skillButton}`} onClick={() => setCurrentPersona(persona)}>
              {currentPersona === persona && (
                <FontAwesomeIcon className={styles.iconBorder} icon={faCheck} />
              )}
              {persona}
            </button>
          ))}
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

        {/* <hr className={styles.buttonSectionSplit} /> */}

        <div className={styles.buttonList}>
          <p className={styles.identifier}>Highly experienced in</p>
          {experienceMap.get(currentPersona)?.map((experience: Experience, index: number) => (
              <button key={index} className={`${styles.skillButton} ${styles.selected}`} >
                <FontAwesomeIcon icon={faCheck} />
                {experience.shortName}
              </button>
          ))}
        </div>

        <div className={styles.activityCotainer}>
          {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            Object.entries(activeSections).map(([section, _]) => (
              <React.Fragment key={section}>
                {section === "programming" && (
                  <CollapsibleSection
                    title="Programming Languages"
                    isExpanded={expandedActivities.includes("programming")}
                    onToggle={() => handleToggle("programming")}
                  >
                    <ul className={styles.skillActivityList}>
                      <li>Java</li>
                      <li>C/C++/C#</li>
                      <li>Python</li>
                      <li>R</li>
                      <li>Go</li>
                      <li>Groovy</li>
                      <li>PHP</li>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                    </ul>
                  </CollapsibleSection>
                )}

                {section === "web" && (
                  <CollapsibleSection
                    title="Web Technologies"
                    isExpanded={expandedActivities.includes("web")}
                    onToggle={() => handleToggle("web")}
                  >
                    <ul className={styles.skillActivityList}>
                      <li>React</li>
                      <li>Angular</li>
                      <li>Vue</li>
                      <li>Webpack</li>
                      <li>Vite</li>
                      <li>HTML5/CSS3</li>
                    </ul>
                  </CollapsibleSection>
                )}

                {section === "backend" && (
                  <CollapsibleSection
                    title="Backend Technologies"
                    isExpanded={expandedActivities.includes("backend")}
                    onToggle={() => handleToggle("backend")}
                  >
                    <ul className={styles.skillActivityList}>
                      <li>Spring</li>
                      <li>.NET</li>
                      <li>NodeJS</li>
                    </ul>
                  </CollapsibleSection>
                )}

                {section === "database" && (
                  <CollapsibleSection
                    title="Database Management"
                    isExpanded={expandedActivities.includes("database")}
                    onToggle={() => handleToggle("database")}
                  >
                    <ul className={styles.skillActivityList}>
                      <li>SQL</li>
                      <li>NoSQL</li>
                      <li>Vector</li>
                      <li>Oracle</li>
                      <li>PostgreSQL</li>
                      <li>MySQL</li>
                      <li>MongoDB</li>
                      <li>Neo4j</li>
                      <li>Cassandra</li>
                    </ul>
                  </CollapsibleSection>
                )}

                {section === "cloud" && (
                  <CollapsibleSection
                    title="Cloud Platforms"
                    isExpanded={expandedActivities.includes("cloud")}
                    onToggle={() => handleToggle("cloud")}
                  >
                    <ul className={styles.skillActivityList}>
                      <li>AWS</li>
                      <li>Azure</li>
                    </ul>
                  </CollapsibleSection>
                )}

                {section === "devops" && (
                  <CollapsibleSection
                    title="DevOps"
                    isExpanded={expandedActivities.includes("devops")}
                    onToggle={() => handleToggle("devops")}
                  >
                    <ul className={styles.skillActivityList}>
                      <li>Docker</li>
                      <li>Kubernetes</li>
                      <li>OpenShift</li>
                      <li>Jenkins</li>
                      <li>CI/CD Pipelines</li>
                      <li>Git</li>
                    </ul>
                  </CollapsibleSection>
                )}

                {section === "UX" && (
                  <CollapsibleSection
                    title="UI/UX"
                    isExpanded={expandedActivities.includes("UX")}
                    onToggle={() => handleToggle("UX")}
                  >
                    <ul className={styles.skillActivityList}>
                      <li>Figma</li>
                      <li>Sketch</li>
                      <li>Tailwind</li>
                      <li>Bootstrap</li>
                      <li>Material UI</li>
                      <li>Accessibility</li>
                    </ul>
                  </CollapsibleSection>
                )}

                {section === "data visualization" && (
                  <CollapsibleSection
                    title="Data Visualization"
                    isExpanded={expandedActivities.includes("data visualization")}
                    onToggle={() => handleToggle("data visualization")}
                  >
                    <ul className={styles.skillActivityList}>
                      <li>Tableau</li>
                      <li>Power BI</li>
                      <li>Seaborn</li>
                    </ul>
                  </CollapsibleSection>
                )}

                {section === "big data" && (
                  <CollapsibleSection
                    title="Big Data Technologies"
                    isExpanded={expandedActivities.includes("big data")}
                    onToggle={() => handleToggle("big data")}
                  >
                    <ul className={styles.skillActivityList}>
                      <li>Hadoop</li>
                      <li>Spark</li>
                    </ul>
                  </CollapsibleSection>
                )}

                {section === "machine learning" && (
                  <CollapsibleSection
                    title="Machine Learning"
                    isExpanded={expandedActivities.includes("machine learning")}
                    onToggle={() => handleToggle("machine learning")}
                  >
                    <ul className={styles.skillActivityList}>
                      <li>Scikit-learn</li>
                      <li>Amazon SageMaker</li>
                      <li>TensorFlow</li>
                      <li>Keras</li>
                      <li>CARET</li>
                    </ul>
                  </CollapsibleSection>
                )}

                {section === "leadership" && (
                  <CollapsibleSection
                    title="Leadership and Communication"
                    isExpanded={expandedActivities.includes("leadership")}
                    onToggle={() => handleToggle("leadership")}
                  >
                    <ul className={styles.skillActivityList}>
                      <li>Team Leadership</li>
                      <li>Mentorship</li>
                      <li>Effective Communication</li>
                      <li>Analytical Thinking</li>
                    </ul>
                  </CollapsibleSection>
                )}

                {section === "soft skills" && (
                  <CollapsibleSection
                    title="Soft Skills"
                    isExpanded={expandedActivities.includes("soft skills")}
                    onToggle={() => handleToggle("soft skills")}
                  >
                    <ul className={styles.skillActivityList}>
                      <li>Collaboration</li>
                      <li>Time Management</li>
                      <li>Adaptability</li>
                      <li>Resource Planning</li>
                    </ul>
                  </CollapsibleSection>
                )}
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </section>
  );
}