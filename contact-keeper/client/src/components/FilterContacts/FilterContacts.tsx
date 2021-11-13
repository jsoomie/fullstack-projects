import React, { useContext } from "react";
import { contactContext } from "../../context";
import "./FilterContacts.css";

export const ContactFilter = (): JSX.Element => {
  const { filteredContacts, clearFiltered } = useContext(contactContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      clearFiltered();
    } else {
      filteredContacts(e.currentTarget.value);
    }
  };

  return (
    <form id="FilterContacts">
      <input type="text" placeholder="Filter Contacts..." onChange={onChange} />
    </form>
  );
};
