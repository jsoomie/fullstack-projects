import "./Navbar.css";
import { FiArchive } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Navbar = (): JSX.Element => {
  return (
    <div id="NavbarContainer">
      <Link to="/" className="LeftContainer">
        <FiArchive />
        <p>Contact Keeper</p>
      </Link>
      <div className="RightContainer">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
