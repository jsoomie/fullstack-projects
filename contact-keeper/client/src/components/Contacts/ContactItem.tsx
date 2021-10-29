import { ContactData } from "../../context";
import { Fragment } from "react";

interface IProp {
  contact: ContactData;
}

export const ContactItems = ({ contact }: IProp): JSX.Element => {
  return (
    <Fragment>
      <h1>{contact.name}</h1>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.type}</p>
    </Fragment>
  );
};
