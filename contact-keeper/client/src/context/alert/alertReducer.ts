import { REMOVE_ALERT, SET_ALERT } from "../actions";
import { IAlert, IAlertData } from "./alertContext";

type Action =
  | { type: typeof SET_ALERT; payload: IAlertData }
  | { type: typeof REMOVE_ALERT; payload: string };
export const alertReducer = (state: IAlert, action: Action): IAlert => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((alert) => alert.id !== action.payload),
      };
    default:
      return state;
  }
};
