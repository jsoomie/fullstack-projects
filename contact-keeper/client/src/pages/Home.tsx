import { Navbar, Contacts, AddContacts, ContactFilter } from "../components";

export const Home = (): JSX.Element => {
  return (
    <div className="HomePage">
      <Navbar />
      <div className="container">
        <div id="StageContainer">
          <AddContacts />
          <div>
            <ContactFilter />
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
};
