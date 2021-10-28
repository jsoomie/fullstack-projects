import { Navbar } from "../components";

export const Home = (): JSX.Element => {
  return (
    <div className="HomePage">
      <Navbar />
      <div className="container">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};
