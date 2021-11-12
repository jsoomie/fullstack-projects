import { useContext, useRef, ChangeEvent } from "react";
import { contactContext } from "../../context";

export const ContactFilter = () => {
  const { filteredContacts, clearFiltered } = useContext(contactContext);
  const text = useRef("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (text.current !== "") {
      filteredContacts(e.currentTarget.value);
    } else {
      clearFiltered();
    }
  };

  return (
    <form>
      <input type="text" placeholder="Filter Contacts..." onChange={onChange} />
    </form>
  );
};
