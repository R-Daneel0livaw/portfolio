import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from "./BlogArticle.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useLayoutEffect, useRef, useState } from 'react';
import { ArticleWithPageState, Comment } from '../types';
import { getComments } from '../services/BlogSeervice';

export default function BlogArticle() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState<Comment[]>(getComments());
  const [textareaHeight, setTextareaHeight] = useState("1.85rem");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [touchedFields, setTouchedFields] = useState<TouchedFields>({});

  interface TouchedFields {
    [key: string]: boolean;
  }

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(id);
  const state = location.state as ArticleWithPageState;

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight } = event.target;
    const maxHeight = 200;

    setMessage(event.target.value);
    if (event.target.value === "") {
      setTextareaHeight("1.85rem");
    } else {
      setTextareaHeight(
        scrollHeight < maxHeight ? scrollHeight + "px" : maxHeight + "px"
      );
    }
  };

  const handleLabelClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleBlur = (field: string) => {
    setTouchedFields({
      ...touchedFields,
      [field]: true,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", {
      firstName,
      lastName,
      message,
    });

    const latestComment = comments[0];
    const commentId = Number.parseInt(latestComment.id) + 1;
    setComments([{ id: commentId + "", firstName, lastName, text: message, date: formatDate(new Date()) }, ...comments])
    setFirstName("");
    setLastName("");
    setMessage("");
    setTouchedFields({});
  };

  const formatDate = (date: Date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2);
    return `${day} ${month} ${year}`;
  };

  const isFormFilled = (): boolean => {
    return message.length > 0 && firstName.length > 0 && lastName.length > 0;
  };

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

        <hr className={styles.separator}/>

        <footer className={styles.commentsContainer}>
          <h2 className={styles.commentsTitle}>Comments</h2>
          <form className={styles.commentsSumbmissionContainer} onSubmit={handleSubmit}>
            <div className={styles.commentsSumbmissionContent}>
              <div className={styles.commentsSumbmissionFieldHolder}>
                <textarea
                  className={`${styles.commentsSumbmissionField} ${touchedFields.message ? styles.touched : ''}`}
                  value={message}
                  onChange={handleTextAreaChange}
                  onBlur={() => handleBlur('message')}
                  style={{ height: textareaHeight }}
                  ref={textareaRef}
                  required
                ></textarea>
                <label onClick={handleLabelClick} className={styles.commentsSumbmissionLabel}>
                  Add a Comment
                </label>
              </div>
              <div className={styles.commentsSumbmissionMultiFieldHolder}>
                <div className={styles.commentsSumbmissionFieldHolder}>
                  <input
                    className={`${styles.commentsSumbmissionField} ${touchedFields.fname ? styles.touched : ''}`}
                    type="text"
                    name="fname"
                    id="fname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onBlur={() => handleBlur('fname')}
                    required
                  />
                  <label
                    className={styles.commentsSumbmissionLabel}
                    htmlFor="fname"
                  >
                    First Name
                  </label>
                </div>
                <div className={styles.commentsSumbmissionFieldHolder}>
                  <input
                    className={`${styles.commentsSumbmissionField} ${touchedFields.lname ? styles.touched : ''}`}
                    type="text"
                    name="lname"
                    id="lname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onBlur={() => handleBlur('lname')}
                    required
                  />
                  <label
                    className={styles.commentsSumbmissionLabel}
                    htmlFor="lname"
                  >
                    Last Name
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.commentsSumbmission}>
              <button type="submit" className={`${styles.commentSubmit} ${!isFormFilled() ? styles.disabled : ''} `} disabled={!isFormFilled()}>
                Post
              </button>
            </div>
          </form>

          <div className={styles.commentsViewContainer}>
            <h3 className={styles.commentsPostTitle}>Posted Comments</h3>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className={styles.commentsPost}>
                  <div className={styles.commentsPostContent}>
                    <p className={styles.comment}>
                      {comment.text}
                    </p>
                  </div>
                  <div className={styles.commentsPostEnding}>
                    <p>{comment.firstName} {comment.lastName}</p>
                    <p>{comment.date}</p>
                  </div>
                </li>
              ))}
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