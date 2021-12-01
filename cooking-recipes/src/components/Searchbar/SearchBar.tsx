import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export const SearchBar = () => {
  const [term, setTerm] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTerm(e.target.value)
          }
          required
        />
      </form>
    </div>
  );
};
