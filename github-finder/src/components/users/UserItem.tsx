import "./UserItem.css";
interface UserProps {
  user: {
    id: number;
    login: string;
    avatarUrl: string;
    htmlUrl: string;
  };
}

export const UserItem = ({
  user: { login, avatarUrl, htmlUrl },
}: UserProps) => {
  return (
    <div id="UserItem" className="card">
      <img src={avatarUrl} alt={login} className="avatar" />
      <h3>{login}</h3>
      <a href={htmlUrl} className="button">
        More
      </a>
    </div>
  );
};
