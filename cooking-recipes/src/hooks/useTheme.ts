import { useContext } from "react";
import { ThemeContext } from "contexts";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme() must be used inside a Theme Provider");
  }

  return context;
};
