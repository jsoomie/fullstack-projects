import React, { Component } from "react";
import "./Search.css";

export class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.currentTarget.value });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
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
