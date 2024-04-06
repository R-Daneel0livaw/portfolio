import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from "./BlogArticle.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useLayoutEffect } from 'react';

export default function BlogArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

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

  type PageState = {
    selectedFilter: string;
    sortBy: string;
  };

  type ArticleWithPageState = Article & PageState;

  const location = useLocation();
  const state = location.state as ArticleWithPageState;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section id="blog-article" className={styles.articleContainer}>
      <div className={styles.navContainer}>
        {/* <button onClick={() => navigate("/blog", { state: { selectedFilter: state.selectedFilter, sortBy: state.sortBy } })} className={styles.navButton}>
          <FontAwesomeIcon icon={faArrowUp} size="xl" />
        </button> */}
        <button
          onClick={() =>
            navigate("/blog", {
              state: {
                selectedFilter: state.selectedFilter,
                sortBy: state.sortBy,
              },
            })
          }
          className={styles.navButton}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
        </button>
      </div>
      <div className={styles.contentContainer}>
        <header>
          <h1 className={styles.blogTitle}>{state.title}</h1>
          <div className={styles.blogDateTime}>
            <p>
              <time dateTime="2024-02-01">{state.date}</time>
            </p>
            <p>{state.readTime}</p>
          </div>
          <p className={styles.blogDescription}>{state.description}</p>
          {/* <img src="blog-image.jpg" alt="Blog Image" /> */}
        </header>

        <section>
          <h2 className={styles.blogSectionTitle}>
            Introduction to React Hooks
          </h2>
          <div className={styles.blogSectionContent}>
            <p>
              React Hooks, introduced in React 16.8, ushered in a new era of
              stateful functional components, liberating developers from the
              constraints of class components. These lightweight functions allow
              developers to manage state, side effects, and more, all within the
              functional paradigm.
            </p>

            <p>
              Section 1 Content Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...
            </p>
          </div>
        </section>

        <section>
          <h2 className={styles.blogSectionTitle}>Understanding useState</h2>
          <div className={styles.blogSectionContent}>
            <p>
              The useState hook is perhaps the most fundamental of all React
              Hooks. With useState, developers can effortlessly add state to
              functional components, eliminating the need for class-based
              components solely for state management. By simply invoking
              useState and providing an initial state value, developers gain
              access to a state variable and a function to update it, enabling
              dynamic UI updates with ease.
            </p>

            <p>
              Section 2 Content Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...
            </p>
          </div>
        </section>

        <section>
          <h2 className={styles.blogSectionTitle}>Embracing useEffect</h2>
          <div className={styles.blogSectionContent}>
            <p>
              Enter the realm of side effects with the useEffect hook. This
              versatile hook enables developers to perform side effects in
              functional components, such as data fetching, DOM manipulation,
              and subscription management. By specifying a callback function,
              useEffect ensures that side effects are executed after each
              render, providing a seamless integration of imperative logic
              within the functional paradigm.
            </p>

            <p>
              Section 3 Content Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...
            </p>
          </div>
        </section>

        <section>
          <h2 className={styles.blogSectionTitle}>Navigating useContext</h2>
          <div className={styles.blogSectionContent}>
            <p>
              Say goodbye to prop drilling with the useContext hook. This hook
              empowers developers to access context values within functional
              components, eliminating the need to pass props down the component
              tree explicitly. By simply invoking useContext with a context
              object, developers gain access to context values anywhere within
              the component hierarchy, streamlining state management and
              enhancing code readability.
            </p>

            <p>
              Section 4 Content Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...
            </p>
          </div>
        </section>

        <section>
          <h2 className={styles.blogSectionTitle}>Conquering useRef</h2>
          <div className={styles.blogSectionContent}>
            <p>
              Harness the power of references with the useRef hook. This
              invaluable hook allows developers to create mutable references to
              DOM elements and other values, facilitating imperative
              interactions within functional components. Whether it's accessing
              DOM elements, persisting values between renders, or triggering
              imperative animations, useRef unlocks a realm of possibilities for
              developers.
            </p>

            <p>
              Section 5 Content Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...
            </p>
          </div>
        </section>

        <section>
          <h2 className={styles.blogSectionTitle}>Conclusion</h2>
          <div className={styles.blogSectionContent}>
            <p>
              As we traverse the vast expanse of React development, React Hooks
              stand as beacons of innovation, guiding us towards a future of
              cleaner, more expressive code. With useState, useEffect,
              useContext, useRef, and a myriad of other hooks at our disposal,
              we embark on a journey of discovery, unraveling the mysteries of
              modern front-end development one hook at a time. Embrace React
              Hooks, and unlock the true potential of React development.
            </p>

            <p>
              Section 6 Content Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. ...
            </p>
          </div>
        </section>

        <footer className={styles.commentsContainer}>
          <h2 className={styles.commentsTitle}>Comments</h2>
          <form className={styles.commentsSumbmissionContainer}>
            <div className={styles.commentsSumbmissionContent}>
              <label className={styles.commentsSumbmissionLabel}>
                Add a comment
              </label>
              <br />
              <textarea></textarea>
              <br />
              <input
                className={styles.innerInput}
                type="text"
                name="name"
                id="name"
              />
              <label className={styles.innerLabel} htmlFor="name">
                Name
              </label>
            </div>
            <div className={styles.commentsSumbmission}>
              <button type="submit" className={styles.commentSubmit}>
                Post
              </button>
            </div>
          </form>

          <div className={styles.commentsViewContainer}>
            <h3 className={styles.commentsPostTitle}>Posted Comments</h3>
            <ul>
              <li className={styles.commentsPost}>
                <div className={styles.commentsPostContent}>
                  <p className={styles.comment}>
                    Great article! I found the explanation on how to use the
                    useState hook really helpful. Looking forward to diving
                    deeper into React hooks. Thanks for sharing!
                  </p>
                </div>
                <div className={styles.commentsPostEnding}>
                  <p>Anonymous Cat</p>
                  <p>17 Mar 2024</p>
                </div>
              </li>
              <li className={styles.commentsPost}>
                <div className={styles.commentsPostContent}>
                  <p className={styles.comment}>
                    This article clarified a lot of things for me about React
                    hooks. I particularly liked the section on custom hooks and
                    how they can simplify code reuse. This article clarified a
                    lot of things for me about React hooks. I particularly liked
                    the section on custom hooks and how they can simplify code
                    reuse.
                  </p>

                  <p>Keep up the good work!</p>
                </div>
                <div className={styles.commentsPostEnding}>
                  <p>Frank Potter</p>
                  <p>15 Jan 2024</p>
                </div>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div className={styles.navContainer}>
        <button
          onClick={() => navigate("/blog", { state: { key: state } })}
          className={styles.navButton}
        >
          <FontAwesomeIcon icon={faArrowRight} size="xl" />
        </button>
      </div>
    </section>
  );
}