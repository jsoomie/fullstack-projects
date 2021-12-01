import { useTheme } from "hooks";
import { SearchBar } from "components";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Recipes & Cook</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};
