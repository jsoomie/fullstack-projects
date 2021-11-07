import "./AddContacts.css";
import { ChangeEvent, FormEvent, useState, useContext } from "react";
import { contactContext, ContactData } from "../../context";

export const AddContacts = () => {
  // const context = useContext(contactContext);
  const initialContactData: ContactData = {
    id: "0",
    name: "",
    email: "",
    phone: "",
    type: "personal",
  };

  const [contact, setContact] = useState<ContactData>(initialContactData);
  const { name, email, phone, type } = contact;

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [target.name]: target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // context.addContact(contact);
    console.log("SUBMITTED");
    setContact({
      ...contact,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  // type Style<T extends HTMLElement> = HTMLAttributes<T>["style"];
  // const testStyles: Style<HTMLDivElement> = {
  //   border: "1px solid red",
  //   backgroundColor: "yellow",
  //   padding: "1rem",
  // };

  return (
    <form id="AddContactsContainer" onSubmit={onSubmit}>
      {/* <div style={testStyles}>Hello</div> */}
      <h2>Add Contacts</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <div className="RadioContainer">
        <p>Contact Type</p>
        <input
          className="PersonalRadio"
          type="radio"
          name="type"
          value="personal"
          checked={type === "personal"}
        />
        <label htmlFor="type">Personal</label>
        <input
          className="ProfessionalRadio"
          type="radio"
          name="type"
          value="personal"
          checked={type === "professional"}
        />
        <label>Professional</label>
      </div>
      <div className="ButtonContainer">
        <input type="submit" value="Add Contact" />
      </div>
    </form>
  );
};
