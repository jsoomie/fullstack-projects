import { Fragment } from "react";
import { Login as LoginComp, Navbar } from "../components";

export const Login = () => {
  return (
    <Fragment>
      <Navbar />
      <LoginComp />
    </Fragment>
  );
};
