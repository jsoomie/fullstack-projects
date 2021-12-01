import { createContext, ReactNode } from "react";

const initialTheme = {
  color: "blue",
};

interface IChild {
  children?: ReactNode;
}

export const ThemeContext = createContext<typeof initialTheme>(initialTheme);

export const ThemeProvider = ({ children }: IChild) => {
  return (
    <ThemeContext.Provider
      value={{
        color: initialTheme.color,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
