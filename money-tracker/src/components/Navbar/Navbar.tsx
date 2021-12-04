import { Link } from "react-router-dom";
import { useLogout } from "hooks";
import styles from "./Navbar.module.css";

const { navbar, title } = styles;

export const Navbar = () => {
  const { logout } = useLogout();

  return (
    <nav className={navbar}>
      <ul>
        <li className={title}>money-tracker</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};
