export default function Projects() {
  return (
    <section>
      <section className="highlighted-project">
        <div className="project-details">
          <h2>Highlighted Project Title</h2>
          <p>Description of the highlighted project.</p>
          <button>View Project</button>
        </div>
        <img src="project1.jpg" alt="Project 1" />
      </section>

      <section className="featured-projects">
        <h3>Featured Projects</h3>
        <div className="project-grid">
          <div className="project-card">
            <img src="project1.jpg" alt="Project 1" />
              <h4>Project 1</h4>
          </div>
        </div>
      </section>

      <section className="all-projects">
        <h3>All Projects</h3>
        <div className="project-grid">
          <div className="project-card">
            <img src="project2.jpg" alt="Project 2" />
              <h4>Project 2</h4>
          </div>
        </div>
      </section>
    </section>
  );
}