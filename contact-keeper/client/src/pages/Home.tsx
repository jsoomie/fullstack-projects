import { Navbar, Contacts, AddContacts } from "../components";

export const Home = (): JSX.Element => {
  return (
    <div className="HomePage">
      <Navbar />
      <div className="container">
        <div id="StageContainer">
          <AddContacts />
          <Contacts />
        </div>
      </div>
    </div>
  );
};
