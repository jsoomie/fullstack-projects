import { ContactData, contactContext } from "context";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { useContext } from "react";
interface IProp {
  contact: ContactData;
}

export const ContactItems = ({ contact }: IProp): JSX.Element => {
  const { id, name, email, phone, type } = contact;
  const { deleteContact, setCurrent, clearCurrent } =
    useContext(contactContext);

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <li className="Contacts">
      <div className="Left">
        <h1>{name ? name : "No name listed"}</h1>
        <p>
          <HiOutlineMail />
          {email ? email : "No listed email"}
        </p>
        <p>
          <HiOutlinePhone />
          {phone ? phone : "No listed phone number"}
        </p>
        <div className="ButtonContainer">
          <button onClick={() => setCurrent(contact)}>Edit</button>
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
