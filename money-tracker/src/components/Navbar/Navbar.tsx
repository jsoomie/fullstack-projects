import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const { navbar, title } = styles;

export const Navbar = () => {
  return (
    <nav className={navbar}>
      <ul>
        <li className={title}>money-tracker</li>
        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};
