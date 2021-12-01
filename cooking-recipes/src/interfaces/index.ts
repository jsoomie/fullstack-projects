import { ReactNode } from "react";
import { Mode, Theme } from "contexts";

// Recipes States
export interface IRecipe {
  id: string;
  title: string;
  ingredients: string[];
  method: string;
  cookingTime: string;
}

export interface IProps {
  recipes: IRecipe[];
}

// Children Props
export interface IChild {
  children: ReactNode;
}

// Theme States
export interface IThemeState {
  color: string;
  mode: "dark" | "light";
  changeColor: (color: Theme) => void;
  changeMode: (mode: Mode) => void;
}
