import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface InterProps {
  title?: string;
}

export const Navbar = ({
  title = "Github Finder",
}: InterProps): JSX.Element => {
  return (
    <nav id="Navbar">
      <div className="Navbar-LeftPanel">
        <Link to="/">
          <FaGithub />
          {title}
        </Link>
      </div>
      <ul className="Navbar-RightPanel">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
