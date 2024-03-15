import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <section id="blog">
      <header>
        <h1>Stories & Ideas</h1>
        <p>
          My latest thoughts on technology, design, architecture, and everything
          in between.
        </p>
      </header>

      {/* <article>
        <div>
          <p>Programming</p>
          <p>8 mins</p>
        </div>
        <h2>Demystifying React Hooks: A Comprehensive Guide</h2>
        <p>15 Jan 2024</p>
      </article>

      <article>
        <div>
          <p>Design</p>
          <p>10 mins</p>
        </div>
        <h2>The Art of Minimalist Design: Less is More</h2>
        <p>10 Jan 2024</p>
      </article>

      <article>
        <div>
          <p>AI</p>
          <p>12 mins</p>
        </div>
        <h2>
          Exploring the World of Artificial Intelligence: Applications and
          Ethics
        </h2>
        <p>3 Apr 2024</p>
      </article>

      <article>
        <div>
          <p>Data Science</p>
          <p>15 mins</p>
        </div>
        <h2>Mastering Data Science: A Beginner's Guide to Python and Pandas</h2>
        <p>20 May 2024</p>
      </article> */}

      <div className={styles.blogList}>
        <article id="post1">
          <div className={styles.blogMain}>
            <h2 className={styles.blogTopic}>Machine Learning</h2>
            <h3 className={styles.blogTitle}>
              Mastering Machine Learning Algorithms
            </h3>
            <p className={styles.blogDescription}>
              Dive into the fascinating world of machine learning algorithms and
              learn how to implement them from scratch. This comprehensive guide
              covers a wide range of algorithms, from linear regression to deep
              learning.
            </p>
          </div>
          <footer className={styles.blogFooter}>
            <p>1 February, 2024</p>
            <p>12 mins</p>
          </footer>
        </article>

        <article id="post2">
          <div className={styles.blogMain}>
            <h2 className={styles.blogTopic}>Web Dev</h2>
            <h3 className={styles.blogTitle}>
              The Power of Progressive Web Apps (PWAs)
            </h3>
            <p className={styles.blogDescription}>
              Unlock the potential of Progressive Web Apps (PWAs) and
              revolutionize your web development workflow. Discover how PWAs
              combine the best of web and mobile experiences, and learn how to
              build your own.
            </p>
          </div>
          <footer className={styles.blogFooter}>
            <p>5 February, 2024</p>
            <p>15 mins</p>
          </footer>
        </article>

        <article id="post3">
          <div className={styles.blogMain}>
            <h2 className={styles.blogTopic}>Cloud</h2>
            <h3 className={styles.blogTitle}>
              The Future of Cloud Computing: Trends and Innovations
            </h3>
            <p className={styles.blogDescription}>
              Stay ahead of the curve with insights into the latest trends and
              innovations in cloud computing. Explore topics such as serverless
              architecture, multi-cloud strategies, and edge computing, and
              learn how they are shaping the future of technology.
            </p>
          </div>
          <footer className={styles.blogFooter}>
            <p>20 February, 2024</p>
            <p>10 mins</p>
          </footer>
        </article>

        <article id="post4">
          <div className={styles.blogMain}>
            <h2 className={styles.blogTopic}>Architecture</h2>
            <h3 className={styles.blogTitle}>
              Building Scalable Web Applications with Microservices Architecture
            </h3>
            <p className={styles.blogDescription}>
              Learn how to design and implement scalable web applications using
              microservices architecture. Discover best practices for breaking
              down monolithic applications into smaller, more manageable
              services, and explore tools and techniques for orchestrating and
              deploying microservices.
            </p>
          </div>
          <footer className={styles.blogFooter}>
            <p>5 March, 2024</p>
            <p>15 mins</p>
          </footer>
        </article>
      </div>
    </section>
  );
}
