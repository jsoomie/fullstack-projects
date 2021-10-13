import React, { Component, Fragment } from "react";
import "./Search.css";

interface SearchProps {
  searchUsers: Function;
  clearUser: React.MouseEventHandler;
  showClear: boolean;
}

export class Search extends Component<SearchProps> {
  state = {
    text: "",
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ [e.target.name]: e.currentTarget.value });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render(): JSX.Element {
    const { text } = this.state;
    const { clearUser, showClear } = this.props;

    return (
      <Fragment>
        <form onSubmit={this.onSubmit} id="Search-Form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            onChange={(e) => this.onChange(e)}
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
  }
}
