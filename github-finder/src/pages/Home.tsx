import { Fragment, useState } from "react";
import { User, Spinner, Search, Alert } from "../components";
import axios from "axios";

interface UserData {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface Response {
  items: UserData[];
}

export const Home = (): JSX.Element => {
  const initialUsers: UserData[] = [];
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ msg: "", type: "", showAlert: false });

  const searchUsers = async (text: string): Promise<void> => {
    setLoading(true);
    const GITHUB_ID = `&client_id=${process.env.REACT_APP_GITHUB_ID}`;
    const GITHUB_SECRET = `&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`;
    const CREDENTIALS = `${GITHUB_ID}${GITHUB_SECRET}`;
    const url = `https://api.github.com/search/users?q=${text}${CREDENTIALS}`;
    const res = await axios.get<Response>(url);
    setUsers(res.data.items);
    setLoading(false);
  };

  const clearUser = (): void => {
    setUsers(initialUsers);
  };

  const alerter = (msg: string, type: string): void => {
    setAlert({ msg, type, showAlert: true });
    setTimeout(() => setAlert({ msg: "", type: "", showAlert: false }), 3000);
  };

  return (
    <Fragment>
      <Alert alert={alert} />
      <Search
        searchUsers={searchUsers}
        clearUser={clearUser}
        showClear={users.length > 0}
        setAlert={alerter}
      />
      {loading ?? <Spinner />}
      {users.length ? (
        <User loading={loading} users={users} />
      ) : (
        <p style={{ margin: "1rem auto", width: "fit-content" }}>
          Search for users using the search bar above
        </p>
      )}
    </Fragment>
  );
};
