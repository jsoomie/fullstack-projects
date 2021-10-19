import { IPropsUserData } from "../../interface";

export const UserLeftPanel = ({
  user: { avatar_url, login, name },
}: IPropsUserData) => {
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
