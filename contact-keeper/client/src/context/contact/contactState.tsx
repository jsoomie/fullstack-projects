import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import { contactContext } from "./contactContext";
import { contactReducer, initialState, IState } from "./contactReducer";

import {
  ADD_CONTACT,
  // DELETE_CONTACT,
  // SET_CURRENT,
  // CLEAR_CURRENT,
  // UPDATE_CONTACT,
  // FILTER_CONTACTS,
  // CLEAR_FILTER,
} from "../actions";
import { ContactData } from "..";

type ChildProps = {
  children?: JSX.Element;
};

export const GlobalUser: IState = {
  contacts: initialState,
  contact: {
    id: "100",
    name: "Hello",
    email: "whatever@gmail.com",
    phone: "123-009-9087",
    type: "personal",
  },
  addContacts: Function,
};

export const ContactState = ({ children }: ChildProps): JSX.Element => {
  const [state, dispatch] = useReducer(contactReducer, GlobalUser);
  // Add contact
  const addContacts = (contact: ContactData) => {
    contact.id = uuid(); // TEMPORARY: only use until mongo automatically adds id
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact

  // Set Current Contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        contact: state.contact,
        addContacts,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};
