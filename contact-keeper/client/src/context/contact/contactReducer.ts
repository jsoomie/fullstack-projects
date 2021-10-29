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
  | { type: typeof ADD_CONTACT; payload: IState }
  | { type: typeof DELETE_CONTACT; payload: IState }
  | { type: typeof SET_CURRENT; payload: IState }
  | { type: typeof CLEAR_CURRENT; payload: IState }
  | { type: typeof UPDATE_CONTACT; payload: IState }
  | { type: typeof FILTER_CONTACTS; payload: IState }
  | { type: typeof CLEAR_FILTER; payload: IState }
  | { type: typeof SET_ALERT; payload: IState }
  | { type: typeof REMOVE_ALERT; payload: IState };

type Reducer = (state: IState, action: Action) => IState;

export const contactReducer: Reducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
