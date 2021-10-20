import { Fragment, useState, useContext } from "react";
import { Spinner } from "..";
import { githubContext, alertContext } from "../../context";
import "./Search.css";

export const Search = (): JSX.Element => {
  const { searchUsers, clearUser, users } = useContext(githubContext);
  const { setAlert } = useContext(alertContext);

  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
  };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    setLoading(true);
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "warning");
      setLoading(false);
    } else {
      await searchUsers(text);
      setLoading(false);
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
      {loading ? (
        <Spinner />
      ) : users.length ? (
        <div className="clearButtonContainer">
          <button className="clearButton" onClick={clearUser}>
            Clear
          </button>
        </div>
      ) : (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          Use the search bar to start searching!
        </p>
      )}
    </Fragment>
  );
};
