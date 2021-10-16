import { UserData } from "../../interface";

export const UserLeftPanel = ({ avatar_url, login, name }: UserData) => {
  return (
    <div className="LeftPanel">
      <img
        src={avatar_url}
        alt={login}
        className="avatar"
        style={{ height: "13rem", width: "13rem" }}
      />
      {name ? <h2>{name}</h2> : <h2>{login}</h2>}
      {name ? <p>({login})</p> : null}
    </div>
  );
};
