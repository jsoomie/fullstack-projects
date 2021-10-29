import { useContext } from "react";
import { ContactItems } from "./ContactItem";
import { contactContext } from "../../context";
import "./Contacts.css";

export const Contacts = (): JSX.Element => {
  const { contacts } = useContext(contactContext);

  return (
    <div id="ContactContainer">
      {contacts.map((contact) => (
        <ContactItems contact={contact} />
      ))}
    </div>
  );
};
