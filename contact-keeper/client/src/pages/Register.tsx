import { Fragment } from "react";
import { Register as RegisterComp, Navbar } from "../components";

export const Register = () => {
  return (
    <Fragment>
      <Navbar />
      <RegisterComp />
    </Fragment>
  );
};
