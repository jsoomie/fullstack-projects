import { Fragment, useState } from "react";
import { User, Search, Alert } from "../components";

export const Home = (): JSX.Element => {
  const [alert, setAlert] = useState({ msg: "", type: "", showAlert: false });

  const alerter = (msg: string, type: string): void => {
    setAlert({ msg, type, showAlert: true });
    setTimeout(() => setAlert({ msg: "", type: "", showAlert: false }), 3000);
  };

  return (
    <Fragment>
      <Alert alert={alert} />
      <Search setAlert={alerter} />
      <User />
    </Fragment>
  );
};
