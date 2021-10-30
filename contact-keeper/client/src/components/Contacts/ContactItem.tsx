import { ContactData } from "../../context";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
interface IProp {
  contact: ContactData;
}

export const ContactItems = ({ contact }: IProp): JSX.Element => {
  const { name, email, phone, type } = contact;
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
          <button>Delete</button>
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
