import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import { contactContext } from "./contactContext";
import { contactReducer, initialState, IState } from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  // UPDATE_CONTACT,
  // FILTER_CONTACTS,
  // CLEAR_FILTER,
} from "../actions";
import { ContactData } from "..";

export const GlobalUser: IState = {
  contacts: initialState,
  contact: null,
  addContacts: Function,
  deleteContact: Function,
  setCurrent: Function,
  clearCurrent: Function,
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
  const deleteContact = (id: string) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = (contact: ContactData) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        contact: state.contact,
        addContacts,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};
