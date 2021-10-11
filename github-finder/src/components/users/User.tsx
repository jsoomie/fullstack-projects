import { UserItem } from "./UserItem";
import { Spinner } from "../index";
interface UserProps {
  users: any[];
  loading: boolean;
}

export const User = ({ loading, users }: UserProps) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={styles.user}>
      {users && users.map((user) => <UserItem key={user.id} user={user} />)}
    </div>
  );
};

const styles = {
  user: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
};

export default User;
