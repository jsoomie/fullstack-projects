import "./AddContacts.css";
import { ChangeEvent, FormEvent, useState, useContext, useEffect } from "react";
import { contactContext, ContactData } from "../../context";

export const AddContacts = () => {
  const {
    addContacts,
    contact: contactEdit,
    clearCurrent,
  } = useContext(contactContext);
  const initialContactData: ContactData = {
    id: "0",
    name: "",
    email: "",
    phone: "",
    type: "personal",
  };
  const [contact, setContact] = useState<ContactData>(initialContactData);
  const { name, email, phone, type } = contact;

  useEffect(() => {
    if (contactEdit !== undefined) {
      setContact(contactEdit);
    } else {
      setContact(initialContactData);
    }
    //eslint-disable-next-line
  }, [contactContext, contactEdit]);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [target.name]: target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (contactEdit === undefined) {
      setContact({
        ...contact,
        [e.currentTarget.name]: e.currentTarget.value,
      });
      addContacts(contact);
    }
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form id="AddContactsContainer" onSubmit={onSubmit}>
      <h2>{contactEdit ? "Edit Contact" : "Add Contact"}</h2>
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
          onChange={onChange}
        />
        <label htmlFor="type">Personal</label>
        <input
          className="ProfessionalRadio"
          type="radio"
          name="type"
          value="professional"
          checked={type === "professional"}
          onChange={onChange}
        />
        <label>Professional</label>
      </div>
      <div className="ButtonContainer">
        <input
          type="submit"
          value={contactEdit ? "Update Contact" : "Add Contact"}
        />
        {contactEdit && (
          <button className="ClearButton" onClick={clearAll}>
            Clear
          </button>
        )}
      </div>
    </form>
  );
};
