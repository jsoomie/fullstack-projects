import { ContactData } from "../../context";

interface IProp {
  contact: ContactData;
}

export const ContactItems = ({ contact }: IProp): JSX.Element => {
  return (
    <li>
      <h1>{contact.name}</h1>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.type}</p>
    </li>
  );
};
