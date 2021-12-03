import { Actions } from "actions";
import { IAuthState, Action } from "interfaces";

export const authReducer = (state: IAuthState, action: Action) => {
  switch (action.type) {
    case Actions.TEST:
      return {
        ...state,
        payload: "",
      };
    default:
      return state;
  }
};
