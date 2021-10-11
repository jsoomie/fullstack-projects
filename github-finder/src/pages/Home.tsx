import { Fragment, Component } from "react";
import { Navbar, User } from "../components";
import { Spinner } from "../components";
import axios from "axios";

const title = "Github Finder";
export class Home extends Component {
  state = {
    users: [],
    loading: true,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Navbar title={title} />
        <User loading={this.state.loading} users={this.state.users} />
      </Fragment>
    );
  }
}
