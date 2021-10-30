import "./AddContacts.css";
import { useState } from "react";
import { ContactData } from "../../context";

export const AddContacts = () => {
  const initialContactData: ContactData = {
    id: 0,
    name: "",
    email: "",
    phone: "",
    type: "personal",
  };

  const [{ name, email, phone, type }, setContact] =
    useState<ContactData>(initialContactData);

  const onChange = () => {
    console.log("ON CHANGE");
  };

  return (
    <form id="AddContactsContainer">
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
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
      />
      Personal
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "professional"}
      />
      Professional
      <div>
        <input type="submit" value="Add Contact" />
      </div>
    </form>
  );
};
