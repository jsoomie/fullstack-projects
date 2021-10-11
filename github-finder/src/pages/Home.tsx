import { Fragment, Component } from "react";
import { Navbar, User } from "../components";

const title = "Github Finder";
export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title={title} />
        <User />
      </Fragment>
    );
  }
}
