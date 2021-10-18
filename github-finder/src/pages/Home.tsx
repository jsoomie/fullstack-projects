import { Fragment, useState } from "react";
import { User, Spinner, Search, Alert } from "../components";
import { UserData } from "../interface";

export const Home = (): JSX.Element => {
  const initialValues: UserData[] = [];
  const [users, setUsers] = useState<UserData[]>(initialValues);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ msg: "", type: "", showAlert: false });

  const clearUser = (): void => {
    setUsers(initialValues);
  };

  const alerter = (msg: string, type: string): void => {
    setAlert({ msg, type, showAlert: true });
    setTimeout(() => setAlert({ msg: "", type: "", showAlert: false }), 3000);
  };

  return (
    <Fragment>
      <Alert alert={alert} />
      <Search setAlert={alerter} />
      {loading ?? <Spinner />}
      <User />
    </Fragment>
  );
};
