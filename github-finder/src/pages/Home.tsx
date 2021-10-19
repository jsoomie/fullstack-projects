import { Fragment, useState } from "react";
import { User, Search, Alert } from "../components";

export const Home = (): JSX.Element => {
  const initialAlert = {
    msg: "",
    type: "",
    showAlert: false,
  };

  const [alert, setAlert] = useState(initialAlert);

  const alerter = (msg: string, type: string): void => {
    setAlert({ msg, type, showAlert: true });
    setTimeout(() => setAlert(initialAlert), 3000);
  };

  return (
    <Fragment>
      <Alert alert={alert} />
      <Search setAlert={alerter} />
      <User />
    </Fragment>
  );
};
