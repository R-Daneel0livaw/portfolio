import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube, faMastodon, faXTwitter, faInstagram, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';
import styles from "./SocialMedia.module.css";

export default function SocialMedia() {
  return (
    <div className={styles.socialMediaContainer}>
      <i>
        <a
          href="https://github.com/R-Daneel0livaw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </i>
      <i>
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </i>
      <i>
        <FontAwesomeIcon icon={faYoutube} size="lg" />
      </i>
      <i>
        <FontAwesomeIcon icon={faTwitch} size="lg" />
      </i>
      <i>
        <FontAwesomeIcon icon={faMastodon} size="lg" />
      </i>
      <i>
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
      </i>
      <i>
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </i>
    </div>
  );
}