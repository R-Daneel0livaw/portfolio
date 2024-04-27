import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Projects.module.css";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState<Map<Number, Project>>(getProjects());
  const [highlightedProject, setHighlightedProject] = useState<Project>(getHighlightedProject());

  type Project = {
    id: number;
    name: string;
    description: string[];
    image1: string;
    image2: string;
    gitURL?: string;
    figmaURL?: string;
    webURL?: string;
    featured: boolean;
    highlighted: boolean
  };

  function getProjects(): Map<Number, Project> {
    return new Map([
      [1, {
        id: 1,
        name: "Sports Detective",
        description: ["Sports Detective empowers users to harness the power of machine learning for in-depth sports analysis. Dive into historical sports data, build custom machine learning models, and leverage sophisticated algorithms to gain valuable insights into player performance, team dynamics, and game outcomes. Whether you're a seasoned sports analyst or a novice enthusiast, Sports Detective provides intuitive tools for creating, testing, and refining your models.", "Our platform also facilitates a vibrant marketplace where users can buy and sell their models, fostering a community of collaboration and innovation. Follow top performers, discover winning strategies, and stay ahead of the game with real-time updates and betting line integration. Join Sports Detective today and elevate your sports analysis experience to new heights!"],
        image1: "/src/img/detective.jpg",
        image2: "/src/img/basketball.jpg",
        featured: true,
        highlighted: true
      }],
      [2, {
        id: 2,
        name: "TODO",
        description: ["Description for Project 2"],
        image1: "/src/img/todo.jpg",
        image2: "/src/img/basketball.jpg",
        featured: true,
        highlighted: false
      }],
      [3, {
        id: 3,
        name: "Tidy Tuesday",
        description: ["Description for Project 3"],
        image1: "/src/img/tidy.jpg",
        image2: "/src/img/basketball.jpg",
        featured: true,
        highlighted: false
      }],
      [4, {
        id: 4,
        name: "Job Tracker",
        description: ["Description for Project 4"],
        image1: "/src/img/job.jpg",
        image2: "/src/img/basketball.jpg",
        featured: true,
        highlighted: false
      }],
      [5, {
        id: 5,
        name: "Knowledge Journey 365",
        description: ["Description for Project 5"],
        image1: "/src/img/knowledge.jpg",
        image2: "/src/img/basketball.jpg",
        featured: true,
        highlighted: false
      }],
      [6, {
        id: 6,
        name: "Portfolio",
        description: ["Description for Project 6"],
        image1: "/src/img/portfolio.jpg",
        image2: "/src/img/basketball.jpg",
        featured: true,
        highlighted: false
      }],
      [7, {
        id: 7,
        name: "Project 1",
        description: [""],
        image1: "",
        image2: "",
        featured: false,
        highlighted: false
      }],
      [8, {
        id: 8,
        name: "Project 2",
        description: [""],
        image1: "",
        image2: "",
        featured: false,
        highlighted: false
      }],
      [9, {
        id: 9,
        name: "Project 3",
        description: [""],
        image1: "",
        image2: "",
        featured: false,
        highlighted: false
      }],
      [10, {
        id: 10,
        name: "Project 4",
        description: [""],
        image1: "",
        image2: "",
        featured: false,
        highlighted: false
      }],
      [11, {
        id: 11,
        name: "Project 5",
        description: [""],
        image1: "",
        image2: "",
        featured: false,
        highlighted: false
      }],
      [12, {
        id: 12,
        name: "Project 6",
        description: [""],
        image1: "",
        image2: "",
        featured: false,
        highlighted: false
      }],
      [13, {
        id: 13,
        name: "Project 7",
        description: [""],
        image1: "",
        image2: "",
        featured: false,
        highlighted: false
      }],
      [14, {
        id: 14,
        name: "Project 8",
        description: [""],
        image1: "",
        image2: "",
        featured: false,
        highlighted: false
      }],
    ]);
  }

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

  const handleProjectCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedCard = event.currentTarget;
    const clickedCardId = parseInt(clickedCard.dataset.id || "", 10);
    const selectedProject: Project = projects.get(clickedCardId) as Project;
    selectedProject.highlighted = true;

    const entriesArray = Array.from(getAllFeaturedProjects().entries()).filter(([key, _]) => key !== highlightedProject.id);
    const index = entriesArray.findIndex(([key, _]) => key === selectedProject.id);
    highlightedProject.highlighted = false;
    entriesArray[index] = [highlightedProject.id, highlightedProject];

    setHighlightedProject(selectedProject);
    setProjects(new Map(entriesArray));

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
          <button className={styles.projectDetailsButton}><FontAwesomeIcon icon={faGithub} size="lg" className={styles.projectDetailsButtonIcon} />Source Code</button>
        </div>
        <div>
          <div className={styles.container} data-id={highlightedProject.id}>
            <div className={styles.square} style={{ backgroundImage: `url(${highlightedProject.image1})` }} ></div>
          </div>
        </div>
      </section>

      <section className={styles.subProjects}>
        <h3 className={styles.subProjectsTitle}>Featured Projects</h3>
        <div className={styles.projectGrid}>
          {getFeaturedProjects().map((project: Project, index: number) => (
            <div key={index} data-id={project.id} className={styles.projectCard} onClick={handleProjectCardClick}>
              <div className={styles.featureSquare} style={{ backgroundImage: `url(${project.image1})` }}></div>
              <h4 className={styles.projectTitle}>{project.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.subProjects}>
        <h3 className={styles.subProjectsTitle}>All Projects</h3>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <div className={styles.featureSquare}></div>
            <h4 className={styles.projectTitle}>Project 1</h4>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.featureSquare}></div>
            <h4 className={styles.projectTitle}>Project 2</h4>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.featureSquare}></div>
            <h4 className={styles.projectTitle}>Project 3</h4>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.featureSquare}></div>
            <h4 className={styles.projectTitle}>Project 4</h4>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.featureSquare}></div>
            <h4 className={styles.projectTitle}>Project 5</h4>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.featureSquare}></div>
            <h4 className={styles.projectTitle}>Project 6</h4>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.featureSquare}></div>
            <h4 className={styles.projectTitle}>Project 7</h4>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.featureSquare}></div>
            <h4 className={styles.projectTitle}>Project 8</h4>
          </div>
        </div>
      </section>
    </section>
  );
}