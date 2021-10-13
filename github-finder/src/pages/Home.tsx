import { Fragment, Component } from "react";
import { Navbar, User, Spinner, Search, Alert } from "../components";
import axios from "axios";

const title = "Github Finder";

interface Response {
  items: Array<{}>;
}
interface ServerData {
  data: Response;
}

export class Home extends Component {
  state = {
    users: [],
    loading: false,
    alert: { msg: "", type: "", showAlert: false },
  };

  searchUsers = async (text: string): Promise<void> => {
    this.setState({ loading: true });
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`;
    const res: ServerData = await axios.get(url);
    this.setState({ users: res.data.items, loading: false });
  };

  clearUser = (): void => {
    this.setState({ users: [] });
  };

  setAlert = (msg: string, type: string): void => {
    this.setState({ alert: { msg, type, showAlert: true } });
    setTimeout(
      () => this.setState({ alert: { ...alert, showAlert: false } }),
      3000
    );
  };

  render(): JSX.Element {
    const { users, loading } = this.state;
    return (
      <Fragment>
        <Navbar title={title} />
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUser={this.clearUser}
          showClear={users.length > 0}
          setAlert={this.setAlert}
        />
        {loading ?? <Spinner />}
        {users.length ? (
          <User loading={loading} users={users} />
        ) : (
          <p style={{ margin: "1rem auto", width: "fit-content" }}>
            Search for users using the search bar above
          </p>
        )}
      </Fragment>
    );
  }
}
