import { createContext, useReducer } from "react";
import { Actions, themeReducer } from "contexts";
import { IChild, IThemeState } from "interfaces";

export enum Theme {
  PRIMARY = "#58249c",
  SECONDARY = "#249c6b",
  TERTIARY = "#b70233",
}

export enum Mode {
  DARK = "dark",
  LIGHT = "light",
}

const initialTheme: IThemeState = {
  color: Theme.PRIMARY,
  mode: Mode.LIGHT,
  changeColor: (color: Theme) => {},
  changeMode: (mode: Mode) => {},
};

export const ThemeContext = createContext<typeof initialTheme>(initialTheme);

export const ThemeProvider = ({ children }: IChild) => {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

  const changeColor = (color: Theme) => {
    dispatch({ type: Actions.CHANGE_COLOR, payload: color });
  };

  const changeMode = (mode: Mode) => {
    dispatch({ type: Actions.CHANGE_MODE, payload: mode });
  };

  return (
    <ThemeContext.Provider
      value={{
        color: state.color,
        mode: state.mode,
        changeColor,
        changeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
