import { useState } from "react";
import styles from "./Blog.module.css";


export default function Blog() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filterArticles = (articles: Article[]) => {
    if (selectedFilter === 'all') {
      return articles;
    } else {
      return articles.filter(article => article.topics.includes(selectedFilter));
    }
  };
  
  type Article = {
    id: string;
    topic: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    topics: string[];
  };

  const articles: Article[] = [
    {
      id: "post1",
      topic: "Machine Learning",
      title: "Mastering Machine Learning Algorithms",
      description:
        "Dive into the fascinating world of machine learning algorithms and learn how to implement them from scratch. This comprehensive guide covers a wide range of algorithms, from linear regression to deep learning.",
      date: "1 February, 2024",
      readTime: "12 mins",
      topics: ["tech"],
    },
    {
      id: "post2",
      topic: "Web Dev",
      title: "The Power of Progressive Web Apps (PWAs)",
      description:
        "Unlock the potential of Progressive Web Apps (PWAs) and revolutionize your web development workflow. Discover how PWAs combine the best of web and mobile experiences, and learn how to build your own.",
      date: "5 February, 2024",
      readTime: "15 mins",
      topics: ["tech"],
    },
    {
      id: "post3",
      topic: "Cloud",
      title: "The Future of Cloud Computing: Trends and Innovations",
      description:
        "Stay ahead of the curve with insights into the latest trends and innovations in cloud computing. Explore topics such as serverless architecture, multi-cloud strategies, and edge computing, and learn how they are shaping the future of technology.",
      date: "20 February, 2024",
      readTime: "10 mins",
      topics: ["tech"],
    },
    {
      id: "post4",
      topic: "Architecture",
      title: "Building Scalable Web Applications with Microservices Architecture",
      description:
        "Learn how to design and implement scalable web applications using microservices architecture. Discover best practices for breaking down monolithic applications into smaller, more manageable services, and explore tools and techniques for orchestrating and deploying microservices.",
      date: "5 March, 2024",
      readTime: "15 mins",
      topics: ["tech", "architecture", "tutorial"],
    },
  ];

  return (
    <section id="blog" className={styles.blogContainer}>
      <header>
        <h1 className={styles.blogOverviewHeader}>Stories & Ideas</h1>
        <p className={styles.blogOverviewDescription}>
          My latest thoughts on technology, design, architecture, and everything
          in between.
        </p>
      </header>

      <section className={styles.featuredBlogList}>
        <article className={styles.primaryFeature}>
          <div className={styles.primaryFeatureImage}></div>
          <div className={styles.primaryFeatureInnerContainer}>
            <div className={styles.blogMain}>
              <div className={styles.featuredIntro}>
                <p className={styles.featureTopic}>Programming</p>
                <p>8 mins</p>
              </div>
              <h2>Demystifying React Hooks: A Comprehensive Guide</h2>
            </div>
            <p className={styles.featuredDate}>15 Jan 2024</p>
          </div>
        </article>

        <div className={styles.secondaryFeatures}>
          <article className={styles.secondaryFeature}>
            <div className={styles.secondaryFeatureImage}>
              <img src="src/img/reactJS_logo.jpeg"></img>
            </div>
            <div className={styles.secondaryFeatureInnerContainer}>
              <div className={styles.blogMain}>
                <div className={styles.featuredIntro}>
                  <p className={styles.featureTopic}>Design</p>
                  <p>10 mins</p>
                </div>
                <h2 className={styles.blogTitle}>
                  The Art of Minimalist Design: Less is More
                </h2>
              </div>
              <p className={styles.featuredDate}>10 Jan 2024</p>
            </div>
          </article>

          <article className={styles.secondaryFeature}>
            <div className={styles.secondaryFeatureImage}>
              <img src="src/img/reactJS_logo.jpeg"></img>
            </div>
            <div className={styles.secondaryFeatureInnerContainer}>
              <div className={styles.blogMain}>
                <div className={styles.featuredIntro}>
                  <p className={styles.featureTopic}>AI</p>
                  <p>10 mins</p>
                </div>
                <h2 className={styles.blogTitle}>
                  Exploring the World of Artificial Intelligence: Applications
                  and Ethics
                </h2>
              </div>
              <p className={styles.featuredDate}>3 Apr 2024</p>
            </div>
          </article>

          <article className={styles.secondaryFeature}>
            <div className={styles.secondaryFeatureImage}>
              <img src="src/img/reactJS_logo.jpeg"></img>
            </div>
            <div className={styles.secondaryFeatureInnerContainer}>
              <div className={styles.blogMain}>
                <div className={styles.featuredIntro}>
                  <p className={styles.featureTopic}>Data Science</p>
                  <p>10 mins</p>
                </div>
                <h2 className={styles.blogTitle}>
                  Mastering Data Science: A Beginner's Guide to Python and
                  Pandas
                </h2>
              </div>
              <p className={styles.featuredDate}>20 May 2024</p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.blogList}>
        <header>
          <h2 className={styles.blogPostHeader}>All Blog Posts</h2>
          <p className={styles.blogListDescription}>
            All thoughts are my own and do not reflect the opinions of any past,
            present or future employers.
          </p>

          <nav className={styles.filterBar}>
            <div className={styles.filterOptions}>
              <button
                className={`${styles.filterBtn} ${styles.active}`}
                data-filter="tech"
              >
                Tech
              </button>
              <button className={styles.filterBtn} data-filter="architecture">
                Architecture
              </button>
              <button className={styles.filterBtn} data-filter="tutorial">
                Tutorial
              </button>
              <button className={styles.filterBtn} data-filter="all">
                All
              </button>
            </div>
            <div className={styles.sortBy}>
              <label htmlFor="sort-dropdown">Sort by:</label>
              <select id="sort-dropdown">
                <option value="date">Newest</option>
                <option value="popular">Popular</option>
              </select>
            </div>
          </nav>
        </header>

        <div className={styles.articles}>
          {filterArticles(articles).length === 0 && <p>No articles found.</p>}
          {filterArticles(articles).map((article) => (
            <article key={article.id}>
              <div className={styles.blogMain}>
                <h2 className={styles.blogTopic}>{article.topic}</h2>
                <h3 className={styles.blogTitle}>{article.title}</h3>
                <p className={styles.blogDescription}>{article.description}</p>
              </div>
              <footer className={styles.blogFooter}>
                <p>{article.date}</p>
                <p>{article.readTime}</p>
              </footer>
            </article>
          ))}
        </div>

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
      </section>
    </section>
  );
}
