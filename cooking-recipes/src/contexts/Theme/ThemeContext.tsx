import { createContext, useReducer } from "react";
import { Actions, themeReducer } from "contexts";
import { IChild, IThemeState } from "interfaces";

const initialTheme: IThemeState = {
  color: "blue",
  changeColor: (color: string) => {},
};

export const ThemeContext = createContext<typeof initialTheme>(initialTheme);

export const ThemeProvider = ({ children }: IChild) => {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

  const changeColor = (color: string) => {
    dispatch({ type: Actions.CHANGE_COLOR, payload: color });
  };

  return (
    <ThemeContext.Provider
      value={{
        color: state.color,
        changeColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
