import { Actions, Mode } from "contexts";
import { IThemeState } from "interfaces";

type Action =
  | { type: Actions.CHANGE_COLOR; payload: string }
  | { type: Actions.CHANGE_MODE; payload: Mode };

export const themeReducer = (state: IThemeState, action: Action) => {
  switch (action.type) {
    case Actions.CHANGE_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case Actions.CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};
