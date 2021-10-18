import { createContext } from "react";
import { initialState } from "./githubReducer";

export const githubContext = createContext<typeof initialState>(initialState);
