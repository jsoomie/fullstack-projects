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

export const GlobalUser: IState = {
  contacts: initialState,
  addContacts: Function,
  deleteContact: Function,
};

type ChildProps = {
  children?: JSX.Element;
};
export const ContactState = ({ children }: ChildProps): JSX.Element => {
  const [state, dispatch] = useReducer(contactReducer, GlobalUser);
  // Add contact
  const addContacts = (contact: ContactData) => {
    contact.id = uuid(); // TEMPORARY: only use until mongo automatically adds id
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (contact: number) => {
    console.log("hello delete");
  };

  // Set Current Contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        addContacts,
        deleteContact,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};
