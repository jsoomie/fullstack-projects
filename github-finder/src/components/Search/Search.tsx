import React, { Component } from "react";
import "./Search.css";

export class Search extends Component {
  state = {
    text: "",
  };

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: e.currentTarget.value });
  }

  render() {
    return (
      <form action="" id="Search-Form">
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
