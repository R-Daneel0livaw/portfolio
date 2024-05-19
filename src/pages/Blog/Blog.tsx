import { useState } from "react";
import styles from "./Blog.module.css";
import { Link, useLocation } from "react-router-dom";
import { Article } from "./types";
import { getArticles, getFeaturedArticles } from "./services/BlogSeervice";


export default function Blog() {
  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState(location.state?.selectedFilter ? location.state.selectedFilter : "tech");
  const [sortBy, setSortBy] = useState(location.state?.sortBy ? location.state.sortBy : "date");

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
    const featuredArticles = getFeaturedArticles();
    const primary = featuredArticles.find((article) => article.rank === 1);
    return !primary ? featuredArticles[0] : primary; 
  };

  const getSecondaryArticles = () => {
    return getFeaturedArticles().filter((article) => article.rank !== 1);
  }
  
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
          <h2 className={styles.blogListHeader}>All Blog Posts</h2>
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
          {filterAndSortArticles(getArticles()).length === 0 && (
            <p>No articles found. Please check back later.</p>
          )}
          {filterAndSortArticles(getArticles()).map((article) => (
            <Link to={`/blog/${article.id}`} state={{...article, selectedFilter, sortBy}}>
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