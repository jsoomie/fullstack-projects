import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import { contactContext } from "./contactContext";
import { contactReducer, initialState, IState } from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../actions";
import { ContactData } from "..";

export const GlobalUser: IState = {
  contacts: initialState,
  contact: undefined,
  filtered: undefined,
  addContacts: Function,
  deleteContact: Function,
  setCurrent: Function,
  clearCurrent: Function,
  updateContact: Function,
  filteredContacts: Function,
  clearFiltered: Function,
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
  const updateContact = (contact: ContactData) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter contacts
  const filteredContacts = (text: string) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear filter
  const clearFiltered = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        contact: state.contact,
        addContacts,
        deleteContact,
        filtered: state.filtered,
        setCurrent,
        clearCurrent,
        updateContact,
        filteredContacts,
        clearFiltered,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};
