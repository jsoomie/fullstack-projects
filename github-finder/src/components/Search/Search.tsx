import { Fragment, useState, useContext } from "react";
import { githubContext } from "../../context";
import "./Search.css";

interface SearchProps {
  clearUser: React.MouseEventHandler;
  showClear: boolean;
  setAlert: Function;
}

export const Search = ({
  clearUser,
  showClear,
  setAlert,
}: SearchProps): JSX.Element => {
  const { searchUsers } = useContext(githubContext);
  const [text, setText] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "warning");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit} id="Search-Form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          onChange={(e) => onChange(e)}
          value={text}
        />
        <input type="submit" value="Search" className="button" />
      </form>
      {showClear && (
        <div className="clearButtonContainer">
          <button className="clearButton" onClick={clearUser}>
            Clear
          </button>
        </div>
      )}
    </Fragment>
  );
};
