import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section>
      <section className={styles.highlightedProject}>
        <div className={styles.projectDetails}>
          <h2>Sports Detective</h2>
          <p>
            Sports Detective empowers users to harness the power of machine learning for in-depth sports analysis.
            Dive into historical sports data, build custom machine learning models, and leverage sophisticated algorithms
            to gain valuable insights into player performance, team dynamics, and game outcomes. Whether you're a seasoned
            sports analyst or a novice enthusiast, Sports Detective provides intuitive tools for creating, testing, and
            refining your models. 
            
          </p>
          <p>
            That's not all. Our platform also facilitates a vibrant marketplace where users can
            buy and sell their models, fostering a community of collaboration and innovation. Follow top performers, discover
            winning strategies, and stay ahead of the game with real-time updates and betting line integration. Join Sports Detective
            today and elevate your sports analysis experience to new heights!
          </p>
          <button>View Project</button>
        </div>
        <img src="highlight.jpg" alt="Highlighted Project" />
      </section>

      <section className="featuredProjects">
        <h3>Featured Projects</h3>
        <div className="projectGrid">
          <div className="projectCard">
            <img src="project1.jpg" alt="Project 1" />
              <h4>Project 1</h4>
          </div>
        </div>
      </section>

      <section className="allProjects">
        <h3>All Projects</h3>
        <div className="projectGrid">
          <div className="projectCard">
            <img src="project2.jpg" alt="Project 2" />
              <h4>Project 2</h4>
          </div>
        </div>
      </section>
    </section>
  );
}