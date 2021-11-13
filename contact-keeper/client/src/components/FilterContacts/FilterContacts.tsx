import { useContext, useRef, ChangeEvent, useEffect } from "react";
import { contactContext } from "../../context";
import "./FilterContacts.css";

export const ContactFilter = (): JSX.Element => {
  const { filteredContacts, clearFiltered, filtered } =
    useContext(contactContext);
  const text = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (filtered === null) {
      text.current = null;
    }
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (text.current !== null) {
      filteredContacts(e.currentTarget.value);
    } else {
      clearFiltered();
    }
  };

  return (
    <form id="FilterContacts">
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};
