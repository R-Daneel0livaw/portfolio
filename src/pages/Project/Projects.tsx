import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Projects.module.css";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
  return (
    <section>
      <section className={styles.highlightedProject}>
        <div className={styles.projectDetails}>
          <h2 className={styles.projectDetailsTitle}>Sports Detective</h2>
          <p className={styles.projectDetailsText}>
            Sports Detective empowers users to harness the power of machine learning for in-depth sports analysis.
            Dive into historical sports data, build custom machine learning models, and leverage sophisticated algorithms
            to gain valuable insights into player performance, team dynamics, and game outcomes. Whether you're a seasoned
            sports analyst or a novice enthusiast, Sports Detective provides intuitive tools for creating, testing, and
            refining your models. 
            
          </p>
          <p className={styles.projectDetailsText}>

            Our platform also facilitates a vibrant marketplace where users can
            buy and sell their models, fostering a community of collaboration and innovation. Follow top performers, discover
            winning strategies, and stay ahead of the game with real-time updates and betting line integration. Join Sports Detective
            today and elevate your sports analysis experience to new heights!
          </p>
          <button className={styles.projectDetailsButton}><FontAwesomeIcon icon={faGithub} size="lg" className={styles.projectDetailsButtonIcon} />View Project</button>
        </div>
        <div>
          <div className={styles.container}>
            <div className={styles.square}></div>
          </div>
          {/* <img src="highlight.jpg" alt="Highlighted Project" /> */}
        </div>
      </section>

      <section className={styles.subProjects}>
        <h3 className={styles.subProjectsTitle}>Featured Projects</h3>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <div className={styles.featureSquare}></div>
            <h4 className={styles.projectTitle}>Tidy Tuesday</h4>
          </div>
        </div>
      </section>

      <section className={styles.subProjects}>
        <h3 className={styles.subProjectsTitle}>All Projects</h3>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <div className={styles.featureSquare}></div>
            <h4 className={styles.projectTitle}>Project 2</h4>
          </div>
        </div>
      </section>
    </section>
  );
}