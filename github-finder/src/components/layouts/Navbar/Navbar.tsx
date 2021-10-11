import { Component } from "react";
import { FaGithub } from "react-icons/fa";
import "./Navbar.css";

interface InterProps {
  title: string;
}

export class Navbar extends Component<InterProps> {
  render() {
    return (
      <nav id="Navbar">
        <div className="Navbar-LeftPanel">
          <FaGithub />
          <h1>{this.props.title}</h1>
        </div>
        <div className="Navbar-RightPanel">
          <ul>
            <li>
              <h1>Home</h1>
            </li>
            <li>
              <h1>About</h1>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
