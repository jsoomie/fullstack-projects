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
    loading: true,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const url = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`;
    const res = await axios.get(url);
    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async (text: string) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`;
    const res: ServerData = await axios.get(url);
    console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Navbar title={title} />
        <Search searchUsers={this.searchUsers} />
        <User loading={this.state.loading} users={this.state.users} />
      </Fragment>
    );
  }
}
