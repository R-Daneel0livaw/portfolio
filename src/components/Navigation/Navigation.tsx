import PathConstants from "../../routes/pathConstants";
import styles from "./Navigation.module.css";
import { faHouse, faUser, faCheck, faDiagramProject, faBook, faMessage } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem/NavItem";

export default function Navigation() {
  return (
    <nav className={styles.sidebar}>
      <h2 className={styles.navHeader}>Eric Hine</h2>
      <ul>
        <NavItem icon={faHouse} to={PathConstants.HOME}>
          Home
        </NavItem>
        <NavItem icon={faUser} to={PathConstants.ABOUT}>
          About Me
        </NavItem>
        <NavItem icon={faCheck} to={PathConstants.SKILLS}>
          Skills
        </NavItem>
        <NavItem icon={faDiagramProject} to={PathConstants.PROJECTS}>
          Projects
        </NavItem>
        <NavItem icon={faBook} to={PathConstants.BLOG}>
          Blog
        </NavItem>
        <NavItem icon={faMessage} to={PathConstants.CONTACT}>
          Contact
        </NavItem>
      </ul>
    </nav>
  );
}