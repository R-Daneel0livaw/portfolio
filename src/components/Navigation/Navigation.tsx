import PathConstants from "../../routes/pathConstants";
import styles from "./Navigation.module.css";
import { faHouse, faUser, faCheck, faDiagramProject, faBook, faMessage } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem/NavItem";

interface LayoutProps {
  currentPage: string;
}

export default function Navigation({ currentPage }: LayoutProps) {
  currentPage = currentPage.startsWith("/blog/") ? PathConstants.BLOG : currentPage;
  return (
    <nav className={styles.sidebar}>
      <h2 className={styles.navHeader}>Eric Hine</h2>
      <ul className={styles.navList}>
        <NavItem icon={faHouse} to={PathConstants.HOME} currentPage={currentPage}>
          Home
        </NavItem>
        <NavItem icon={faUser} to={PathConstants.ABOUT} currentPage={currentPage}>
          About Me
        </NavItem>
        <NavItem icon={faCheck} to={PathConstants.SKILLS} currentPage={currentPage}>
          Skills
        </NavItem>
        <NavItem icon={faDiagramProject} to={PathConstants.PROJECTS} currentPage={currentPage}>
          Projects
        </NavItem>
        <NavItem icon={faBook} to={PathConstants.BLOG} currentPage={currentPage}>
          Blog
        </NavItem>
        <NavItem icon={faMessage} to={PathConstants.CONTACT} currentPage={currentPage}>
          Contact
        </NavItem>
      </ul>
    </nav>
  );
}