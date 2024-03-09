import PathConstants from "../../routes/pathConstants";
import styles from "./Navigation.module.css";
import { faHouse, faUser, faCheck, faDiagramProject, faBook, faMessage } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem/NavItem";
import { Dispatch, SetStateAction } from "react";

interface LayoutProps {
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
}

export default function Navigation({ currentPage, setCurrentPage }: LayoutProps) {
  return (
    <nav className={styles.sidebar}>
      <h2 className={styles.navHeader}>Eric Hine</h2>
      <ul className={styles.navList}>
        <NavItem icon={faHouse} to={PathConstants.HOME} currentPage={currentPage} setCurrentPage={setCurrentPage}>
          Home
        </NavItem>
        <NavItem icon={faUser} to={PathConstants.ABOUT} currentPage={currentPage} setCurrentPage={setCurrentPage}>
          About Me
        </NavItem>
        <NavItem icon={faCheck} to={PathConstants.SKILLS} currentPage={currentPage} setCurrentPage={setCurrentPage}>
          Skills
        </NavItem>
        <NavItem icon={faDiagramProject} to={PathConstants.PROJECTS} currentPage={currentPage} setCurrentPage={setCurrentPage}>
          Projects
        </NavItem>
        <NavItem icon={faBook} to={PathConstants.BLOG} currentPage={currentPage} setCurrentPage={setCurrentPage}>
          Blog
        </NavItem>
        <NavItem icon={faMessage} to={PathConstants.CONTACT} currentPage={currentPage} setCurrentPage={setCurrentPage}>
          Contact
        </NavItem>
      </ul>
    </nav>
  );
}