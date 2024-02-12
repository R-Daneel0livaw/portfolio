import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills">
      <PageHeader
        title="Skills"
        description={
          <p>
            Below I showcase my expertise and skills essential for delivering{" "}
            <span className={styles.highlight}>high-quality projects</span> and{" "}
            <span className={styles.highlight}>leading successful teams.</span>
          </p>
        }
      />

      <h3>Programming Languages</h3>
      <ul>
        <li>Java</li>
        <li>C/C++/C#</li>
        <li>Python</li>
        <li>R</li>
        <li>JavaScript/TypeScript</li>
      </ul>

      <h3>Web Technologies</h3>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
        <li>HTML5/CSS3</li>
      </ul>

      <h3>Backend Technologies</h3>
      <ul>
        <li>Spring Boot</li>
        <li>ASP.NET</li>
        <li>NodeJS</li>
      </ul>

      <h3>Database Management</h3>
      <ul>
        <li>SQL (Oracle, PostgreSQL, MySQL)</li>
        <li>NoSQL (MongoDB, Neo4j, Cassandra)</li>
      </ul>

      <h3>Cloud Platforms</h3>
      <ul>
        <li>AWS</li>
        <li>Azure</li>
      </ul>

      <h3>DevOps</h3>
      <ul>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>OpenShift</li>
        <li>Jenkins</li>
        <li>CI/CD Pipelines</li>
      </ul>

      <h3>Emerging Technologies</h3>
      <ul>
        <li>Blockchain</li>
        <li>Machine Learning</li>
        <li>Internet of Things (IoT)</li>
      </ul>

      <h3>Soft Skills</h3>
      <ul>
        <li>Team leadership</li>
        <li>Mentorship</li>
        <li>Effective Communication</li>
        <li>Analytical Thinking</li>
        <li>Adaptability</li>
      </ul>
    </section>
  );
}