import { ReactNode } from "react";

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
  changeColor: (color: string) => void;
}
