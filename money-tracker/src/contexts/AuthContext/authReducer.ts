import { Actions } from "actions";
import { IAuthState, Action } from "interfaces";

export const authReducer = (state: IAuthState, action: Action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
