import { UserItem } from "./UserItem";
import { useContext } from "react";
import { githubContext } from "../../context";
import "./User.css";

export const User = (): JSX.Element => {
  const { users } = useContext(githubContext);

  return (
    <div id="Users">
      {users && users.map((user) => <UserItem key={user.id} {...user} />)}
    </div>
  );
};

export default User;
