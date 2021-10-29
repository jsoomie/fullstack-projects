import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import { contactContext } from "./contactContext";
import { contactReducer } from "./contactReducer";
import { initialState } from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../actions";

type ChildProps = {
  children?: JSX.Element;
};

export const ContactState = ({ children }: ChildProps): JSX.Element => {
  const [state, dispatch] = useReducer(contactReducer, initialState);
  // Add contact

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
      }}
    >
      {children}
    </contactContext.Provider>
  );
};
