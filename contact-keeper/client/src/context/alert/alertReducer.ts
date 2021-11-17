import { SET_ALERT, REMOVE_ALERT } from "../actions";
import { IAlert, AlertData, initialAlert } from "./alertContext";

type Actions =
  | { type: typeof SET_ALERT; payload: AlertData }
  | { type: typeof REMOVE_ALERT; payload: any };

export const alertReducer = (state: IAlert, action: Actions): any => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alerts: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: initialAlert,
      };
    default:
      return state;
  }
};
