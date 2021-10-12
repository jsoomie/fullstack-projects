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

  render() {
    return (
      <Fragment>
        <Navbar title={title} />
        <Search searchUsers={this.searchUsers} />
        {this.state.loading ?? <Spinner />}
        <User loading={this.state.loading} users={this.state.users} />
      </Fragment>
    );
  }
}
