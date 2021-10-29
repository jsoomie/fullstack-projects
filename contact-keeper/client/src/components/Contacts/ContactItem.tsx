import { ContactData } from "../../context";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
interface IProp {
  contact: ContactData;
}

export const ContactItems = ({ contact }: IProp): JSX.Element => {
  return (
    <li className="Contacts">
      <div className="Left">
        <h1>{contact.name}</h1>
        <p>
          <HiOutlineMail />
          {contact.email}
        </p>
        <p>
          <HiOutlinePhone />
          {contact.phone}
        </p>
        <div className="ButtonContainer">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div className="Right">
        <p className="Badge">{contact.type}</p>
      </div>
    </li>
  );
};
