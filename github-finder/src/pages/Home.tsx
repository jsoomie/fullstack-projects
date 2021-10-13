import { Fragment, Component } from "react";
import { Navbar, User, Spinner, Search } from "../components";
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
  };

  searchUsers = async (text: string) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`;
    const res: ServerData = await axios.get(url);
    this.setState({ users: res.data.items, loading: false });
  };

  clearUser = () => {
    this.setState({ users: [] });
  };

  render() {
    return (
      <Fragment>
        <Navbar title={title} />
        <Search
          searchUsers={this.searchUsers}
          clearUser={this.clearUser}
          showClear={this.state.users.length > 0}
        />
        {this.state.loading ?? <Spinner />}
        {this.state.users.length ? (
          <User loading={this.state.loading} users={this.state.users} />
        ) : (
          <p style={{ margin: "1rem auto", width: "fit-content" }}>
            Search for users using the search bar above
          </p>
        )}
      </Fragment>
    );
  }
}
