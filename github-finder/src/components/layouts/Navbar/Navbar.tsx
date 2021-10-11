import { Component } from "react";
import { FaGithub } from "react-icons/fa";
import "./Navbar.css";

interface InterProps {
  title: string;
}

export class Navbar extends Component<InterProps> {
  render() {
    const { title } = this.props;
    return (
      <nav id="Navbar">
        <div className="Navbar-LeftPanel">
          <FaGithub />
          <h1>{title}</h1>
        </div>
        <ul className="Navbar-RightPanel">
          <li>
            <h1>Home</h1>
          </li>
          <li>
            <h1>About</h1>
          </li>
        </ul>
      </nav>
    );
  }
}
