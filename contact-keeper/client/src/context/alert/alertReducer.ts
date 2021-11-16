import { SET_ALERT, REMOVE_ALERT } from "../actions";
import { IAlert } from "./alertContext";

type Actions =
  | { type: typeof SET_ALERT; payload: [] }
  | { type: typeof REMOVE_ALERT; payload: any };

export const alertReducer = (state: any, action: Actions): any => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert: any) => alert.id !== action.payload);
    default:
      return state;
  }
};
