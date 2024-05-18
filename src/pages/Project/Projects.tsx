import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Projects.module.css";
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Project } from "./types";
import { getProjects } from "./services/ProjectsService";

export default function Projects() {
  const [projects, setProjects] = useState<Map<Number, Project>>(getProjects());
  const [highlightedProject, setHighlightedProject] = useState<Project>(getHighlightedProject());


  function getFeaturedProjects() {
    return Array.from(projects.values()).filter(p => p.featured && !p.highlighted);
  }

  function getAllFeaturedProjects() {
    const featuredEntries = Array.from(projects.entries()).filter(([_, value]) => value.featured);
    return new Map(featuredEntries);
  }

  function getHighlightedProject() {
    return Array.from(projects.values()).filter(p => p.highlighted)[0] || { name: "No Project Currently Available.", description: [], image1: "", image2: "", featured: false, highlighted: false };
  }

  function getBaseProjects() {
    return Array.from(projects.values()).filter(p => !p.featured);
  }

  function getAllBaseProjects() {
    const baseEntries = Array.from(projects.entries()).filter(([_, value]) => !value.featured);
    return new Map(baseEntries);
  }

  const handleProjectCardClick = (event: React.MouseEvent<HTMLDivElement>, projectType: string) => {
    console.log(projectType);

    const clickedCard = event.currentTarget;
    const clickedCardId = parseInt(clickedCard.dataset.id || "", 10);
    const selectedProject: Project = projects.get(clickedCardId) as Project;
    selectedProject.highlighted = true;

    const entriesArray = Array.from(getAllFeaturedProjects().entries()).filter(([key, _]) => key !== highlightedProject.id);
    const baseEntriesArray = Array.from(getAllBaseProjects().entries());
    highlightedProject.highlighted = false;

    if(projectType === "featured") {
      const index = entriesArray.findIndex(([key, _]) => key === selectedProject.id);
      entriesArray.splice(index, 1);
    } else {
      const index = baseEntriesArray.findIndex(([key, _]) => key === selectedProject.id);
      baseEntriesArray.splice(index, 1);
    }

    setHighlightedProject(selectedProject);
    setProjects(new Map([...entriesArray, ...baseEntriesArray, [highlightedProject.id, highlightedProject]]));

    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <section>
      <section className={styles.highlightedProject}>
        <div className={styles.projectDetails} >
          <h2 className={styles.projectDetailsTitle}>{highlightedProject.name}</h2>
          {highlightedProject.description.map((paragraph: string, index: number) => (
            <p key={index} className={styles.projectDetailsText}>{paragraph}</p>
          ))}
          <div className={styles.buttonContainer}>
            {highlightedProject.gitURL && (
              <a href={highlightedProject.gitURL} target="_blank" rel="noopener noreferrer" className={`${styles.projectDetailsButton} ${styles.gitButton}`}>
                <FontAwesomeIcon icon={faGithub} size="lg" className={styles.projectDetailsButtonIcon} />
                Source Code
              </a>
            )}
            {highlightedProject.figmaURL && (
              <a href={highlightedProject.figmaURL} target="_blank" rel="noopener noreferrer" className={`${styles.projectDetailsButton} ${styles.figmaButton}`}>
                <FontAwesomeIcon icon={faFigma} size="lg" className={styles.projectDetailsButtonIcon} />
                Figma Files
              </a>
            )}
            {highlightedProject.webURL && (
              <a href={highlightedProject.webURL} target="_blank" rel="noopener noreferrer" className={`${styles.projectDetailsButton} ${styles.webButton}`}>
                <FontAwesomeIcon icon={faGlobe} size="lg" className={styles.projectDetailsButtonIcon} />
                Live View
              </a>
            )}
          </div>
        </div>
        <div>
          <div className={styles.container} data-id={highlightedProject.id} style={{ backgroundImage: `url(${highlightedProject.image2})`}} >
            <div className={styles.square} style={{ backgroundImage: `url(${highlightedProject.image1})`}} ></div>
          </div>
        </div>
      </section>

      {getFeaturedProjects().length > 0 && (
        <section className={styles.subProjects}>
          <h3 className={styles.subProjectsTitle}>Featured Projects</h3>
          <div className={styles.projectGrid}>
            {getFeaturedProjects().map((project: Project, index: number) => (
              <div key={index} data-id={project.id} className={styles.projectCard} onClick={(event) => handleProjectCardClick(event, "featured")}>
                <div className={styles.featureSquare} style={{ backgroundImage: `url(${project.image1})` }}></div>
                <h4 className={styles.projectTitle}>{project.name}</h4>
              </div>
            ))}
          </div>
        </section>
      )}

      {getBaseProjects().length > 0 && (
        <section className={styles.subProjects}>
          <h3 className={styles.subProjectsTitle}>All Projects</h3>
          <div className={styles.projectGrid}>
            {getBaseProjects().map((project: Project, index: number) => (
              <div key={index} data-id={project.id} className={styles.projectCard} onClick={(event) => handleProjectCardClick(event, "base")}>
                <div className={styles.featureSquare}></div>
                <h4 className={styles.projectTitle}>{project.name}</h4>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}