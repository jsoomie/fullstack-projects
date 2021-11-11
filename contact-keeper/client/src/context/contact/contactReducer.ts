import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  // UPDATE_CONTACT,
  // FILTER_CONTACTS,
  // CLEAR_FILTER,
  // SET_ALERT,
  // REMOVE_ALERT,
} from "../actions";

export interface ContactData {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: "professional" | "personal";
}

//GLOBAL STATE
export interface IState {
  contacts: ContactData[];
  contact: ContactData | undefined;
  addContacts: Function;
  deleteContact: Function;
  setCurrent: Function;
  clearCurrent: Function;
}

// TODO: Temporary state, will remove
export const initialState: ContactData[] = [
  {
    id: "1",
    name: "alice",
    email: "alice@gmail.com",
    phone: "123-123-1234",
    type: "professional",
  },
  {
    id: "2",
    name: "lacie",
    email: "lacie@gmail.com",
    phone: "555-555-5555",
    type: "personal",
  },
  {
    id: "3",
    name: "cheshire",
    email: "cheshire@gmail.com",
    phone: "777-123-4444",
    type: "personal",
  },
];

type Action =
  | { type: typeof ADD_CONTACT; payload: ContactData }
  | { type: typeof DELETE_CONTACT; payload: string }
  | { type: typeof SET_CURRENT; payload: ContactData }
  | { type: typeof CLEAR_CURRENT };

export const contactReducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        contact: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        contact: undefined,
      };
    default:
      return state;
  }
};
