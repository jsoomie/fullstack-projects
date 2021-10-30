import { Navbar } from "../components";

export const About = (): JSX.Element => {
  return (
    <div id="AboutPage">
      <Navbar />
      <div className="container">
        <h1>Contact Keeper</h1>
        <h3>Welcome to the Contact Keeper!</h3>
        <p>
          Where you can create your own personal contacts books with name, phone
          numbers, emails and addresses!
        </p>

        <div className="VersionBadge">
          <p>Version: 0.1.25</p>
        </div>
      </div>
    </div>
  );
};
