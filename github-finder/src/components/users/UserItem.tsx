import "./UserItem.css";
interface UserProps {
  user: {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

export const UserItem = ({
  user: { login, avatar_url, html_url },
}: UserProps): JSX.Element => {
  return (
    <div id="UserItem" className="card">
      <img src={avatar_url} alt={login} className="avatar" />
      <h3>{login}</h3>
      <a href={html_url} className="button">
        More
      </a>
    </div>
  );
};
