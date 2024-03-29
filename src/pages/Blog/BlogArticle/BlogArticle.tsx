import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from "./BlogArticle.module.css";

export default function BlogArticle() {
  const { id } = useParams();
  const navigate = useNavigate();

  type Article = {
    id: string;
    topic: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    topics: string[];
    comments: number;
  };

  const location = useLocation();
  const state = location.state as Article;

  return (
    <section id="blog-article" className={styles.articleContainer}>
      <div className={styles.navContainer}>
        <button onClick={() => navigate(-1)} className={styles.previousButton}>
          &larr;
        </button>
      </div>
      <div className={styles.contentContainer}>
        <header>
          <h1 className={styles.blogTitle}>
            {state.title} ({id})
          </h1>
          <div className={styles.blogDateTime}>
            <p>
              <time dateTime="2024-02-01">{state.date}</time>
            </p>
            <p>{state.readTime}</p>
          </div>
          {/* <img src="blog-image.jpg" alt="Blog Image" /> */}
        </header>

        <section>
          <h2 className={styles.blogSectionTitle}>Section 1 Title</h2>
          <div className={styles.blogSectionContent}>
            <p>
              Section 1 Content Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...
            </p>

            <p>
              Section 1 Content Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...
            </p>
          </div>
        </section>

        <section>
          <h2 className={styles.blogSectionTitle}>Section 2 Title</h2>
          <div className={styles.blogSectionContent}>
            <p>
              Section 2 Content Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...
            </p>

            <p>
              Section 2 Content Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...
            </p>
          </div>
        </section>
      </div>
      <div className={styles.navContainer}>
        <button onClick={() => navigate(-1)} className={styles.previousButton}>
          &rarr;
        </button>
      </div>
    </section>
  );
}