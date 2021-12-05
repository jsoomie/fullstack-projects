import { Link } from "react-router-dom";
import { useLogout } from "hooks";
import { useAuthContext } from "hooks";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const today = new Date();
  const currentHour = today.getHours();

  const greeting = () => {
    if (currentHour < 12) {
      return "Good morning";
    } else if (currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>money-tracker</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              {greeting()}, {user.displayName ? user.displayName : "User"}
            </li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
