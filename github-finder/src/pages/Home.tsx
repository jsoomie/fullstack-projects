import { Fragment, Component } from "react";
import { Navbar, UserItem } from "../components";

const title = "Github Finder";
export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title={title} />
        <UserItem />
      </Fragment>
    );
  }
}
