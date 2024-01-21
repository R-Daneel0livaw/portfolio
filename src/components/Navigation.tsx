import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

export default function Navigation() {
  return (
    <nav>
      <h1>Eric Hine</h1>
      <ul>
        <li>
          <Link to={PathConstants.HOME}>Home</Link>
        </li>
        <li>
          <Link to={PathConstants.ABOUT}>About Me</Link>
        </li>
        <li>
          <Link to={PathConstants.SKILLS}>Skills</Link>
        </li>
        <li>
          <Link to={PathConstants.PROJECTS}>Projects</Link>
        </li>
        <li>
          <Link to={PathConstants.BLOG}>Blog</Link>
        </li>
        <li>
          <Link to={PathConstants.CONTACT}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}