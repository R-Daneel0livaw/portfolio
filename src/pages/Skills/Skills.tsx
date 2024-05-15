import PageHeader from "../../components/PageHeader/PageHeader";
import {
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Skills.module.css";
import { useState } from "react";
import { Experience, Persona } from "../../types";

export default function Skills() {
  const [currentPersona, setCurrentPersona] = useState<string>("Full-Stack Developer");

  const experienceMap: Map<Persona, Experience[]> = new Map([
    [
      "Full-Stack Developer",
      [
        { shortName: "Programming", longName: "Programming Languages", skills: ["Java", "C/C++/C#", "Python", "R", "Go", "Groovy", "PHP", "JavaScript", "TypeScript"] },
        { shortName: "Backend", longName: "Backend Technologies", skills: ["Spring", ".NET", "NodeJS"] },
        { shortName: "Web", longName: "Web Technologies", skills: ["React", "Angular", "Vue", "Webpack", "Vite", "HTML5/CSS3"] },
        { shortName: "Databases", longName: "Database Management", skills: ["SQL", "NoSQL", "Vector", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Cassandra"] },
        { shortName: "Cloud", longName: "Cloud Platforms", skills: ["AWS", "Azure"] },
        { shortName: "DevOps", longName: "DevOps", skills: ["Docker", "Kubernetes", "OpenShift", "Jenkins", "CI/CD Pipelines", "Git"] },
      ],
    ],
    [
      "Frontend Developer",
      [
        { shortName: "Web", longName: "Web Technologies", skills: ["React", "Angular", "Vue", "Webpack", "Vite", "HTML5/CSS3"] },
        { shortName: "Databases", longName: "Database Management", skills: ["SQL", "NoSQL", "Vector", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Cassandra"] },
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
        { shortName: "Machine Learning", longName: "Machine Learning", skills: ["Scikit-learn", "Amazon SageMaker", "Tensor-Flow", "Keras", "CARET"] },
        { shortName: "Data Visualization", longName: "Data Visualization", skills: ["Tableau", "Power BI", "Seaborn"] },
        { shortName: "Big Data", longName: "Big Data Technologies", skills: ["Hadoop", "Spark"] },
        { shortName: "Databases", longName: "Database Management", skills: ["SQL", "NoSQL", "Vector", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Cassandra"] },
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
        { shortName: "Databases", longName: "Database Management", skills: ["SQL", "NoSQL", "Vector", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Cassandra"] },
        { shortName: "Cloud", longName: "Cloud Platforms", skills: ["AWS", "Azure"] },
        { shortName: "DevOps", longName: "DevOps", skills: ["Docker", "Kubernetes", "OpenShift", "Jenkins", "CI/CD Pipelines", "Git"] },
        { shortName: "Machine Learning", longName: "Machine Learning", skills: ["Scikit-learn", "Amazon SageMaker", "Tensor-Flow", "Keras", "CARET"] },
        { shortName: "Data Visualization", longName: "Data Visualization", skills: ["Tableau", "Power BI", "Seaborn"] },
        { shortName: "Big Data", longName: "Big Data Technologies", skills: ["Hadoop", "Spark"] },
        { shortName: "UI/UX", longName: "UI/UX", skills: ["Figma", "Sketch", "Adobe Photoshop", "Tailwind", "Bootstrap", "Material UI", "Accessibility"] },
        { shortName: "Leadership", longName: "Leadership and Commnuication", skills: ["Team Leadership", "Mentorship", "Effective Commnuication", "Analytical Thinking"] },
        { shortName: "Soft Skills", longName: "Soft Skills", skills: ["Collaboration", "Time Management", "Adaptability", "Resource Planning"] },
      ],
    ],
  ]);

  const descriptionMap: Map<string, string> = new Map([
    ["Full-Stack Developer", "I build web applications from front to back, handling both client-side and server-side development."],
    ["Frontend Developer", "I focus on crafting engaging user interfaces and ensuring seamless user experiences."],
    ["Designer", "I create visually appealing designs with a focus on simplicity and intuitive interaction."],
    ["Data Analyst", "I analyze data to derive insights and make informed decisions."],
    ["Manager", "I lead teams and projects, ensuring efficient collaboration and successful outcomes."],
    ["All", "Versatile Technologist."],
  ]);

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


        <div className={styles.personaExperienceContainer}>
          <div className={styles.personaContainer}>
            <p className={styles.identifier}>Key Roles</p>
            <div className={styles.buttonList}>
              {Array.from(experienceMap.keys()).map((persona: string, index: number) => (
                <>
                <button key={index} className={`${styles.skillButton} ${currentPersona === persona ? styles.selected : ''}`} onClick={() => setCurrentPersona(persona)}>
                  {currentPersona === persona && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                  {persona}
                </button>
                {currentPersona === persona && <p className={styles.skillButtonDescription}>{descriptionMap.get(currentPersona)}</p>}
                </>
              ))}
            </div>
          </div>

          <div className={styles.experienceContainer}>
            <p className={styles.identifier}>Highly Experienced In</p>
            <div className={styles.buttonList}>
              {experienceMap.get(currentPersona)?.map((experience: Experience, index: number) => (
                <p key={index} className={`${styles.skillButton} ${styles.selected}`} >
                  <FontAwesomeIcon icon={faCheck} />
                  {experience.shortName}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.activityCotainer}>
          {experienceMap.get(currentPersona)!.map((experience: Experience, index: number) => (
            <p key={index} className={styles.experienceDescription}><b className={styles.experienceHeading}>{experience.longName}:</b> {experience.skills.join(", ")}</p>
          ))}
        </div>
      </div>
    </section>
  );
}