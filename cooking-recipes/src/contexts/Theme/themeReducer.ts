import { Actions } from "contexts";
import { IThemeState } from "interfaces";

type Action = { type: Actions; payload: string };

export const themeReducer = (state: IThemeState, action: Action) => {
  switch (action.type) {
    case Actions.CHANGE_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};
