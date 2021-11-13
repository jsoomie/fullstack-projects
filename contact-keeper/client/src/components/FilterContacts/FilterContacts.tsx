import { useContext, useRef, ChangeEvent } from "react";
import { contactContext } from "../../context";

export const ContactFilter = () => {
  const { filteredContacts, clearFiltered } = useContext(contactContext);
  const text = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (text.current !== null) {
      filteredContacts(e.currentTarget.value);
    } else {
      clearFiltered();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};
