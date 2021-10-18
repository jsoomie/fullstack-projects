import { UserItem } from "./UserItem";
import { Spinner } from "../index";
import { useContext } from "react";
import { githubContext } from "../../context";

export const User = (): JSX.Element => {
  const { users, loading } = useContext(githubContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={styles.user}>
      {users && users.map((user) => <UserItem key={user.id} {...user} />)}
    </div>
  );
};

type styleType = {
  user: {
    display: string;
    gridTemplateColumns: string;
  };
};

const styles: styleType = {
  user: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
};

export default User;
