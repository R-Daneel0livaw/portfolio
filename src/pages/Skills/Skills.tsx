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
          {experienceMap.get(currentPersona)!.map((experience: Experience, index: number) => (
            <CollapsibleSection
              title={experience.longName}
              isExpanded={expandedActivities.includes("programming")}
              onToggle={() => handleToggle("programming")}
            >
              <ul key={index} className={styles.skillActivityList}>
                {experience.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </CollapsibleSection>
          ))}
        </div>
      </div>
    </section>
  );
}