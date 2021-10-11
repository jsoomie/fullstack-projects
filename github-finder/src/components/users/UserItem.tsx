import { Component } from "react";
import "./UserItem.css";

export class UserItem extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatarUrl: "https://avatars0.githubusercontent.com/u/1?v=4",
    htmlUrl: "https://github.com/mojombo",
  };

  render() {
    const { login, avatarUrl, htmlUrl } = this.state;

    return (
      <div id="UserItem" className="card">
        <img src={avatarUrl} alt={login} className="avatar" />
        <h3>{login}</h3>
        <a href={htmlUrl} className="button">
          More
        </a>
      </div>
    );
  }
}
