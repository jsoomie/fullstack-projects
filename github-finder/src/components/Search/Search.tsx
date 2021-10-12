import React, { Component } from "react";
import "./Search.css";

interface SearchProps {
  searchUsers: Function;
}

export class Search extends Component<SearchProps> {
  state = {
    text: "",
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.currentTarget.value });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} id="Search-Form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          onChange={(e) => this.onChange(e)}
          value={this.state.text}
        />
        <input type="submit" value="Search" className="button" />
      </form>
    );
  }
}
