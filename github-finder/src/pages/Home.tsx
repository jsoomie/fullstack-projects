import { Fragment, Component } from "react";
import { Navbar, User, Spinner, Search } from "../components";
import axios from "axios";

const title = "Github Finder";
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

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Navbar title={title} />
        <Search />
        <User loading={this.state.loading} users={this.state.users} />
      </Fragment>
    );
  }
}
