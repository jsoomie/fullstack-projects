import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "../actions";

export interface IContact {
  contacts: IState[];
}

export interface IState {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: string;
}

// TODO: Temporary state, will remove
export const initialState: IContact = {
  contacts: [
    {
      id: 1,
      name: "Alice Liddel",
      email: "alice@gmail.com",
      phone: "123-123-1234",
      type: "professional",
    },
    {
      id: 2,
      name: "Lacie Liddel",
      email: "Lacie@gmail.com",
      phone: "098-098-9876",
      type: "personal",
    },
    {
      id: 3,
      name: "Mad Hatter",
      email: "hatter@gmail.com",
      phone: "555-555-5555",
      type: "personal",
    },
  ],
};

type Action =
  | { type: typeof ADD_CONTACT; payload: IContact }
  | { type: typeof DELETE_CONTACT; payload: IContact }
  | { type: typeof SET_CURRENT; payload: IContact }
  | { type: typeof CLEAR_CURRENT; payload: IContact }
  | { type: typeof UPDATE_CONTACT; payload: IContact }
  | { type: typeof FILTER_CONTACTS; payload: IContact }
  | { type: typeof CLEAR_FILTER; payload: IContact }
  | { type: typeof SET_ALERT; payload: IContact }
  | { type: typeof REMOVE_ALERT; payload: IContact };

type Reducer = (state: IState[], action: Action) => IState[];

export const contactReducer: Reducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};
