import { Link } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faCheck, faDiagramProject, faBook, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <nav className={styles.sidebar}>
      <h2 className={styles.navHeader}>Eric Hine</h2>
      <ul>
        <li>
          <i>
            <FontAwesomeIcon icon={faHouse} />
          </i>
          <Link to={PathConstants.HOME}>Home</Link>
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
          <Link to={PathConstants.ABOUT}>About Me</Link>
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faCheck} />
          </i>
          <Link to={PathConstants.SKILLS}>Skills</Link>
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faDiagramProject} />
          </i>
          <Link to={PathConstants.PROJECTS}>Projects</Link>
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faBook} />
          </i>
          <Link to={PathConstants.BLOG}>Blog</Link>
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faMessage} />
          </i>
          <Link to={PathConstants.CONTACT}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}