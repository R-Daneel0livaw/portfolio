import { useNavigate, useParams } from 'react-router-dom';
import styles from "./BlogArticle.module.css";

export default function BlogArticle() {
  const { id } = useParams(); // Access the article ID from URL params
  const navigate = useNavigate()

  // Fetch/display the article with the given ID

  return (
    <section id="blog-article" className={styles.articleContainer}>
      <button onClick={() => navigate(-1)} className={styles.previousButton}>
        &larr; Go back
      </button>
      <header>
        <h1 className={styles.blogTitle}>Blog Title {id}</h1>
        <div className={styles.blogDateTime}>
          <p>
            <time dateTime="2024-02-01">1 February, 2024</time>
          </p>
          <p>12 mins</p>
        </div>
        {/* <img src="blog-image.jpg" alt="Blog Image" /> */}
      </header>

      <section>
        <h2 className={styles.blogSectionTitle}>Section 1 Title</h2>
        <div className={styles.blogSectionContent}>
          <p>
            Section 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. ...
          </p>

          <p>
            Section 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. ...
          </p>
        </div>
      </section>

      <section>
        <h2 className={styles.blogSectionTitle}>Section 2 Title</h2>
        <div className={styles.blogSectionContent}>
          <p>
            Section 2 Content Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. ...
          </p>

          <p>
            Section 2 Content Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. ...
          </p>
        </div>
      </section>
    </section>
  );
}