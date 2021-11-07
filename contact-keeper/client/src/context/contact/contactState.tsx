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

type ChildProps = {
  children?: JSX.Element;
};

export const GlobalUser: IState = {
  contacts: initialState,
  addContacts: Function,
};

export const ContactState = ({ children }: ChildProps): JSX.Element => {
  const [state, dispatch] = useReducer(contactReducer, GlobalUser);
  // Add contact
  const addContacts = (contact: ContactData[]) => {
    // TEMPORARY!!!!!!!!!!
    // only used to create id whereas mongo will create one for us
    for (let key in contact) {
      contact[key].id = uuid();
    }

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
        addContacts,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};
