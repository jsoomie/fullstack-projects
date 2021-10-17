import "./UserItem.css";
import { Link } from "react-router-dom";
import { UserData } from "../../interface";

export const UserItem = ({ login, avatar_url }: UserData): JSX.Element => {
  return (
    <div id="UserItem" className="card">
      <img src={avatar_url} alt={login} className="avatar" />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="button">
        More
      </Link>
    </div>
  );
};
