import { useState } from "react";
import styles from "./Blog.module.css";
import { Link } from "react-router-dom";


export default function Blog() {
  const [selectedFilter, setSelectedFilter] = useState('tech');
  const [sortBy, setSortBy] = useState('date');

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const filterAndSortArticles = (articles: Article[]) => {
    let filteredArticles;
    if (selectedFilter === "all") {
      filteredArticles = articles;
    } else {
      filteredArticles = articles.filter((article) =>
        article.topics.includes(selectedFilter)
      );
    }

    if (sortBy === "date") {
      filteredArticles.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });
    } else if (sortBy === "popular") {
      filteredArticles.sort((a, b) => b.comments - a.comments); 
    }

    return filteredArticles;
  };

  const getPrimaryArticle = () => {
    const primary = featuredArticles.find((article) => article.rank === 1);
    return !primary ? featuredArticles[0] : primary; 
  };

  const getSecondaryArticles = () => {
    return featuredArticles.filter((article) => article.rank !== 1);
  }
  
  type Article = {
    id: string;
    topic: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    topics: string[];
    comments: number
  };

  type FeaturedArticle = Article & {
    image: string;
    rank: number;
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
      comments: 8
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
      comments: 0
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
      comments: 3
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
      comments: 5
    },
  ];

  const featuredArticles: FeaturedArticle[] = [
    {
      id: "fpost1",
      topic: "Programming",
      title: "Demystifying React Hooks: A Comprehensive Guide",
      description:
        "Dive into the intricacies of React Hooks with our comprehensive guide, unraveling the mysteries behind these powerful tools for state and lifecycle management in React applications.",
      date: "15 Jan 2024",
      readTime: "8 mins",
      topics: ["tech", "tutorial"],
      comments: 20,
      image: "src/img/reactJS_logo.jpeg",
      rank: 1
    },
    {
      id: "fpost2",
      topic: "Design",
      title: "The Art of Minimalist Design: Less is More",
      description:
        "Explore the elegance and effectiveness of minimalist design principles in our insightful article, uncovering the transformative power of simplicity in creating sophisticated and user-friendly interfaces.",
      date: "10 Jan 2024",
      readTime: "10 mins",
      topics: ["tech", "architecture"],
      comments: 2,
      image: "src/img/reactJS_logo.jpeg",
      rank: 2
    },
    {
      id: "fpost3",
      topic: "AI",
      title: "Exploring the World of Artificial Intelligence: Applications and Ethics",
      description:
        "Dive into the fascinating realm of artificial intelligence as we navigate through its myriad applications and delve into the ethical considerations shaping its development and deployment in today's technological landscape.",
      date: "3 Apr 2024",
      readTime: "10 mins",
      topics: ["tech"],
      comments: 7,
      image: "src/img/reactJS_logo.jpeg",
      rank: 3
    },
    {
      id: "fpost4",
      topic: "Data Science",
      title: "Mastering Data Science: A Beginner's Guide to Python and Pandas",
      description:
        "Embark on your data science journey with this beginner's guide to Python and Pandas. Learn the fundamentals of data manipulation and analysis, setting the foundation for mastering the art of data science.",
      date: "20 May 2024",
      readTime: "10 mins",
      topics: ["tech", "tutorial"],
      comments: 12,
      image: "src/img/reactJS_logo.jpeg",
      rank: 4
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
        <Link to={`/blog/${getPrimaryArticle().id}`} state={getPrimaryArticle()}>
          <article className={styles.primaryFeature}>
            <div className={styles.primaryFeatureImage}></div>
            <div className={styles.primaryFeatureInnerContainer}>
              <div className={styles.blogMain}>
                <div className={styles.featuredIntro}>
                  <p className={styles.featureTopic}>
                    {getPrimaryArticle().topic}
                  </p>
                  <p className={styles.featuredReadTime}>{getPrimaryArticle().readTime}</p>
                </div>
                <h2 className={styles.featureTitle}>{getPrimaryArticle().title}</h2>
              </div>
              <p className={styles.featuredDate}>{getPrimaryArticle().date}</p>
            </div>
          </article>
        </Link>

        <div className={styles.secondaryFeatures}>
          {getSecondaryArticles().map((article) => (
            <Link to={`/blog/${article.id}`} state={article}>
              <article key={article.id} className={styles.secondaryFeature}>
                <div className={styles.secondaryFeatureImage}>
                  <img src={article.image} alt={article.title}></img>
                </div>
                <div className={styles.secondaryFeatureInnerContainer}>
                  <div className={styles.blogMain}>
                    <div className={styles.featuredIntro}>
                      <p className={styles.featureTopic}>{article.topic}</p>
                      <p className={styles.featuredReadTime}>{article.readTime}</p>
                    </div>
                    <h2 className={styles.blogTitle}>{article.title}</h2>
                  </div>
                  <p className={styles.featuredDate}>{article.date}</p>
                </div>
              </article>
            </Link>
          ))}
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
                className={`${styles.filterBtn} ${
                  selectedFilter === "tech" && styles.active
                }`}
                onClick={() => handleFilterClick("tech")}
              >
                Tech
              </button>
              <button
                className={`${styles.filterBtn} ${
                  selectedFilter === "architecture" && styles.active
                }`}
                onClick={() => handleFilterClick("architecture")}
              >
                Architecture
              </button>
              <button
                className={`${styles.filterBtn} ${
                  selectedFilter === "tutorial" && styles.active
                }`}
                onClick={() => handleFilterClick("tutorial")}
              >
                Tutorials
              </button>
              <button
                className={`${styles.filterBtn} ${
                  selectedFilter === "personal" && styles.active
                }`}
                onClick={() => handleFilterClick("personal")}
              >
                Personal Insights
              </button>
              <button
                className={`${styles.filterBtn} ${
                  selectedFilter === "all" && styles.active
                }`}
                onClick={() => handleFilterClick("all")}
              >
                All
              </button>
            </div>
            <div className={styles.sortBy}>
              <label htmlFor="sort-dropdown">Sort by:</label>
              <select
                id="sort-dropdown"
                onChange={handleSortChange}
                value={sortBy}
              >
                <option value="date">Newest</option>
                <option value="popular">Popular</option>
              </select>
            </div>
          </nav>
        </header>

        <div className={styles.articles}>
          {filterAndSortArticles(articles).length === 0 && (
            <p>No articles found. Please check back later.</p>
          )}
          {filterAndSortArticles(articles).map((article) => (
            <Link to={`/blog/${article.id}`} state={article}>
              <article key={article.id}>
                <div className={styles.blogMain}>
                  <h2 className={styles.blogTopic}>{article.topic}</h2>
                  <h3 className={styles.blogTitle}>{article.title}</h3>
                  <p className={styles.blogDescription}>
                    {article.description}
                  </p>
                </div>
                <footer className={styles.blogFooter}>
                  <p>{article.date}</p>
                  <p>{article.readTime}</p>
                  <p>{article.comments} Comments</p>
                </footer>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}