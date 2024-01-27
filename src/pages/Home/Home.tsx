import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube, faMastodon, faXTwitter, faInstagram, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <section id="home" className={styles.homeContainer}>
      <div className={styles.information}>
        <div className={styles.homeContentContainer}>
          <h1 className={styles.name}>Eric Hine</h1>
          <p className={styles.dedication}>
            I'm a Dedicated{" "}
            <span className={styles.title}>Full-Stack Developer</span>
          </p>
        </div>
        <div className={styles.homeIntroContainer}>
          <div className={styles.homeContentContainer}>
            <p>
              Welcome to the gateway of my professional narrative! With over a
              decade of dedicated experience as a Full-Stack Developer, I bring
              an unwavering passion for transforming ideas into seamless digital
              experiences. This platform is not just a portfolio; it's a living
              testament to my journey—a dynamic canvas that illustrates the
              evolution of my skills and the diverse projects that have fueled
              my enthusiasm.
            </p>
            <p>
              Beyond the lines of code, this website delves into the
              intersection of my professional expertise and personal interests.
              From innovative web applications to explorations of my hobbies, I
              invite you to navigate through this virtual manifestation of my
              multifaceted identity. Join me in discovering the synergy between
              my technical prowess and the rich tapestry of experiences that
              define my professional and personal pursuits.
            </p>
          </div>
        </div>
        <button
          className={[styles.homeContentContainer, styles.hireButton].join(" ")}
        >
          Hire Me
        </button>
      </div>
      <div className={styles.socialMedia}>
        <i><FontAwesomeIcon icon={faGithub} size="lg"/></i>
        <i><FontAwesomeIcon icon={faLinkedin} size="lg"/></i>
        <i><FontAwesomeIcon icon={faYoutube} size="lg"/></i>
        <i><FontAwesomeIcon icon={faTwitch} size="lg"/></i>
        <i><FontAwesomeIcon icon={faMastodon} size="lg"/></i>
        <i><FontAwesomeIcon icon={faXTwitter} size="lg"/></i>
        <i><FontAwesomeIcon icon={faInstagram} size="lg"/></i>
      </div>
    </section>
  );
}
