import { SET_ALERT, REMOVE_ALERT } from "../actions";

interface ISetAlertPayload {
  alert: {
    msg: string;
    type: string;
    show: boolean;
  };
}

export interface IState extends ISetAlertPayload {
  setAlert: Function;
}

type IAction =
  | {
      type: typeof SET_ALERT;
      payload: ISetAlertPayload;
    }
  | { type: typeof REMOVE_ALERT };

export const initialState: IState = {
  alert: {
    msg: "",
    type: "",
    show: false,
  },
  setAlert: Function,
};

export const AlertReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          msg: action.payload?.alert.msg,
          type: action.payload?.alert.type,
          show: true,
        },
      };
    case REMOVE_ALERT:
      return initialState;
    default:
      return state;
  }
};
