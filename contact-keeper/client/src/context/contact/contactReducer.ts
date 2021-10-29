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

export interface ContactData {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: string;
}

export interface IState {
  contacts: ContactData[];
}

// TODO: Temporary state, will remove
export const initialState: IState = {
  contacts: [],
};

type Action =
  | { type: typeof ADD_CONTACT; payload: ContactData[] }
  | { type: typeof DELETE_CONTACT; payload: ContactData[] }
  | { type: typeof SET_CURRENT; payload: ContactData[] }
  | { type: typeof CLEAR_CURRENT; payload: ContactData[] }
  | { type: typeof UPDATE_CONTACT; payload: ContactData[] }
  | { type: typeof FILTER_CONTACTS; payload: ContactData[] }
  | { type: typeof CLEAR_FILTER }
  | { type: typeof SET_ALERT }
  | { type: typeof REMOVE_ALERT };

type ContactReducer = (
  state: typeof initialState,
  action: Action
) => typeof initialState;

export const contactReducer: ContactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};
