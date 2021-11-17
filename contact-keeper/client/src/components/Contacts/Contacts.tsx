import { useContext, Fragment } from "react";
import { ContactItems } from "./ContactItem";
import { contactContext } from "context";
import "./Contacts.css";

export const Contacts = (): JSX.Element => {
  const { contacts, filtered } = useContext(contactContext);

  if (contacts.length === 0) {
    return <h4 style={{ marginTop: "1rem" }}>Please add a contact</h4>;
  }

  return (
    <Fragment>
      <ul id="ContactContainer">
        {filtered.length !== 0
          ? filtered?.map((contact) => (
              <ContactItems contact={contact} key={contact.id} />
            ))
          : contacts.map((contact) => (
              <ContactItems contact={contact} key={contact.id} />
            ))}
      </ul>
    </Fragment>
  );
};
