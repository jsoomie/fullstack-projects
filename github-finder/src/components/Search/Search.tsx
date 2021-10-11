import { Component } from "react";
import "./Search.css";

export class Search extends Component {
  render() {
    return (
      <form action="" id="Search-Form">
        <input type="text" name="text" placeholder="Search Users..." />
        <input type="submit" value="Search" className="button" />
      </form>
    );
  }
}
