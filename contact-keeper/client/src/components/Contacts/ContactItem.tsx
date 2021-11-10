import { ContactData, contactContext } from "../../context";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { useContext } from "react";
interface IProp {
  contact: ContactData;
}

export const ContactItems = ({ contact }: IProp): JSX.Element => {
  const { id, name, email, phone, type } = contact;
  const { deleteContact } = useContext(contactContext);

  const onDelete = () => {
    deleteContact(id);
  };

  return (
    <li className="Contacts">
      <div className="Left">
        <h1>{name}</h1>
        <p>
          <HiOutlineMail />
          {email ? email : "No listed email"}
        </p>
        <p>
          <HiOutlinePhone />
          {phone ? phone : "No listed phone number"}
        </p>
        <div className="ButtonContainer">
          <button>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
      <div className="Right">
        <p className={type === "professional" ? "BadgeBlue" : "BadgeGray"}>
          {type}
        </p>
      </div>
    </li>
  );
};
