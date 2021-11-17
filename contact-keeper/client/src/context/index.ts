// Actions
export {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "./actions";

// Contacts
export { contactContext } from "./contact/contactContext";
export { contactReducer, initialState } from "./contact/contactReducer";
export { ContactState } from "./contact/contactState";

// Auth
export { AuthContext } from "./auth/authContext";
export { AuthState } from "./auth/AuthState";

// ALert
export { AlertContext } from "./alert/alertContext";
export { AlertState } from "./alert/AlertState";

// Types
export type { ContactData, IState } from "./contact/contactReducer";
