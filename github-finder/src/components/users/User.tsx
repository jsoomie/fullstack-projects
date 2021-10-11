import { Component } from "react";
import { UserItem } from "./UserItem";
import data from "../../TestData.json";

export class User extends Component {
  state = {
    users: data,
  };

  render() {
    const res = this.state.users;
    return (
      <div style={styles.user}>
        {res.map((data) => (
          <UserItem key={data.id} user={data} />
        ))}
      </div>
    );
  }
}

const styles = {
  user: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
};

export default User;
