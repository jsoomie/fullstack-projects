import { UserItem } from "./UserItem";
import { Spinner } from "../index";
interface UserProps {
  users: any[];
  loading: boolean;
}

export const User = ({ loading, users }: UserProps): JSX.Element => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={styles.user}>
      {users && users.map((user) => <UserItem key={user.id} user={user} />)}
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
