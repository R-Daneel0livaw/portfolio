import PageHeader from "../../components/PageHeader/PageHeader";
import {
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Skills.module.css";
import { useState } from "react";
import { Experience, Persona } from "./types";
import { getDescriptions, getExperiences } from "./services/SkillsService";

export default function Skills() {
  const [currentPersona, setCurrentPersona] = useState<string>("Full-Stack Developer");

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
              {Array.from(getExperiences().keys()).map((persona: Persona, index: number) => (
                <>
                <button key={index} className={`${styles.skillButton} ${currentPersona === persona ? styles.selected : ''}`} onClick={() => setCurrentPersona(persona)}>
                  {currentPersona === persona && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                  {persona}
                </button>
                {currentPersona === persona && <p className={styles.skillButtonDescription}>{getDescriptions().get(currentPersona)}</p>}
                </>
              ))}
            </div>
          </div>

          <div className={styles.experienceContainer}>
            <p className={styles.identifier}>Highly Experienced In</p>
            <div className={styles.buttonList}>
              {getExperiences().get(currentPersona)?.map((experience: Experience, index: number) => (
                <p key={index} className={`${styles.skillButton} ${styles.selected}`} >
                  <FontAwesomeIcon icon={faCheck} />
                  {experience.shortName}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.activityCotainer}>
          {getExperiences().get(currentPersona)!.map((experience: Experience, index: number) => (
            <p key={index} className={styles.experienceDescription}><b className={styles.experienceHeading}>{experience.longName}:</b> {experience.skills.join(", ")}</p>
          ))}
        </div>
      </div>
    </section>
  );
}