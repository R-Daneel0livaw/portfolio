import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Projects.module.css";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";

export default function Projects() {
  const [backgroundImage, setBackgroundImage] = useState('/src/img/detective.jpg');

  const handleProjectCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedCard = event.currentTarget;
    const featureSquare = clickedCard.querySelector(`.${styles.featureSquare}`) as HTMLElement;
    const clickedBackgroundImage = window.getComputedStyle(featureSquare).getPropertyValue('background-image');
    const relativeImagePath = clickedBackgroundImage.substring(clickedBackgroundImage.indexOf('/src')).replace(/["')]/g, '');

    setBackgroundImage(relativeImagePath);

    if (featureSquare) {
      featureSquare.style.backgroundImage = `url(${backgroundImage})`;
    }

    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  const getFirstFeaturedProject = (): Project => {
    return projectMap.get(1) || {name: "No Project Currently Available.", description: [], image1: "", image2: "", featured: false};
  };

  type Project = {
    name: string;
    description: string[];
    image1: string;
    image2: string;
    gitURL?: string;
    figmaURL?: string;
    webURL?: string;
    featured: boolean;
  };

  const projectMap: Map<number, Project> = new Map([
    [1, {
      name: "Sports Detective",
      description: ["Sports Detective empowers users to harness the power of machine learning for in-depth sports analysis. Dive into historical sports data, build custom machine learning models, and leverage sophisticated algorithms to gain valuable insights into player performance, team dynamics, and game outcomes. Whether you're a seasoned sports analyst or a novice enthusiast, Sports Detective provides intuitive tools for creating, testing, and refining your models.",  "Our platform also facilitates a vibrant marketplace where users can buy and sell their models, fostering a community of collaboration and innovation. Follow top performers, discover winning strategies, and stay ahead of the game with real-time updates and betting line integration. Join Sports Detective today and elevate your sports analysis experience to new heights!"],
      image1: "/src/img/detective.jpg",
      image2: "/src/img/basketball.jpg",
      featured: true
    }],
    [2, {
      name: "TODO",
      description: ["Description for Project 2"],
      image1: "/src/img/todo.jpg",
      image2: "/src/img/basketball.jpg",
      featured: true
    }],
    [3, {
      name: "Tidy Tuesday",
      description: ["Description for Project 3"],
      image1: "/src/img/tidy.jpg",
      image2: "/src/img/basketball.jpg",
      featured: true
    }],
    [4, {
      name: "Job Tracker",
      description: ["Description for Project 4"],
      image1: "/src/img/job.jpg",
      image2: "/src/img/basketball.jpg",
      featured: true
    }],
    [5, {
      name: "Knowledge Journey 365",
      description: ["Description for Project 5"],
      image1: "/src/img/knowledge.jpg",
      image2: "/src/img/basketball.jpg",
      featured: true
    }],
    [6, {
      name: "Portfolio",
      description: ["Description for Project 6"],
      image1: "/src/img/portfolio.jpg",
      image2: "/src/img/basketball.jpg",
      featured: true
    }],
  ]);

  console.log(projectMap);

  return (
    <section>
      <section className={styles.highlightedProject}>
        <div className={styles.projectDetails}>
          <h2 className={styles.projectDetailsTitle}>{getFirstFeaturedProject().name}</h2>
          {getFirstFeaturedProject().description.map((paragraph: string, index: number) => (
            <p key={index} className={styles.projectDetailsText}>{paragraph}</p>
          ))}
          <button className={styles.projectDetailsButton}><FontAwesomeIcon icon={faGithub} size="lg" className={styles.projectDetailsButtonIcon} />Source Code</button>
        </div>
        <div>
          <div className={styles.container}>
            <div className={styles.square} style={{ backgroundImage: `url(${backgroundImage})` }} ></div>
          </div>
        </div>
      </section>

      <section className={styles.subProjects}>
        <h3 className={styles.subProjectsTitle}>Featured Projects</h3>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard} onClick={handleProjectCardClick}>
            <div className={styles.featureSquare} style={{ backgroundImage: `url('/src/img/todo.jpg')` }}></div>
            <h4 className={styles.projectTitle}>TODO</h4>
          </div>
          <div className={styles.projectCard} onClick={handleProjectCardClick}>
            <div className={styles.featureSquare} style={{ backgroundImage: `url('/src/img/tidy.jpg')` }}></div>
            <h4 className={styles.projectTitle}>Tidy Tuesday</h4>
          </div>
          <div className={styles.projectCard} onClick={handleProjectCardClick}>
            <div className={styles.featureSquare} style={{ backgroundImage: `url('/src/img/job.jpg')` }}></div>
            <h4 className={styles.projectTitle}>Job Tracker</h4>
          </div>
          <div className={styles.projectCard} onClick={handleProjectCardClick}>
            <div className={styles.featureSquare} style={{ backgroundImage: `url('/src/img/knowledge.jpg')` }}></div>
            <h4 className={styles.projectTitle}>Knowledge Journey 365</h4>
          </div>
          <div className={styles.projectCard} onClick={handleProjectCardClick}>
            <div className={styles.featureSquare} style={{ backgroundImage: `url('/src/img/portfolio.jpg')` }}></div>
            <h4 className={styles.projectTitle}>Portfolio</h4>
          </div>
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