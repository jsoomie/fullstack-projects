import { Navbar, Contacts } from "../components";

export const Home = (): JSX.Element => {
  return (
    <div className="HomePage">
      <Navbar />
      <div className="container">
        <div id="StageContainer">
          <div id="AddContactContainer"></div>
          <Contacts />
        </div>
      </div>
    </div>
  );
};
