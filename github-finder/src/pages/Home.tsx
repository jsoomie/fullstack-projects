import { Fragment } from "react";
import { User, Search, Alert } from "../components";

export const Home = (): JSX.Element => {
  return (
    <Fragment>
      <Alert />
      <Search />
      <User />
    </Fragment>
  );
};
