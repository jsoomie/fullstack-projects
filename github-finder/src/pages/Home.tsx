import { User, Search, Alert } from "../components";

export const Home = (): JSX.Element => {
  return (
    <div className="container">
      <Alert />
      <Search />
      <User />
    </div>
  );
};
